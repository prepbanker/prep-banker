// PATH: app/glossary/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Banking Exam Glossary – PrepBanker',
  description: 'Glossary of key terms used in banking recruitment exams like SBI PO and IBPS PO, including cut-offs, normalisation, and CRP.',
  alternates: { canonical: 'https://prepbanker.com/glossary' },
};

const GLOSSARY_TERMS = [
  {
    id: 'sectional-cut-off',
    name: 'Sectional Cut-off',
    description: '{{NEEDS_CONTENT}}',
  },
  {
    id: 'normalisation',
    name: 'Normalisation',
    description: '{{NEEDS_CONTENT}}',
  },
  {
    id: 'ibps-crp',
    name: 'IBPS CRP',
    description: '{{NEEDS_CONTENT}}',
  },
  {
    id: 'provisional-allotment',
    name: 'Provisional Allotment',
    description: '{{NEEDS_CONTENT}}',
  },
  {
    id: 'reserve-list',
    name: 'Reserve List',
    description: '{{NEEDS_CONTENT}}',
  },
  {
    id: 'gd-pi',
    name: 'GD-PI',
    description: '{{NEEDS_CONTENT}}',
  },
];

export default function GlossaryPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://prepbanker.com/glossary#definedtermset',
    'name': 'Banking Exam Glossary',
    'description': 'Key banking recruitment terminology for SBI PO and IBPS PO aspirants.',
    'hasDefinedTerm': GLOSSARY_TERMS.map(term => ({
      '@type': 'DefinedTerm',
      'name': term.name,
      'description': term.description,
      'termCode': term.id,
      'url': `https://prepbanker.com/glossary#${term.id}`,
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Glossary', href: '/glossary' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
              Banking Exam <span style={{ background: 'linear-gradient(135deg, #D4A017, #F0B429)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Glossary</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              Quick definitions for terms commonly used in banking recruitment cycles.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: '5rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '3rem', boxShadow: '0 4px 20px rgba(13,27,62,0.05)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {GLOSSARY_TERMS.map(term => (
                <div key={term.id} id={term.id} style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '2rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: '#0D1B3E', marginBottom: '0.75rem' }}>
                    {term.name}
                  </h2>
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#475569', margin: 0 }}>
                    {term.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
