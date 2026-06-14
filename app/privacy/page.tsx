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
              Last updated: May 2026
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ background: '#fff' }}>
          <div className="container-custom" style={{ maxWidth: 780 }}>
            {[
              { title: '1. Information We Collect', body: 'We collect information you provide directly: name, email, phone number during registration. We also collect usage data including test performance, practice history, and device information for improving our services.' },
              { title: '2. How We Use Your Information', body: 'Your information is used to provide personalized preparation insights, send exam notifications and current affairs updates, improve our platform, and communicate about PrepBanker features.' },
              { title: '3. Data Storage & Security', body: 'Your data is stored on secure servers in India. We implement industry-standard encryption (SSL/TLS) and follow best practices for data security. We do not store payment card information.' },
              { title: '4. Sharing of Information', body: 'We do not sell your personal information. We may share anonymized, aggregated data for research. We work with trusted service providers (payment processors, email services) bound by strict data agreements.' },
              { title: '5. Cookies', body: 'We use cookies to maintain your session, remember preferences, and analyze platform usage. You can control cookies through your browser settings. Disabling cookies may affect platform functionality.' },
              { title: '6. Your Rights', body: 'You have the right to access, correct, or delete your personal data. You may opt out of marketing communications at any time. Contact prepbanker@gmail.com to exercise your rights.' },
              { title: '7. Children\'s Privacy', body: 'PrepBanker is intended for users 18 years and older. We do not knowingly collect information from minors. If we discover we have collected such information, it will be deleted.' },
              { title: '8. Contact Us', body: 'For privacy-related questions, contact our Privacy Officer at prepbanker@gmail.com or write to: PrepBanker Privacy Team, India.' },
            ].map(section => (
              <div key={section.title} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--color-gray-100)' }}>
                <h2 style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                  {section.title}
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: 1.7 }}>{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}