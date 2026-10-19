export type Practice = { n: string; title: string; text?: string }

// Grouped as laid out in the design: left column, right column, and the wide row below.
export const PRACTICE_LEFT: Practice[] = [
  { n: '01', title: 'Business & Corporate Law', text: 'Entity formation, governance, commercial agreements and ongoing business counsel.' },
  { n: '02', title: 'Family Law' },
  { n: '03', title: 'Estate Planning' },
]
export const PRACTICE_RIGHT: Practice[] = [
  { n: '04', title: 'Real Estate Law' },
  { n: '05', title: 'Employment Law', text: 'Guidance for employees and employers on workplace rights, policies and disputes.' },
  { n: '06', title: 'Civil Litigation' },
]
export const PRACTICE_MORE: Practice[] = [
  { n: '07', title: 'Contract Review' },
  { n: '08', title: 'Immigration Law (if offered)' },
]

export const PRACTICE_AREAS = [...PRACTICE_LEFT, ...PRACTICE_RIGHT, ...PRACTICE_MORE].map((p) => p.title)
