// PATH: app/privacy/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy – PrepBanker',
  description: 'Learn how PrepBanker collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://prepbanker.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, var(--color-navy-deep), var(--color-navy-mid))',
          padding: '3rem 0',
        }}>
          <div className="container-custom">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#fff',
              marginTop: '1.5rem',
            }}>
              Privacy <span className="text-gold-gradient">Policy</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.75rem' }}>
              Last updated: 22/6/2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container-custom" style={{ maxWidth: 780, color: 'var(--color-navy)', fontSize: '0.95rem', lineHeight: 1.8 }}>
            
            {/* Section: Information We Collect */}
            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-gray-100)' }}>
              <h2 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Information We Collect
              </h2>
              <p style={{ color: 'var(--color-gray-650)', marginBottom: '1rem' }}>
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-gray-600)', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Usage data and preferences</li>
              </ul>
            </div>

            {/* Section: How We Use Your Information */}
            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-gray-100)' }}>
              <h2 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                How We Use Your Information
              </h2>
              <p style={{ color: 'var(--color-gray-650)', marginBottom: '1rem' }}>
                We use the information we collect to provide, maintain, and improve our services, including:
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--color-gray-600)', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Provide and personalize our services</li>
                <li>Process payments and transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and promotions</li>
              </ul>
            </div>

            {/* Section: Information Sharing */}
            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-gray-100)' }}>
              <h2 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Information Sharing
              </h2>
              <p style={{ color: 'var(--color-gray-600)' }}>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
            </div>

            {/* Section: Data Security */}
            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-gray-100)' }}>
              <h2 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Data Security
              </h2>
              <p style={{ color: 'var(--color-gray-600)' }}>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            {/* Section: Contact Us */}
            <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem' }}>
              <h2 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Contact Us
              </h2>
              <p style={{ color: 'var(--color-gray-600)', marginBottom: '0.75rem' }}>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div style={{ background: 'var(--color-gray-50)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid var(--color-gray-100)', color: 'var(--color-navy-light)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div><strong>Email:</strong> <a href="mailto:prepbanker@gmail.com" style={{ color: 'var(--color-blue)', textDecoration: 'none' }}>prepbanker@gmail.com</a></div>
                <div><strong>Address:</strong> PrepBanker, Your Learning Companion</div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}