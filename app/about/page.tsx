import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema, WebPageSchema, generatePageMeta } from '@/components/seo';
import SuccessMetricsTabs from '@/components/sections/about/SuccessMetricsTabs';

export const metadata: Metadata = generatePageMeta({
  title: 'About Us – PrepBanker Team & Mission',
  description: 'Learn about PrepBanker – India\'s most trusted online preparation platform for banking exams like SBI PO and IBPS PO. Our mission, features, and values.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
        ]}
      />
      <WebPageSchema
        name="About Us – PrepBanker Team & Mission"
        description="Learn about PrepBanker – India's most trusted online preparation platform for banking exams like SBI PO and IBPS PO. Our mission, features, and values."
        url="https://prepbanker.com/about"
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
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(240,180,41,0.12)', border: '1px solid rgba(240,180,41,0.25)', color: '#F0B429', padding: '4px 14px', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F0B429', display: 'inline-block' }} />
              Empowering Aspirants
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.025em' }}>
              About <span style={{ background: 'linear-gradient(135deg, #D4A017, #F0B429)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>PrepBanker</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              India&apos;s most comprehensive and trusted online platform dedicated to banking exam preparation.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section style={{ padding: '5rem 1.5rem', maxWidth: '1350px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', color: '#0D1B3E', marginBottom: '1.5rem' }}>
                Our Mission &amp; Vision
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#475569', marginBottom: '1.25rem' }}>
                At PrepBanker, we believe that high-quality exam preparation should be accessible to everyone. Our mission is to democratize education for banking exams by providing premium content, simulated test environments, and personalized data analytics at an affordable price.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#475569' }}>
                We guide aspirants through every single milestone of their journey — from building core fundamentals to mastering speed and accuracy under real exam stress. Over 50,000 students rely on our platforms to build consistent habits and achieve their dreams.
              </p>
            </div>
            <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(13,27,62,0.05)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'linear-gradient(to bottom, #1B6EB5, #0D1B3E)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', color: '#0D1B3E', marginBottom: '1rem' }}>
                Why PrepBanker Matters
              </h3>
              <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Real-Time Simulations', desc: 'Mocks built to mimic the exact server timing, layout, and difficulty grids of SBI and IBPS exams.' },
                  { title: 'Deep Performance Analytics', desc: 'Identify section-wise weaknesses, speed trends, and accuracy variations using our smart dashboards.' },
                  { title: 'Daily Current Affairs Grids', desc: 'High-yield economic and banking awareness summaries curated by top faculty.' }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ fontSize: '1.25rem', color: '#1B6EB5', flexShrink: 0 }}>✓</span>
                    <div>
                      <h4 style={{ fontWeight: 700, color: '#0D1B3E', fontSize: '0.95rem', marginBottom: '2px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section style={{ background: '#F8FAFC', padding: '5rem 1.5rem', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '1350px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', color: '#0D1B3E', marginBottom: '0.75rem' }}>
              Built Around Success Metrics
            </h2>
            <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '520px', margin: '0 auto' }}>
              We continuously optimize our platforms so that every mock you attempt translates directly into marks on exam day.
            </p>
          </div>

          <SuccessMetricsTabs />
        </section>

        {/* CTA banner */}
        <section style={{ maxWidth: '1000px', margin: '5rem auto', padding: '0 1.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #07102A 0%, #1A2D5A 100%)', borderRadius: '24px', padding: '3rem 2.5rem', textAlign: 'center', color: '#fff', boxShadow: '0 10px 30px rgba(7,16,42,0.15)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', marginBottom: '0.75rem' }}>
                Ready to Join Thousands of Successful Candidates?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                Create your free account on PrepBanker and start practicing with India&apos;s top simulated tests.
              </p>
              <a
                href="https://app.prepgrind.com/signup/banking"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #D4A017, #F0B429)',
                  color: '#07102A',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '12px 32px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(240,180,41,0.4)',
                }}
              >
                Get Started Free →
              </a>
            </div>
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
