// PATH: components/sections/blogs/listing/BlogSearchBar.tsx
'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Search } from 'lucide-react';

function BlogSearchBarInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');
    if (e.target.value.trim()) {
      params.set('search', e.target.value.trim());
    } else {
      params.delete('search');
    }
router.replace(`/blogs?${params.toString()}`, { scroll: false });
  };

  return (
    <form onSubmit={e => e.preventDefault()} className="relative flex-1 max-w-sm">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none "
        style={{ color: 'var(--color-gray-400)' }}
        aria-hidden
      />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search articles..."
        className="w-full pl-9 pr-4 py-2 text-sm rounded-xl outline-none focus:outline-none focus-visible:outline-none transition-all"
        style={{
          border: '1px solid var(--color-gray-200)',
          background: 'var(--color-gray-50)',
          color: 'var(--color-navy)',
          fontSize: '0.875rem',
        }}
        onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-blue)'; e.currentTarget.style.background = '#fff'; }}
        onBlur={e => { e.currentTarget.style.borderColor = 'var(--color-gray-200)'; e.currentTarget.style.background = 'var(--color-gray-50)'; }}
      />
    </form>
  );
}

export default function BlogSearchBar() {
  return (
    <Suspense fallback={
      <div className="relative flex-1 max-w-sm">
        <div className="w-full h-9 rounded-xl" style={{ background: 'var(--color-gray-100)' }} />
      </div>
    }>
      <BlogSearchBarInner />
    </Suspense>
  );
}   