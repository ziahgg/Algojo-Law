import type { ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

/* ---------- Layout ---------- */

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] ${className}`}>{children}</div>
}

/* ---------- Buttons (Figma "Button / *" component) ---------- */

type ButtonVariant = 'burgundy' | 'navy' | 'outline-light' | 'outline-dark'

const buttonStyles: Record<ButtonVariant, string> = {
  burgundy: 'bg-burgundy text-white hover:bg-burgundy-dark',
  navy: 'bg-navy text-white hover:bg-ink',
  'outline-light': 'border border-white text-white hover:bg-white hover:text-navy',
  'outline-dark': 'border border-navy text-navy hover:bg-navy hover:text-white',
}

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  arrow?: boolean
  className?: string
  type?: 'button' | 'submit'
}

export function Button({ children, href, variant = 'burgundy', arrow = false, className = '', type = 'button' }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md py-[15px] pl-6 pr-[22px] text-sm leading-[1.2] font-medium tracking-[0.2px] transition-colors duration-200 ${buttonStyles[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && <Icon name="arrow" />}
    </>
  )
  return href ? (
    <a href={href} className={cls}>
      {content}
    </a>
  ) : (
    <button type={type} className={cls}>
      {content}
    </button>
  )
}

/* ---------- Eyebrow + headings ---------- */

export function Eyebrow({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className={`h-0.5 w-6 shrink-0 ${light ? 'bg-white' : 'bg-burgundy'}`} />
      <span
        className={`text-xs leading-[1.3] font-medium tracking-[1.2px] uppercase md:text-[13px] ${light ? 'text-white' : 'text-burgundy'}`}
      >
        {children}
      </span>
    </div>
  )
}

export function Heading({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <h2
      className={`font-serif text-[32px] leading-[1.15] tracking-[-1px] md:text-[40px] lg:text-[48px] ${light ? 'text-white' : 'text-navy'} ${className}`}
    >
      {children}
    </h2>
  )
}

export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[15px] leading-[1.6] text-slate ${className}`}>{children}</p>
}

/** Eyebrow + heading on the left, intro copy or a button on the right (stacks on mobile). */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  aside,
  light = false,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  aside?: ReactNode
  light?: boolean
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
      <div className="flex max-w-[620px] flex-col gap-4">
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
        <Heading light={light}>{title}</Heading>
        {intro}
      </div>
      {aside}
    </div>
  )
}

/* ---------- Brand ---------- */

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`} aria-label="Algojo Law — home">
      <span className="flex size-[38px] items-center justify-center rounded-lg bg-burgundy text-white">
        <Icon name="scale" />
      </span>
      <span className="font-serif text-[19px] leading-[1.3] text-white md:text-[21px]">Algojo Law</span>
    </a>
  )
}

/* ---------- Card with the concave top-right notch holding an icon ---------- */

type NotchCardProps = {
  children: ReactNode
  icon: IconName
  /** Background color behind the card, shown through the notch. */
  surface: 'white' | 'cream'
  /** Icon chip style: blush chip with burgundy icon, or burgundy chip with white icon. */
  chip: 'blush' | 'burgundy'
  notch?: number
  chipSize?: number
  iconSize?: number
  className?: string
}

export function NotchCard({ children, icon, surface, chip, notch = 92, chipSize = 40, iconSize = 20, className = '' }: NotchCardProps) {
  const half = notch / 2
  // The card border lives on an under-layer so the notch circle can paint over
  // it at the corner, leaving only the notch's own arc — as in the Figma card.
  return (
    <div className="relative overflow-hidden rounded-[18px]">
      <span aria-hidden="true" className="absolute inset-0 rounded-[18px] border border-line bg-white" />
      <span
        aria-hidden="true"
        className={`absolute rounded-full border border-line ${surface === 'cream' ? 'bg-cream' : 'bg-white'}`}
        style={{ width: notch, height: notch, top: -half, right: -half }}
      />
      <span
        className={`absolute top-1.5 right-1.5 flex items-center justify-center rounded-full ${chip === 'blush' ? 'bg-blush text-burgundy' : 'bg-burgundy text-white'}`}
        style={{ width: chipSize, height: chipSize }}
      >
        <Icon name={icon} size={iconSize} />
      </span>
      <div className={`relative ${className}`}>{children}</div>
    </div>
  )
}
