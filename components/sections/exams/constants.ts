// PATH: components/sections/exams/constants.ts
import {
  FileText, MapPin, Users, Clipboard, ListChecks, DollarSign,
  GraduationCap, Clock, Target, Info, BookOpen,
  Calendar, Layers, BookMarked, Brain, BarChart3,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ─── Design Tokens ───────────────────────────────────────────────
export const T = {
  navy:     '#0D1B3E', navyDeep: '#07102A', navyMid: '#1A2D5A',
  navyLight:'#1E3A6E', blue:     '#1B6EB5', sky:     '#E8F4FD',
  gold:     '#D4A017', goldBright:'#F0B429',offWhite: '#F7F9FC',
  gray50:   '#F0F4F8', gray100:  '#E2E8F0', gray400:  '#94A3B8',
  gray600:  '#475569', success:  '#16A34A', white:    '#FFFFFF',
};

// ─── Icon map (keys stored in data) ──────────────────────────────
export const ICON_MAP: Record<string, LucideIcon> = {
  FileText, MapPin, Users, Clipboard, ListChecks, DollarSign,
  GraduationCap, Clock, Target, Info, BookOpen,
};

// ─── Sidebar nav (FAQs intentionally excluded — shown at bottom) ─
export interface NavSection { id: string; label: string; icon: LucideIcon }

export const NAV_SECTIONS: NavSection[] = [
  { id: 'overview',     label: 'Overview',             icon: Info       },
  { id: 'dates',        label: 'Important Dates',      icon: Calendar   },
  { id: 'exam-pattern', label: 'Exam Pattern',         icon: Layers     },
  { id: 'syllabus',     label: 'Official Syllabus',    icon: BookMarked },
  { id: 'selection',    label: 'Selection Process',    icon: ListChecks },
  { id: 'eligibility',  label: 'Eligibility Criteria', icon: GraduationCap },
  { id: 'salary',       label: 'Salary & Benefits',    icon: DollarSign },
  { id: 'strategy',     label: 'Preparation Strategy', icon: Brain      },
  { id: 'cutoffs',      label: 'Cutoff Trends',        icon: BarChart3  },
];