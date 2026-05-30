// PATH: components/sections/blogs/detail/TableOfContents.tsx
// PrepBanker — Sticky Table of Contents
// Parses H2/H3 headings from blog HTML content, shows as sticky sidebar.
'use client';

import { useEffect, useRef, useState } from 'react';
import { List } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface Props {
  content: string; // HTML string
}

/** Extract headings from HTML string */
function extractHeadings(html: string): TocItem[] {
  // Run in browser only
  if (typeof document === 'undefined') return [];
  const div = document.createElement('div');
  div.innerHTML = html;
  const items: TocItem[] = [];
  div.querySelectorAll('h2, h3').forEach((el, i) => {
    const text = el.textContent?.trim() ?? '';
    if (!text) return;
    const id = el.id || `toc-heading-${i}-${text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
    el.id = id;
    items.push({ id, text, level: el.tagName === 'H2' ? 2 : 3 });
  });
  return items;
}

export default function TableOfContents({ content }: Props) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Parse headings client-side and inject IDs into actual DOM headings
  useEffect(() => {
    const parsed = extractHeadings(content);
    setItems(parsed);

    // Also inject IDs into the rendered .blog-prose headings
    const articleEl = document.querySelector('.blog-prose');
    if (articleEl) {
      const domHeadings = articleEl.querySelectorAll('h2, h3');
      domHeadings.forEach((el, i) => {
        const text = el.textContent?.trim() ?? '';
        const id = `toc-heading-${i}-${text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
        (el as HTMLElement).id = id;
      });
    }
  }, [content]);

  // Intersection observer for active heading
  useEffect(() => {
    if (items.length === 0) return;

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (items.length === 0) return null;

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: '#fff',
        border: '1px solid var(--color-gray-100)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2.5 px-5 py-4"
        style={{
          borderBottom: '1px solid var(--color-gray-100)',
          background: 'var(--color-off-white)',
        }}
      >
        <List className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-blue)' }} aria-hidden />
        <h3
          className="font-bold text-sm"
          style={{ color: 'var(--color-navy)', fontFamily: 'var(--font-display)' }}
        >
          Table of Contents
        </h3>
      </div>

      {/* TOC list */}
      <nav aria-label="Table of contents" className="px-4 py-4">
        <ul className="flex flex-col gap-0.5">
          {items.map(item => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className="w-full text-left px-3 py-1.5 rounded-lg transition-all text-xs leading-snug"
                  style={{
                    paddingLeft: item.level === 3 ? '1.5rem' : '0.75rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-blue)' : 'var(--color-gray-600)',
                    background: isActive ? 'rgba(27,110,181,0.07)' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--color-blue)' : '3px solid transparent',
                    cursor: 'pointer',
                    border: 'none',
                    borderLeftWidth: 3,
                    borderLeftStyle: 'solid',
                    borderLeftColor: isActive ? 'var(--color-blue)' : 'transparent',
                  }}
                >
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}