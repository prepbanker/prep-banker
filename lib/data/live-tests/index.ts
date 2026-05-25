// PATH: lib/data/live-tests/index.ts
// Barrel — import everything from one place:
// import { liveTests, liveTestFAQs, heroStats, liveTestTabs, PAGE_SIZE } from '@/lib/data/live-tests';

export { liveTests }       from './tests';
export { liveTestFAQs }    from './faqs';
export { heroStats, liveTestTabs, PAGE_SIZE, TIMER_STORAGE_KEY, COUNTDOWN_MIN_HOURS, COUNTDOWN_MAX_HOURS } from './config';