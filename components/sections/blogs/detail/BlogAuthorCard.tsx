// PATH: components/sections/blogs/detail/BlogAuthorCard.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Author Card
// Shown at the bottom of each blog post.
// ─────────────────────────────────────────
import type { BlogAuthor } from '@/types/blogs';

interface Props {
  author: BlogAuthor;
}

export default function BlogAuthorCard({ author }: Props) {
  const initials = author.name
    .split(' ')
    .map(p => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl mt-10"
      style={{
        background: 'linear-gradient(135deg, rgba(13,27,62,0.04) 0%, rgba(27,110,181,0.05) 100%)',
        border: '1px solid var(--color-gray-100)',
      }}
    >
      {/* Avatar */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, var(--color-navy-light), var(--color-blue))',
          color: '#fff',
          boxShadow: '0 4px 16px rgba(27,110,181,0.25)',
        }}
      >
        {initials}
      </div>

      {/* Info */}
      <div className="flex-1">
        {/* Label */}
        <p
          className="text-[10px] font-bold uppercase tracking-widest mb-1"
          style={{ color: 'var(--color-gold-bright)' }}
        >
          Written by
        </p>
        <h3
          className="font-bold text-base mb-0.5"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)' }}
        >
          {author.name}
        </h3>
        <p
          className="text-xs font-medium mb-2"
          style={{ color: 'var(--color-blue)' }}
        >
          {author.designation}
        </p>
        {author.bio && (
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--color-gray-600)' }}
          >
            {author.bio}
          </p>
        )}
      </div>
    </div>
  );
}