// PATH: components/sections/home/ClientSectionLoader.tsx
'use client';

import dynamic from 'next/dynamic';

export const DynamicTrendingTests = dynamic(() => import('./TrendingTestsSection'), { ssr: false });
export const DynamicLiveTests = dynamic(() => import('./LiveTestsSection'), { ssr: false });
export const DynamicTestimonials = dynamic(() => import('./TestimonialsSection'), { ssr: false });
export const DynamicComparison = dynamic(() => import('./ComparisonSection'), { ssr: false });
export const DynamicFAQSection = dynamic(() => import('./FAQSection'), { ssr: false });
export const DynamicFeatures = dynamic(() => import('./FeaturesSection'), { ssr: false });
export const DynamicWhyPrepBanker = dynamic(() => import('./WhyPrepBankerSection'), { ssr: false });
export const DynamicExamCalendar = dynamic(() => import('./ExamCalendarSection'), { ssr: false });
export const DynamicCutOffs = dynamic(() => import('./CutOffsSection'), { ssr: false });
