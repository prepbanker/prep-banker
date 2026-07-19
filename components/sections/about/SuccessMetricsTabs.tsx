'use client';

import React, { useState } from 'react';

type TabId = 'experts' | 'speed' | 'insights';

interface TabItem {
  id: TabId;
  label: string;
  icon: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

export default function SuccessMetricsTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('experts');

  const tabs: TabItem[] = [
    {
      id: 'experts',
      label: 'Expert Curation',
      icon: '🎯',
      badge: '100% Exam Aligned',
      title: 'Created by India\'s Top Banking Educators',
      subtitle: 'No outdated questions. Every single test is designed from scratch to match current SBI & IBPS grids.',
      description: 'Our questions are curated and audited by former bank managers, senior examiners, and top-tier subject experts who understand the nuances of negative marking patterns and exam layouts.',
      benefits: [
        'Curated content reflecting the actual weightage of recent exams',
        'Deep step-by-step video & text solutions explaining multiple shortcuts',
        'Difficulty grading (Easy, Moderate, High) to build adaptive solving skills'
      ]
    },
    {
      id: 'speed',
      label: 'Speed & Accuracy',
      icon: '⚡',
      badge: 'Velocity Tuning',
      title: 'Tackle the Timer & Limit Negative Marks',
      subtitle: 'Accuracy is nothing without speed. Our simulated tests train you to work under intense sectional pressure.',
      description: 'PrepBanker provides real-time speed alerts and sectional pacing metrics, helping you identify questions you should solve, skip, or bookmark for later review.',
      benefits: [
        'Real-time pacing indicator showing if you are spending too long on a question',
        'Benchmark pacing alerts comparing your split times with top scorers',
        'Strategic skip suggestions to maximize your scores within the time limit'
      ]
    },
    {
      id: 'insights',
      label: 'Granular Insights',
      icon: '📊',
      badge: 'Data-Driven Preparation',
      title: 'Visual Diagnostics of Your Prep Quality',
      subtitle: 'Stop studying in the dark. We map every click to paint a clear picture of your weaknesses.',
      description: 'Our proprietary analytics dashboard monitors your performance across days, tracking subject accuracy, topic speed, and where you drop critical marks to wild guesswork.',
      benefits: [
        'Detailed subject-wise accuracy breakdown (Quant, Reasoning, English, GA)',
        'Negative marking leaks indicator flagging excessive guessing',
        'Customized study plan recommendations based on weak area analysis'
      ]
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 1.5rem' }}>
      {/* Tab Controller */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '3rem',
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: '1px'
        }}
      >
        <div 
          style={{ 
            display: 'inline-flex', 
            background: '#F1F5F9', 
            padding: '6px', 
            borderRadius: '16px',
            gap: '8px',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.03)'
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: isActive ? '#FFFFFF' : 'transparent',
                  color: isActive ? '#0D1B3E' : '#64748B',
                  boxShadow: isActive ? '0 4px 12px rgba(13,27,62,0.08)' : 'none',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Layout */}
      <div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        style={{ 
          transition: 'opacity 0.3s ease'
        }}
      >
        {/* Left Column: Descriptions (7 cols on large screens) */}
        <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <span 
              style={{ 
                display: 'inline-block', 
                background: 'rgba(27, 110, 181, 0.08)', 
                color: '#1B6EB5', 
                padding: '4px 12px', 
                borderRadius: '8px', 
                fontSize: '0.8rem', 
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem'
              }}
            >
              {currentTab.badge}
            </span>
            <h3 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontWeight: 800, 
                fontSize: '1.8rem', 
                color: '#0D1B3E',
                lineHeight: 1.25,
                marginBottom: '0.75rem'
              }}
            >
              {currentTab.title}
            </h3>
            <p 
              style={{ 
                fontSize: '1.05rem', 
                color: '#475569', 
                fontWeight: 500,
                lineHeight: 1.5,
                marginBottom: '1rem'
              }}
            >
              {currentTab.subtitle}
            </p>
            <p 
              style={{ 
                fontSize: '0.95rem', 
                color: '#64748B', 
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}
            >
              {currentTab.description}
            </p>
          </div>

          {/* Value Bullet Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {currentTab.benefits.map((benefit, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span 
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#16A34A',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 550, lineHeight: 1.4 }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Mockups (5 cols on large screens) */}
        <div className="lg:col-span-5" style={{ width: '100%' }}>
          <div 
            style={{ 
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(13,27,62,0.06)',
              minHeight: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Ambient Background Glow */}
            <div 
              style={{ 
                position: 'absolute', 
                top: '-30%', 
                right: '-30%', 
                width: '200px', 
                height: '200px', 
                borderRadius: '50%', 
                background: activeTab === 'experts' ? 'radial-gradient(circle, rgba(27,110,181,0.08) 0%, transparent 70%)' :
                            activeTab === 'speed' ? 'radial-gradient(circle, rgba(240,180,41,0.08) 0%, transparent 70%)' :
                            'radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} 
            />

            {/* TAB 1: EXPERTS VISUAL */}
            {activeTab === 'experts' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0D1B3E' }}>Question #42 Analysis</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', background: '#FEF3C7', color: '#D97706', borderRadius: '6px' }}>Level: Moderate</span>
                </div>
                
                <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1rem', borderLeft: '3px solid #1B6EB5' }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.5rem' }}>
                    What is the approximate speed of the stream if a boat goes 24 km upstream in 4 hours...?
                  </p>
                  <div style={{ display: 'flex', gap: '8px', fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>
                    <span>Topic: Speed & Distance</span>
                    <span>•</span>
                    <span>Subtopic: Boats & Streams</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F0FDF4', borderRadius: '8px', padding: '8px 12px', border: '1px solid #BBF7D0' }}>
                    <span style={{ color: '#16A34A', fontSize: '0.9rem' }}>✓</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#14532D' }}>Shortcut Trick by Panel (SBI PO Aligned)</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#475569', lineHeight: 1.5, paddingLeft: '4px' }}>
                    Instead of classical variable expansion, apply the ratio of speeds <code style={{ background: '#E2E8F0', padding: '1px 4px', borderRadius: '3px' }}>u:v = (t1 + t2)/(t1 - t2)</code> to solve in under 20 seconds.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px', marginTop: '0.25rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#475569', background: '#E2E8F0', padding: '4px 10px', borderRadius: '999px' }}>Verified Solution</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#1B6EB5', background: 'rgba(27,110,181,0.08)', padding: '4px 10px', borderRadius: '999px' }}>By R. Sharma (Ex-SBI Manager)</span>
                </div>
              </div>
            )}

            {/* TAB 2: SPEED VISUAL */}
            {activeTab === 'speed' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0D1B3E' }}>Sectional Velocity Index</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', background: '#FEE2E2', color: '#EF4444', borderRadius: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} />
                    Live Alert
                  </span>
                </div>

                {/* Progress bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      <span>Your Solving Speed</span>
                      <span style={{ color: '#EF4444' }}>55s / Quest (Slow)</span>
                    </div>
                    <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: '85%', height: '100%', background: '#EF4444', borderRadius: '999px' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      <span>Target Cutoff Benchmark</span>
                      <span style={{ color: '#D4A017' }}>40s / Quest</span>
                    </div>
                    <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: '65%', height: '100%', background: '#D4A017', borderRadius: '999px' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      <span>Top 10% Topper Average</span>
                      <span style={{ color: '#16A34A' }}>28s / Quest</span>
                    </div>
                    <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ width: '45%', height: '100%', background: '#16A34A', borderRadius: '999px' }} />
                    </div>
                  </div>
                </div>

                <div style={{ background: '#FFFBEB', borderRadius: '10px', padding: '10px 12px', border: '1px solid #FDE68A', display: 'flex', gap: '8px' }}>
                  <span style={{ fontSize: '1rem', color: '#D97706' }}>⚠️</span>
                  <p style={{ fontSize: '0.7rem', color: '#92400E', fontWeight: 600, lineHeight: 1.4, margin: 0 }}>
                    Pacing Alert: You spent 128s on Question 15. Standard recommendations suggest skipping speed-math traps exceeding 60s.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: INSIGHTS VISUAL */}
            {activeTab === 'insights' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0D1B3E' }}>Weakness Mapping Diagnostic</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1B6EB5' }}>Updated 2 mins ago</span>
                </div>

                {/* mini analytics list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '10px 12px', borderRadius: '10px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E293B' }}>Reasoning (Syllogism)</span>
                      <span style={{ fontSize: '0.65rem', color: '#16A34A', fontWeight: 600 }}>Strong Accuracy (94%)</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#16A34A' }}>Excellent</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '10px 12px', borderRadius: '10px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E293B' }}>Quant (Data Interpretation)</span>
                      <span style={{ fontSize: '0.65rem', color: '#D97706', fontWeight: 600 }}>Speed Lagging (84s / Quest)</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#D97706' }}>Needs Speed</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '10px 12px', borderRadius: '10px', border: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E293B' }}>English (Error Detection)</span>
                      <span style={{ fontSize: '0.65rem', color: '#EF4444', fontWeight: 600 }}>High Negative Marks (-3.75)</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#EF4444' }}>Stop Guessing</span>
                  </div>
                </div>

                {/* Scorecard detail */}
                <div style={{ display: 'flex', gap: '8px', background: 'rgba(27,110,181,0.05)', borderRadius: '10px', padding: '10px 12px', border: '1px solid rgba(27,110,181,0.1)' }}>
                  <div style={{ fontSize: '1rem', color: '#1B6EB5' }}>📊</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0D1B3E' }}>Preparation Index Score</span>
                    <span style={{ fontSize: '0.65rem', color: '#64748B', lineHeight: 1.3 }}>
                      You are scoring higher than 84% of active aspirants this week. Focus on Quant speed.
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
