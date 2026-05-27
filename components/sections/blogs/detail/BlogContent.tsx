// PATH: components/sections/blogs/detail/BlogContent.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Detail Content Renderer
// Renders HTML blog content with PrepBanker typography styles.
// All prose styling is scoped to `.blog-prose` to avoid leaking.
// ─────────────────────────────────────────

interface Props {
  content: string; // HTML string from blog data
}

export default function BlogContent({ content }: Props) {
  return (
    <>
      {/* ── Scoped prose styles ── */}
      <style>{`
        .blog-prose {
          color: var(--color-gray-800);
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.8;
        }
        .blog-prose h2 {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          font-weight: 700;
          color: var(--color-navy);
          margin: 2rem 0 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--color-gray-100);
          line-height: 1.3;
        }
        .blog-prose h3 {
          font-family: var(--font-display);
          font-size: clamp(1rem, 2vw, 1.15rem);
          font-weight: 700;
          color: var(--color-navy-mid);
          margin: 1.5rem 0 0.5rem;
          line-height: 1.35;
        }
        .blog-prose p {
          margin: 0 0 1.1rem;
          color: var(--color-gray-800);
        }
        .blog-prose ul,
        .blog-prose ol {
          margin: 0.75rem 0 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .blog-prose li {
          color: var(--color-gray-800);
          line-height: 1.7;
          padding-left: 0.25rem;
        }
        .blog-prose ul li {
          list-style-type: none;
          position: relative;
          padding-left: 1.4rem;
        }
        .blog-prose ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-blue), var(--color-navy-light));
        }
        .blog-prose ol {
          list-style: none;
          counter-reset: blog-counter;
        }
        .blog-prose ol li {
          counter-increment: blog-counter;
          position: relative;
          padding-left: 2rem;
        }
        .blog-prose ol li::before {
          content: counter(blog-counter);
          position: absolute;
          left: 0;
          top: 0.1em;
          width: 22px;
          height: 22px;
          background: linear-gradient(135deg, var(--color-blue), var(--color-navy-light));
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .blog-prose strong {
          font-weight: 700;
          color: var(--color-navy);
        }
        .blog-prose a {
          color: var(--color-blue);
          text-decoration: underline;
          text-underline-offset: 3px;
          font-weight: 500;
        }
        .blog-prose a:hover {
          color: var(--color-blue-bright);
        }
        .blog-prose blockquote {
          border-left: 4px solid var(--color-gold);
          background: rgba(212,160,23,0.06);
          margin: 1.5rem 0;
          padding: 1rem 1.25rem;
          border-radius: 0 10px 10px 0;
          font-style: italic;
          color: var(--color-navy-mid);
        }
        .blog-prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 0.9rem;
        }
        .blog-prose table th {
          background: var(--color-navy);
          color: #fff;
          font-weight: 600;
          padding: 10px 14px;
          text-align: left;
          font-size: 0.8rem;
          letter-spacing: 0.03em;
        }
        .blog-prose table td {
          padding: 9px 14px;
          border-bottom: 1px solid var(--color-gray-100);
          color: var(--color-gray-800);
        }
        .blog-prose table tr:nth-child(even) td {
          background: var(--color-gray-50);
        }
        .blog-prose table tr:first-child th:first-child { border-radius: 8px 0 0 0; }
        .blog-prose table tr:first-child th:last-child  { border-radius: 0 8px 0 0; }
        .blog-prose code {
          background: var(--color-gray-50);
          border: 1px solid var(--color-gray-100);
          padding: 1px 6px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.85em;
          color: var(--color-navy-mid);
        }
        .blog-prose img {
          max-width: 100%;
          border-radius: 12px;
          margin: 1.5rem 0;
          box-shadow: var(--shadow-card);
        }
        /* ── Key Takeaway box ── */
        .blog-prose .key-takeaway {
          background: linear-gradient(135deg, rgba(27,110,181,0.06) 0%, rgba(13,27,62,0.04) 100%);
          border: 1px solid rgba(27,110,181,0.18);
          border-left: 4px solid var(--color-blue);
          border-radius: 0 12px 12px 0;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0;
        }
        /* ── Important Note box ── */
        .blog-prose .note-box {
          background: rgba(212,160,23,0.07);
          border: 1px solid rgba(212,160,23,0.22);
          border-left: 4px solid var(--color-gold);
          border-radius: 0 12px 12px 0;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0;
        }
      `}</style>

      <article
        className="blog-prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}