// PATH: app/data/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema, WebPageSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Banking Exam Datasets Hub – PrepBanker',
  description: 'Access and download structured datasets for banking exam cut-offs, vacancy distributions, and historical trends.',
  alternates: { canonical: 'https://prepbanker.com/data' },
};

export default function DataHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Datasets Hub', href: '/data' },
        ]}
      />
      <WebPageSchema
        name="Banking Exam Datasets Hub – PrepBanker"
        description="Access and download structured datasets for banking exam cut-offs, vacancy distributions, and historical trends."
        url="https://prepbanker.com/data"
      />
      <Header />
      <main className="font-sans text-slate-800 bg-slate-50/50">
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #07102A 0%, #1A2D5A 100%)',
            padding: '4rem 0',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, #F0B429 0%, transparent 70%)' }} />
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, #1B6EB5 0%, transparent 70%)' }} />
          </div>

          <div style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.025em' }}>
              Datasets <span style={{ background: 'linear-gradient(135deg, #D4A017, #F0B429)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Hub</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              Structured, machine-readable datasets covering banking recruitment histories.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: '5rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '3rem', boxShadow: '0 4px 20px rgba(13,27,62,0.05)', textAlign: 'center' }}>
            <div style={{ padding: '2rem 1rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: '#0D1B3E', marginBottom: '1rem' }}>
                Structured Banking Data Repository
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#64748B', maxWidth: '600px', margin: '0 auto 2rem' }}>
                {"{{NEEDS_CONTENT: Dataset Repository Sprint 5 Content}}"}
              </p>
              <div style={{ display: 'inline-flex', padding: '12px 24px', borderRadius: '12px', background: '#F1F5F9', color: '#475569', fontWeight: 700, fontSize: '0.95rem' }}>
                Upcoming Datasets: Cut-offs (2019-2025) &amp; Vacancy Distributions (2020-2026)
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
