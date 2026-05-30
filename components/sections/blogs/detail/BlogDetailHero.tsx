// PATH: components/sections/blogs/detail/BlogDetailHero.tsx
import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import type { Blog } from '@/types/blogs';
import { formatBlogDate } from '@/lib/data/blogs/blogs';
import BlogShareButton from './BlogShareButton';

interface Props { blog: Blog; }

// AI tools strip matching PDF reference
const AI_TOOLS = [
  { name: 'ChatGPT',    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.28 9.28a5.77 5.77 0 00-.51-4.73 5.9 5.9 0 00-6.35-2.83A5.9 5.9 0 0010.07 0a5.89 5.89 0 00-5.62 4.08 5.88 5.88 0 00-3.93 2.84 5.9 5.9 0 00.73 6.92 5.84 5.84 0 00.51 4.73 5.9 5.9 0 006.35 2.83A5.86 5.86 0 0013.93 24a5.9 5.9 0 005.63-4.09 5.87 5.87 0 003.93-2.84 5.9 5.9 0 00-.73-6.79h.02z"/></svg> },
  { name: 'Claude',     icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.285-.072C1.2 12.6 0 11.37 0 9.75c0-1.502 1.05-2.75 2.45-3.02l.3-.043.093-.277A5.26 5.26 0 017.88 2.36c.98 0 1.865.28 2.67.72l.207.117.19-.14A4.428 4.428 0 0113.53 2c1.807 0 3.33 1.09 4.02 2.66l.1.23.245.02c1.79.15 3.105 1.64 3.105 3.42 0 .07 0 .14-.006.21l-.02.3.27.12c1.02.44 1.72 1.46 1.72 2.64 0 1.58-1.2 2.81-2.72 2.91l-.79.043-3.18.097-.79.048h-.23l-.08.127.08.23 4.72 2.647 3.458 1.94c.303.17.406.554.23.858l-1.49 2.58a.625.625 0 01-.857.23l-3.46-1.942-4.716-2.65-.23-.08-.23.08-4.717 2.65L4.64 21.56a.625.625 0 01-.857-.23l-1.49-2.578a.625.625 0 01.23-.858l4.186-2.94z"/></svg> },
  { name: 'Gemini',     icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.304 14.304 0 0012 12 14.304 14.304 0 00-12 12"/></svg> },
  { name: 'Perplexity', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.3527 7.16309H16.0274V1.21167L22.3527 7.16309ZM13.8759 0L7.94745 5.85228V0H2.17285V10.8897L0 13.0138V24H7.94745V18.1477L13.8759 24H21.8234V13.1309L24 11.0069V0H13.8759ZM16.0274 21.8485H14.7418L7.94745 15.2186V21.8485H2.15143V13.7655L4.43629 11.5243H7.94745V8.10309L13.7189 2.39381V9.02369H19.7703L21.8234 11.0924V21.8485H16.0274Z"/></svg> },
  { name: 'Grok',       icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.3L13.06 12 20.3 19.7a10 10 0 000-15.4zM3.7 19.7L10.94 12 3.7 4.3a10 10 0 000 15.4z"/></svg> },
];

export default function BlogDetailHero({ blog }: Props) {
  return (
    <div
      className="relative overflow-hidden border-b"
      style={{
        background: 'var(--color-navy-deep)',
        borderColor: 'rgba(255,255,255,0.08)',
        padding: '2rem 0 1.5rem',
      }}
    >

      {/* ── Decorative background blobs (matches BlogHero) ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-blue) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--color-gray-200) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10" style={{ padding: '0 1.5rem' }}>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blogs' },
            { label: blog.title },
          ]}
  
        />

        {/* Title */}
        <h1
          className="font-extrabold leading-tight mt-5 mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            color: '#fff',
            maxWidth: 820,
          }}
        >
          {blog.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
            >
              {blog.author.name.split(' ').map(p => p[0]).join('').slice(0, 2)}
            </div>
            <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {blog.author.name}
            </span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1.5 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Calendar className="w-3.5 h-3.5" aria-hidden />
            {formatBlogDate(blog.publishedAt)}
          </div>
        </div>

        {/* Share button row */}
        <BlogShareButton />

{/* Summarise with AI strip */}
<div
  className="flex flex-wrap items-center gap-3 mt-4 mb-8 px-4 py-2.5 rounded-xl w-fit"
  style={{
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
  }}
>
  <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
    Summarise with AI
  </span>
 {AI_TOOLS.map(tool => (
  <button
    key={tool.name}
    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ai-tool-btn"
    style={{
      border: '1px solid rgba(255,255,255,0.15)',
      background: 'rgba(255,255,255,0.08)',
      color: 'rgba(255,255,255,0.80)',
      cursor: 'pointer',
      transition: 'background 0.15s ease',
    }}
  >
    <span>{tool.icon}</span>
    {tool.name}
  </button>
))}
</div>
        
      </div>

      {/* Bottom separator */}
      <div className="h-px mt-6 bg-white/10 relative z-10" />
    </div>
  );
}