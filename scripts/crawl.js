const fs = require('fs');
const path = require('path');

const TARGET_BASE = process.argv[2] || 'https://prepbanker.com';
const TARGET_URL = TARGET_BASE.endsWith('/') ? TARGET_BASE : TARGET_BASE + '/';
const START_URLS = [TARGET_URL, `${TARGET_URL}sitemap.xml`];
const ROBOTS_URL = `${TARGET_URL}robots.txt`;
const BASE_HOST = new URL(TARGET_URL).host;
const CSV_FILE = path.join(__dirname, '../crawler_results.csv');

// Robots.txt rule matching logic
function parseRobotsTxt(content) {
  if (!content) return [];
  const lines = content.split('\n');
  let inGroup = false;
  const rules = [];
  
  for (let line of lines) {
    line = line.trim();
    if (line.toLowerCase().startsWith('user-agent:')) {
      const agent = line.substring(11).trim();
      inGroup = (agent === '*');
    } else if (inGroup) {
      if (line.toLowerCase().startsWith('disallow:')) {
        const p = line.substring(9).trim();
        if (p) rules.push({ type: 'disallow', path: p });
      } else if (line.toLowerCase().startsWith('allow:')) {
        const p = line.substring(6).trim();
        if (p) rules.push({ type: 'allow', path: p });
      }
    }
  }
  // Sort rules by path length descending (most specific rules take precedence)
  rules.sort((a, b) => b.path.length - a.path.length);
  return rules;
}

function isAllowed(url, rules) {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname;
    for (const rule of rules) {
      if (path.startsWith(rule.path)) {
        return rule.type === 'allow';
      }
    }
  } catch (e) {
    // Treat invalid URLs as disallowed
    return false;
  }
  return true;
}

// Extraction utilities using regex
function extractLinks(html, pageUrl) {
  const linkRegex = /<a\s+[^>]*href=["']([^"']+)["']/gi;
  const links = [];
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    let href = match[1].trim();
    href = href.split('#')[0]; // Remove hash fragment
    if (!href) continue;
    
    try {
      const resolved = new URL(href, pageUrl).toString();
      links.push(resolved);
    } catch (e) {
      // Ignore malformed links
    }
  }
  return links;
}

function extractCanonical(html) {
  const match = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || 
                html.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  return match ? match[1] : null;
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].trim() : null;
}

