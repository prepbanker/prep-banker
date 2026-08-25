// PATH: app/exams/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { sbiPoData } from '@/lib/data/exams/sbi-po';
import { ibpsPoData } from '@/lib/data/exams/ibps-po';
import type { ExamDetailData } from '@/types/exam';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BreadcrumbSchema, ItemListSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Banking Exams 2026 – SBI PO & IBPS PO Guides',
  description: 'Explore SBI PO and IBPS PO 2026 exam guides with syllabus, exam pattern, dates, cutoffs, and free mock tests on PrepBanker.',
  alternates: {
    canonical: 'https://prepbanker.com/exams',
  },
};

const EXAMS = [sbiPoData, ibpsPoData];
const DESC_LIMIT = 160;

export default function ExamsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Exams', href: '/exams' },
        ]}
      />
      <ItemListSchema
        name="Banking Exams — PrepBanker"
        items={EXAMS.map(e => ({
          name: e.shortName,
          url: `https://prepbanker.com/${e.id}`,
        }))}
      />
      <Header />

      {/* ── Page Hero ── */}
      <div style={{ background:'linear-gradient(135deg,#07102A 0%,#1A2D5A 100%)',padding:'3rem 0 2.5rem' }}>
        <div style={{ maxWidth:1350,margin:'0 auto',padding:'0 1.5rem',textAlign:'center' }}>
          <div style={{ display:'inline-flex',alignItems:'center',gap:6,background:'rgba(212,160,23,0.12)',border:'1px solid rgba(212,160,23,0.25)',color:'#F0B429',padding:'4px 14px',borderRadius:999,fontSize:'0.875rem',fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'1rem' }}>
            <span style={{ width:6,height:6,borderRadius:'50%',background:'#F0B429',display:'inline-block' }} />
            2026 Recruitment Open
          </div>
          <h1 style={{ fontFamily:"var(--font-display)",fontWeight:800,fontSize:'clamp(1.8rem,4vw,2.8rem)',color:'#fff',lineHeight:1.15,marginBottom:'0.75rem' }}>
            Banking Exams{' '}
            <span style={{ background:'linear-gradient(135deg,#D4A017,#F0B429)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
              2026
            </span>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.55)',fontSize:'1rem',maxWidth:520,margin:'0 auto' }}>
            India\'s most comprehensive prep guides for SBI PO and IBPS PO — syllabus, pattern, dates, cutoffs, and free mock tests.
          </p>
        </div>
      </div>

      {/* ── Exam Cards ── */}
      <div style={{ maxWidth:1350,margin:'0 auto',padding:'3rem 1.5rem 5rem' }}>
        <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'1.75rem' }}>
          {EXAMS.map(exam => <ExamCard key={exam.id} exam={exam} />)}
        </div>

        {/* ── Compare strip ── */}
        <div style={{ marginTop:'3rem',background:'#fff',borderRadius:16,border:'1px solid #E2E8F0',padding:'1.5rem 2rem',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem',boxShadow:'0 2px 20px rgba(13,27,62,0.06)' }}>
          <div>
            <div style={{ fontFamily:"var(--font-display)",fontWeight:700,fontSize:'1.1rem',color:'#0D1B3E',marginBottom:4 }}>
              Not sure which exam to target?
            </div>
            <p style={{ fontSize:'0.875rem',color:'#475569' }}>
              SBI PO offers a higher salary & prestige; IBPS PO gives you 11 bank options with more vacancies.
            </p>
          </div>
          <div style={{ display:'flex',gap:10,flexWrap:'wrap' }}>
            <Link href="/sbi-po" style={{ display:'inline-flex',alignItems:'center',gap:6,padding:'10px 20px',borderRadius:10,background:'linear-gradient(135deg,#1B6EB5,#0D1B3E)',color:'#fff',fontWeight:700,fontSize:'0.875rem',textDecoration:'none' }}>
              Explore SBI PO →
            </Link>
            <Link href="/ibps-po" style={{ display:'inline-flex',alignItems:'center',gap:6,padding:'10px 20px',borderRadius:10,background:'linear-gradient(135deg,#D4A017,#F0B429)',color:'#07102A',fontWeight:700,fontSize:'0.875rem',textDecoration:'none' }}>
              Explore IBPS PO →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function ExamCard({ exam }: { exam: ExamDetailData }) {
  const isIbps   = exam.id === 'ibps-po';
  const href      = '/' + exam.id;
  const cardAccent = isIbps ? '#D4A017' : '#1B6EB5';
  const shortDesc = exam.description.length > DESC_LIMIT
    ? exam.description.slice(0, DESC_LIMIT) + '...'
    : exam.description;

  return (
    <div style={{ background:'#fff',borderRadius:18,border:'1px solid #E2E8F0',overflow:'hidden',boxShadow:'0 2px 20px rgba(13,27,62,0.06)',display:'flex',flexDirection:'column',transition:'all 0.25s' }}>

      {/* Card header */}
      <div style={{ background: isIbps ? 'linear-gradient(135deg,#1C1200,#040A20)' : 'linear-gradient(135deg,#07102A,#1A2D5A)',padding:'1.5rem' }}>
        <div style={{ display:'inline-flex',alignItems:'center',gap:6,background:exam.tagColor + '22',border:'1px solid ' + exam.tagColor + '55',color:exam.tagColor,padding:'3px 12px',borderRadius:999,fontSize:'0.875rem',fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'0.875rem' }}>
          <span style={{ width:5,height:5,borderRadius:'50%',background:exam.tagColor,display:'inline-block' }} />
          {exam.tag}
        </div>
        <h2 style={{ fontFamily:"var(--font-display)",fontWeight:800,fontSize:'1.45rem',color:'#fff',lineHeight:1.2,marginBottom:'0.5rem' }}>
          {exam.shortName}
        </h2>
        <p style={{ fontSize: '0.875rem',color:'rgba(255,255,255,0.5)',margin:0 }}>{exam.fullName}</p>
      </div>

      {/* Stats row */}
      <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr 1fr',borderBottom:'1px solid #E2E8F0' }}>
        {[
          { label:'Vacancies', value: exam.id === 'ibps-po' ? '3,500+' : '2,000+' },
          { label:'Stages',    value: exam.id === 'ibps-po' ? '3'       : '4'       },
          { label:'Salary',    value: exam.id === 'ibps-po' ? '₹36K+'   : '₹42K+'  },
        ].map(s => (
          <div key={s.label} style={{ padding:'10px 12px',textAlign:'center',borderRight:'1px solid #E2E8F0' }}>
            <div style={{ fontSize:'0.875rem',color:'#94A3B8',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em' }}>{s.label}</div>
            <div style={{ fontSize:'0.92rem',fontWeight:700,color:'#0D1B3E',marginTop:2 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Body */}
      <div style={{ padding:'1.25rem',flex:1,display:'flex',flexDirection:'column',gap:'1rem' }}>
        <p style={{ fontSize: '0.875rem',color:'#475569',lineHeight:1.65,margin:0 }}>{shortDesc}</p>

        {/* Tags */}
        <div style={{ display:'flex',flexWrap:'wrap',gap:5 }}>
          {exam.tags.slice(0,4).map(tag => (
            <span key={tag} style={{ display:'inline-flex',padding:'3px 9px',borderRadius:999,fontSize:'0.875rem',fontWeight:700,background:'#E8F4FD',color:'#1B6EB5' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={href}
          style={{ display:'inline-flex',alignItems:'center',justifyContent:'center',gap:7,padding:'12px 22px',borderRadius:11,background: isIbps ? 'linear-gradient(135deg,#D4A017,#F0B429)' : 'linear-gradient(135deg,#1B6EB5,#0D1B3E)',color: isIbps ? '#07102A' : '#fff',fontWeight:700,fontSize:'0.88rem',textDecoration:'none',marginTop:'auto',transition:'all 0.25s' }}
        >
          Explore {exam.shortName} 2026 →
        </Link>
      </div>
    </div>
  );
}