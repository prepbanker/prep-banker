// PATH: app/terms/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms & Conditions – PrepBanker',
  description: 'Read PrepBanker\'s Terms & Conditions for usage of our banking exam preparation platform.',
  alternates: { canonical: 'https://prepbanker.com/terms' },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{
          background: 'linear-gradient(135deg, var(--color-navy-deep), var(--color-navy-mid))',
          padding: '3rem 0',
        }}>
          <div className="container-custom">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Terms & Conditions' }]} />
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#fff',
              marginTop: '1.5rem',
            }}>
              Terms &amp; <span className="text-gold-gradient">Conditions</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem' }}>
              Last updated: May 2026
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container-custom" style={{ maxWidth: 780 }}>
            {[
              { title: '1. Acceptance of Terms', body: 'By accessing and using PrepBanker, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our service.' },
              { title: '2. Use of Service', body: 'PrepBanker provides banking exam preparation materials including mock tests, current affairs, and live exams for personal, non-commercial educational use. You must not redistribute, sell, or sublicense our content.' },
              { title: '3. User Accounts', body: 'When you create an account, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.' },
              { title: '4. Intellectual Property', body: 'All content on PrepBanker — including questions, explanations, current affairs, and study materials — is protected by copyright and remains the intellectual property of PrepBanker.' },
              { title: '5. Payment & Refunds', body: 'Premium subscriptions are billed as described at purchase. We offer a 7-day refund policy for unused premium features. Please contact support@prepbanker.com for refund requests.' },
              { title: '6. Limitation of Liability', body: 'PrepBanker provides content for educational purposes only. We do not guarantee exam success. Our liability is limited to the amount paid for services in the preceding 30 days.' },
              { title: '7. Changes to Terms', body: 'We reserve the right to update these terms at any time. Continued use of PrepBanker after changes constitutes acceptance of the new terms.' },
            ].map(section => (
              <div key={section.title} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-gray-100)' }}>
                <h2 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                  {section.title}
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: 1.7 }}>{section.body}</p>
              </div>
            ))}
            <p style={{ color: 'var(--color-gray-400)', fontSize: '0.8rem' }}>
              For questions about these terms, contact us at legal@prepbanker.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}