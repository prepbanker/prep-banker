// PATH: app/not-found.tsx
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy-mid) 60%, var(--color-off-white) 100%)',
        padding: '4rem 1.5rem',
      }}>
        <div style={{ textAlign: 'center', maxWidth: 520 }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(5rem, 12vw, 8rem)',
            fontWeight: 800,
            color: 'var(--color-gold-bright)',
            lineHeight: 1,
            marginBottom: '1rem',
            opacity: 0.9,
          }}>
            404
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            color: '#fff',
            marginBottom: '0.75rem',
          }}>
            Page Not Found
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem',
            lineHeight: 1.65,
            marginBottom: '2rem',
          }}>
            This page seems to have gone missing — just like that tricky reasoning question you almost cracked.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/" variant="gold" size="lg">
              ← Back to Home
            </Button>
            <Button href="/exams" variant="outline"
              style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)' }}>
              Browse Exams
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}