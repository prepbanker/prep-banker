// PATH: app/contact/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button, Breadcrumb } from '@/components/ui';
import { generatePageMeta } from '@/components/seo';

export const metadata: Metadata = generatePageMeta({
  title: 'Contact Us – PrepBanker Support',
  description: 'Get in touch with the PrepBanker team for support, feedback, or partnership inquiries.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, var(--color-navy-deep), var(--color-navy-mid))',
          padding: '3rem 0',
        }}>
          <div className="container-custom">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#fff',
              marginTop: '1.5rem',
            }}>
              Contact <span className="text-gold-gradient">PrepBanker</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem', fontSize: '1rem' }}>
              We&apos;re here to help. Reach out for support, feedback, or partnerships.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="section-padding" style={{ background: 'var(--color-off-white)' }}>
          <div className="container-custom">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              maxWidth: 900,
              margin: '0 auto 3rem',
            }}>
              {[
                { icon: '📧', title: 'Email Support', desc: 'support@prepbanker.com', sub: 'Response within 24 hours' },
                { icon: '💬', title: 'Telegram Community', desc: 't.me/prepbanker', sub: '50,000+ aspirants' },
                { icon: '📱', title: 'WhatsApp Support', desc: '+91 98765 43210', sub: 'Mon–Sat, 9AM–6PM IST' },
              ].map(c => (
                <div key={c.title} style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-card)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '6px' }}>{c.title}</h3>
                  <p style={{ color: 'var(--color-blue)', fontWeight: 600, marginBottom: '4px', fontSize: '0.9rem' }}>{c.desc}</p>
                  <p style={{ color: 'var(--color-gray-400)', fontSize: '0.8rem' }}>{c.sub}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Button href="https://app.prepgrind.com/register" variant="gold" size="lg" external>
                Start Preparing Free →
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}