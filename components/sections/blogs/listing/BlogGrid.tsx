// PATH: components/sections/blogs/listing/BlogGrid.tsx
// ─────────────────────────────────────────
// PrepBanker — Blog Listing Grid
// ─────────────────────────────────────────
import type { Blog } from '@/types/blogs';
import BlogCard from './BlogCard';
import FeaturedBlogCard from './FeaturedBlogCard';

interface Props {
  blogs: Blog[];
  showFeaturedFirst?: boolean;
}

export default function BlogGrid({ blogs, showFeaturedFirst = true }: Props) {
  if (blogs.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-20 rounded-2xl"
        style={{ background: '#fff', border: '1px solid var(--color-gray-100)' }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ background: 'var(--color-sky)' }}
        >
          <span className="text-2xl">📝</span>
        </div>
        <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--color-navy)' }}>No Articles Found</h3>
        <p className="text-sm" style={{ color: 'var(--color-gray-600)' }}>
          Try a different category or check back soon.
        </p>
      </div>
    );
  }

  // If showFeaturedFirst and first blog is featured, render it as wide card
  const [first, ...rest] = blogs;
  const renderFeaturedFirst = showFeaturedFirst && first?.isFeatured;

  return (
    <div>
      {/* Featured wide card (first blog if featured) */}
      {renderFeaturedFirst && (
        <div className="mb-6">
          <FeaturedBlogCard blog={first} />
        </div>
      )}

      {/* Regular grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {(renderFeaturedFirst ? rest : blogs).map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}