function extractDescription(html) {
  const match = html.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                html.match(/<meta\s+[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
  return match ? match[1] : null;
}

function countH1s(html) {
  const matches = html.match(/<h1\b[^>]*>/gi);
  return matches ? matches.length : 0;
}

// Fetch helper with timeout
async function fetchWithTimeout(url, options = {}) {
  const { timeout = 10000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

// BFS Crawler Core
async function main() {
  console.log('--- STARTING SEO & LINK CRAWLER ---');
  
  // 1. Fetch Robots.txt
  let robotsRules = [];
  try {
    console.log(`Fetching robots.txt from ${ROBOTS_URL}...`);
    const res = await fetchWithTimeout(ROBOTS_URL);
    if (res.status === 200) {
      const text = await res.text();
      robotsRules = parseRobotsTxt(text);
      console.log(`Loaded ${robotsRules.length} robots.txt rules.`);
    }
  } catch (e) {
    console.log('Failed to fetch robots.txt, proceeding without exclusions.');
  }

  // 2. Fetch Sitemap and Sitemap Index URLs
  const sitemapUrls = new Set();
  const sitemapsToFetch = [`${TARGET_URL}sitemap_index.xml`, `${TARGET_URL}sitemap.xml`];
  
  for (const sitemapUrl of sitemapsToFetch) {
    try {
      console.log(`Fetching sitemap from ${sitemapUrl}...`);
      const res = await fetchWithTimeout(sitemapUrl);
      if (res.status === 200) {
        const text = await res.text();
        const locRegex = /<loc>(.*?)<\/loc>/g;
        let match;
        while ((match = locRegex.exec(text)) !== null) {
          const loc = match[1].trim();
          if (loc.endsWith('.xml')) {
            // Nested sitemap in index
            if (!sitemapsToFetch.includes(loc)) {
              sitemapsToFetch.push(loc);
            }
          } else {
            sitemapUrls.add(loc);
          }
        }
      }
    } catch (e) {
      console.log(`Sitemap ${sitemapUrl} not found or failed to load.`);
    }
  }
  
  console.log(`Found ${sitemapUrls.size} unique URLs in sitemaps.`);

  // 3. Setup BFS Crawl State
  const queue = [TARGET_URL];
  for (const sUrl of sitemapUrls) {
    if (isAllowed(sUrl, robotsRules)) {
      queue.push(sUrl);
    }
  }
  
  const visited = new Set();
  const crawledResults = new Map(); // url -> record
  const referrers = new Map(); // targetUrl -> Set(referrerUrl)
  
  // Enqueue helper
  function enqueue(url, fromUrl = null) {
    if (fromUrl) {
      if (!referrers.has(url)) {
        referrers.set(url, new Set());
      }
      referrers.get(url).add(fromUrl);
    }
    
    if (!visited.has(url) && !queue.includes(url)) {
      queue.push(url);
    }
  }

  // Crawl Loop
  while (queue.length > 0) {
    const url = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);
    
    console.log(`Crawling (${visited.size}/${visited.size + queue.length}): ${url}`);
    
    // Polite delay
    await new Promise(r => setTimeout(r, 100));
    
    let currentUrl = url;
    const chain = [url];
    let redirectTarget = null;
    let finalStatus = 0;
    let finalHtml = null;
    
    // Follow redirect chain
    while (chain.length <= 10) {
      try {
        const res = await fetchWithTimeout(currentUrl, { redirect: 'manual' });
        finalStatus = res.status;
        
        if (finalStatus >= 300 && finalStatus < 400) {
          const loc = res.headers.get('location');
          if (!loc) break;
          const resolved = new URL(loc, currentUrl).toString();
          redirectTarget = resolved;
          chain.push(resolved);
          currentUrl = resolved;
        } else {
          if (finalStatus === 200) {
            finalHtml = await res.text();
          }
          break;
        }
      } catch (err) {
        finalStatus = 500;
        break;
      }
    }
    
    // Log hops in Crawled Results
    for (let i = 0; i < chain.length; i++) {
      const hopUrl = chain[i];
      const isFinal = (i === chain.length - 1);
      
      // Prevent duplicate processing of hopped URLs
      if (hopUrl !== url) {
        visited.add(hopUrl);
      }
      
      const record = {
        url: hopUrl,
        status: isFinal ? finalStatus : 308, // Assumed status if intermediate redirect hop
        redirectTarget: isFinal ? null : chain[chain.length - 1],
        chainLength: chain.length - 1 - i,
        canonical: null,
        title: null,
        description: null,
        h1Count: 0,
        inSitemap: sitemapUrls.has(hopUrl)
      };
      
      if (isFinal && finalStatus === 200 && finalHtml) {
        record.canonical = extractCanonical(finalHtml);
        record.title = extractTitle(finalHtml);
        record.description = extractDescription(finalHtml);
        record.h1Count = countH1s(finalHtml);
        
        // Find internal links on final page
        const extractedLinks = extractLinks(finalHtml, hopUrl);
        for (const targetLink of extractedLinks) {
          try {
            const parsedTarget = new URL(targetLink);
            if (parsedTarget.host === BASE_HOST) {
              const pathname = parsedTarget.pathname.toLowerCase();
              const isResource = pathname.endsWith('.png') || pathname.endsWith('.jpg') || 
                                 pathname.endsWith('.jpeg') || pathname.endsWith('.gif') || 
                                 pathname.endsWith('.pdf') || pathname.endsWith('.css') || 
                                 pathname.endsWith('.js') || pathname.endsWith('.xml') ||
                                 pathname.endsWith('.svg');
              if (!isResource && isAllowed(targetLink, robotsRules)) {
                enqueue(targetLink, hopUrl);
              }
            }
          } catch (e) {}
        }
      }
      
      crawledResults.set(hopUrl, record);
    }
  }

  // 4. Output CSV
  function escapeCsv(val) {
    if (val === null || val === undefined) return '';
    const str = String(val);
    if (/[",\n\r]/.test(str)) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  }
  
  const csvHeaders = 'URL,Status,Redirect Target,Chain Length,Canonical,Title,Description,H1 Count,In Sitemap\n';
  let csvContent = csvHeaders;
  for (const record of crawledResults.values()) {
    csvContent += [
      record.url,
      record.status,
      record.redirectTarget || '',
      record.chainLength,
      record.canonical || '',
      record.title || '',
      record.description || '',
      record.h1Count,
      record.inSitemap ? 'true' : 'false'
    ].map(escapeCsv).join(',') + '\n';
  }
  
  fs.writeFileSync(CSV_FILE, csvContent, 'utf8');
  console.log(`Saved audit results to ${CSV_FILE}`);

  // 5. Generate Audit Summary Report
  const totalUrls = crawledResults.size;
  const errors4xx = [];
  const errors5xx = [];
  const longChains = [];
  const canonicalMismatches = [];
  const sitemapNon200 = [];
  const orphans = [];
  
  const titleMap = new Map(); // title -> Array(url)
  const descMap = new Map(); // desc -> Array(url)

  for (const record of crawledResults.values()) {
    const url = record.url;
    
    // Status filters
    if (record.status >= 400 && record.status < 500) {
      errors4xx.push(record);
    } else if (record.status >= 500) {
      errors5xx.push(record);
    }
    
    // Redirection chains > 1 hop
    if (record.chainLength > 1) {
      longChains.push(record);
    }
    
    // Canonical check
    if (record.status === 200 && record.canonical && record.canonical !== url) {
      canonicalMismatches.push(record);
    }
    
    // Sitemap URL not 200
    if (record.inSitemap && record.status !== 200) {
      sitemapNon200.push(record);
    }
    
    // Orphans (200 page NOT in sitemap)
    if (record.status === 200 && !record.inSitemap) {
      orphans.push(record);
    }
    
    // Duplicates check
    if (record.status === 200) {
      if (record.title) {
        if (!titleMap.has(record.title)) titleMap.set(record.title, []);
        titleMap.get(record.title).push(url);
      }
      if (record.description) {
        if (!descMap.has(record.description)) descMap.set(record.description, []);
        descMap.get(record.description).push(url);
      }
    }
  }

  // Duplicate aggregations
  const duplicateTitles = [];
  for (const [title, urls] of titleMap.entries()) {
    if (urls.length > 1) {
      duplicateTitles.push({ title, urls });
    }
  }
  
  const duplicateDescs = [];
  for (const [desc, urls] of descMap.entries()) {
    if (urls.length > 1) {
      duplicateDescs.push({ desc, urls });
    }
  }

  console.log('\n======================================');
  console.log('            CRAWL SUMMARY             ');
  console.log('======================================');
  console.log(`Total Crawled URLs:             ${totalUrls}`);
  console.log(`4xx Error Count:                ${errors4xx.length}`);
  console.log(`5xx Error Count:                ${errors5xx.length}`);
  console.log(`Chains > 1 Hop Count:           ${longChains.length}`);
  console.log(`Orphan Pages (200, no sitemap): ${orphans.length}`);
  console.log(`Duplicate Title Count:          ${duplicateTitles.length}`);
  console.log(`Duplicate Description Count:    ${duplicateDescs.length}`);
  console.log('======================================\n');

  if (errors4xx.length > 0) {
    console.log('--- 4xx ERRORS & REFERRERS ---');
    errors4xx.forEach(err => {
      const refs = Array.from(referrers.get(err.url) || []);
      console.log(`URL: ${err.url} (Status: ${err.status})`);
      console.log(`Referenced by: ${refs.join(', ') || 'Direct / Seed'}`);
    });
    console.log('');
  }

  if (errors5xx.length > 0) {
    console.log('--- 5xx ERRORS & REFERRERS ---');
    errors5xx.forEach(err => {
      const refs = Array.from(referrers.get(err.url) || []);
      console.log(`URL: ${err.url} (Status: ${err.status})`);
      console.log(`Referenced by: ${refs.join(', ') || 'Direct / Seed'}`);
    });
    console.log('');
  }

  if (longChains.length > 0) {
    console.log('--- REDIRECT CHAINS > 1 HOP ---');
    longChains.forEach(r => {
      console.log(`URL: ${r.url} -> Redirect Target: ${r.redirectTarget} (Hops: ${r.chainLength})`);
    });
    console.log('');
  }

  if (canonicalMismatches.length > 0) {
    console.log('--- CANONICAL MISMATCHES ---');
    canonicalMismatches.forEach(r => {
      console.log(`URL: ${r.url} | Canonical: ${r.canonical}`);
    });
    console.log('');
  }

  if (sitemapNon200.length > 0) {
    console.log('--- SITEMAP URLS WITH NON-200 STATUS ---');
    sitemapNon200.forEach(r => {
      console.log(`URL: ${r.url} (Status: ${r.status})`);
    });
    console.log('');
  }

  if (duplicateTitles.length > 0) {
    console.log('--- DUPLICATE TITLES ---');
    duplicateTitles.forEach(dup => {
      console.log(`Title: "${dup.title}"`);
      dup.urls.forEach(u => console.log(`  - ${u}`));
    });
    console.log('');
  }

  if (duplicateDescs.length > 0) {
    console.log('--- DUPLICATE DESCRIPTIONS ---');
    duplicateDescs.forEach(dup => {
      console.log(`Description: "${dup.desc}"`);
      dup.urls.forEach(u => console.log(`  - ${u}`));
    });
    console.log('');
  }
}

main().catch(err => {
  console.error('Crawl script encountered error:', err);
  process.exit(1);
});
