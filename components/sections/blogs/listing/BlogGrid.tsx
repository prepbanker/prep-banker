// PATH: components/sections/blogs/listing/BlogGrid.tsx
import type { Blog } from '@/types/blogs';
import BlogCard from './BlogCard';

interface Props {
  blogs: Blog[];
  showFeaturedFirst?: boolean;
}

export default function BlogGrid({ blogs, showFeaturedFirst = false }: Props) {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}