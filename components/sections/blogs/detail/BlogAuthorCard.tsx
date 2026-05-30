// PATH: components/sections/blogs/detail/BlogAuthorCard.tsx
import type { BlogAuthor } from '@/types/blogs';

interface Props { author: BlogAuthor; }

export default function BlogAuthorCard({ author }: Props) {
  const initials = author.name
    .split(' ')
    .map(p => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl mt-8"
      style={{
        background: 'var(--color-off-white)',
        border: '1px solid var(--color-gray-100)',
      }}
    >
      {/* Avatar */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
        style={{
          background: 'var(--color-sky)',
          color: 'var(--color-blue)',
          border: '2px solid var(--color-gray-200)',
        }}
      >
        {initials}
      </div>

      {/* Info */}
      <div>
        <h3
          className="font-bold text-sm mb-0.5"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-navy)' }}
        >
          {author.name}
        </h3>
        <p className="text-xs mb-2" style={{ color: 'var(--color-blue)' }}>
          {author.designation}
        </p>
        {author.bio && (
          <p className="text-xs leading-relaxed" style={{ color: 'var(--color-gray-600)' }}>
            {author.bio}
          </p>
        )}
      </div>
    </div>
  );
}