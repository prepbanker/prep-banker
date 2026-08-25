// PATH: app/editorial-policy/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema, WebPageSchema } from '@/components/seo';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Policy – PrepBanker',
  description: 'Our editorial policy, exam data sourcing guidelines, review processes, and corrections policy at PrepBanker.',
  alternates: { canonical: 'https://prepbanker.com/editorial-policy' },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Editorial Policy', href: '/editorial-policy' },
        ]}
      />
      <WebPageSchema
        name="Editorial Policy – PrepBanker"
        description="Our editorial policy, exam data sourcing guidelines, review processes, and corrections policy at PrepBanker."
        url="https://prepbanker.com/editorial-policy"
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
              Editorial <span style={{ background: 'linear-gradient(135deg, #D4A017, #F0B429)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Policy</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              How we source, verify, and update our banking exam guides and study materials.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: '5rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '3rem', boxShadow: '0 4px 20px rgba(13,27,62,0.05)' }}>
            
            <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: '#0D1B3E', marginBottom: '1rem' }}>
                1. Data Sourcing Guidelines
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#475569', marginBottom: '1.5rem' }}>
                We maintain high integrity in sourcing all exam dates, vacancies, syllabus details, and eligibility criteria. Our primary data sources are the official notifications and announcements published directly by the respective conducting bodies:
              </p>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: '#475569', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><strong>Institute of Banking Personnel Selection:</strong> <a href="https://www.ibps.in" target="_blank" rel="noopener noreferrer" style={{ color: '#1B6EB5', fontWeight: 650, textDecoration: 'none' }}>ibps.in</a></li>
                <li><strong>State Bank of India:</strong> <a href="https://bank.sbi/web/careers" target="_blank" rel="noopener noreferrer" style={{ color: '#1B6EB5', fontWeight: 650, textDecoration: 'none' }}>sbi.co.in (bank.sbi/careers)</a></li>
                <li><strong>Reserve Bank of India:</strong> <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" style={{ color: '#1B6EB5', fontWeight: 650, textDecoration: 'none' }}>rbi.org.in</a></li>
              </ul>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#475569', marginTop: '1.5rem' }}>
                {"{{NEEDS_CONTENT: Data Sourcing Editorial Content}}"}
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: '#0D1B3E', marginBottom: '1rem' }}>
                2. Review Process &amp; Verification Cadence
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#475569' }}>
                {"{{NEEDS_CONTENT: Review Process and Update Cadence Details}}"}
              </p>
            </div>

            <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: '#0D1B3E', marginBottom: '1rem' }}>
                3. Corrections Process
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#475569' }}>
                {"{{NEEDS_CONTENT: Corrections Process and Report Guidelines}}"}
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', color: '#0D1B3E', marginBottom: '1rem' }}>
                4. Editorial Independence
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#475569' }}>
                {"{{NEEDS_CONTENT: Editorial Independence and Integrity Statement}}"}
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
