// PATH: components/shared/Breadcrumb.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
  linkColor?:      string;
  separatorColor?: string;
  currentColor?:   string;
}

export default function Breadcrumb({
  items,
  linkColor      = '#60B4FF',
  separatorColor = 'rgba(255,255,255,0.25)',
  currentColor   = 'rgba(255,255,255,0.7)',
}: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {isLast || !item.href ? (
              <span style={{
                color:    isLast ? currentColor : linkColor,
                fontSize: '0.875rem',
                fontWeight: isLast ? 500 : 400,
              }}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href} style={{ color: linkColor, fontSize: '0.875rem', textDecoration: 'none' }}>
                {item.label}
              </Link>
            )}
            {!isLast && (
              <ChevronRight size={11} style={{ color: separatorColor, flexShrink: 0 }} />
            )}
          </span>
        );
      })}
    </nav>
  );
}