import { useEffect, useState } from 'react'
import { Icon } from '../components/Icon'
import { Button, Logo } from '../components/ui'
import hero from '../assets/images/hero.jpg'
import attorney1 from '../assets/images/attorney-1.jpg'
import attorney2 from '../assets/images/attorney-2.jpg'
import attorney3 from '../assets/images/attorney-3.jpg'
import attorney4 from '../assets/images/attorney-4.jpg'

const NAV_LINKS = [
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Attorneys', href: '#attorneys' },
  { label: 'About Us', href: '#approach' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

function AnnouncementBar() {
  return (
    <div className="bg-ink px-5 py-3 text-[13px] leading-5 text-white lg:px-20">
      <div className="flex min-h-5 items-center justify-between gap-6">
        <ul className="flex items-center gap-4 md:gap-7">
          <li className="flex items-center gap-2">
            <Icon name="phone" />
            <span>[Phone number]</span>
          </li>
          <li className="flex items-center gap-2">
            <Icon name="clock" />
            <span className="md:hidden">[Office hours]</span>
            <span className="hidden md:inline">Office hours: [Mon–Fri, 00:00–00:00]</span>
          </li>
          <li className="hidden items-center gap-2 lg:flex">
            <Icon name="pin" />
            <span>[Office location]</span>
          </li>
        </ul>
        <p className="hidden items-center gap-2 xl:flex">
          <span>Consultations by appointment — confidential inquiries welcome</span>
          <a href="#contact" className="flex items-center gap-1.5 hover:underline">
            Book now <Icon name="arrow-right" />
          </a>
        </p>
      </div>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="relative rounded-t-[22px] bg-ink px-5 pt-5 pb-2 lg:rounded-t-[28px] lg:px-8 lg:pt-6 lg:pb-4">
      <nav className="flex min-h-12 items-center justify-between lg:min-h-[60px]" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm leading-[1.2] text-white transition-opacity hover:opacity-70">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Button href="#contact" variant="outline-light" arrow>
            Schedule a Consultation
          </Button>
        </div>
        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href="#contact"
            aria-label="Call the office"
            className="flex size-11 items-center justify-center rounded-full border border-white text-white"
          >
            <Icon name="phone" size={18} />
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full bg-white text-ink"
          >
            <Icon name={open ? 'x' : 'menu'} size={open ? 18 : 20} />
          </button>
        </div>
      </nav>
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-30 rounded-b-[22px] bg-ink px-5 pt-2 pb-6 shadow-[0_24px_40px_rgba(10,20,48,0.35)] lg:hidden"
        >
          <ul className="border-t border-white/20">
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="border-b border-white/20">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-[21px] text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div onClick={() => setOpen(false)}>
            <Button href="#contact" arrow className="mt-5 w-full">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function Metric({ value }: { value: string }) {
  return (
    <div className="flex w-[130px] flex-col gap-1.5 lg:w-[150px]">
      <p className="font-serif text-[34px] leading-none tracking-[-1px] text-white lg:text-[44px]">{value}</p>
      <p className="text-[13px] leading-[1.5] text-white">Verified metric — add or remove</p>
    </div>
  )
}

const SUPPORTING_COPY =
  'Facing a legal question? Speak with our team in a confidential consultation. We listen first, explain your options in plain language, and help you decide on next steps.'

function AttorneyTeamCard() {
  return (
    <div className="flex w-full items-center gap-4 rounded-2xl bg-white p-3 md:w-[334px]">
      <div className="flex flex-1 flex-col gap-2.5 py-2 pl-2">
        <div className="flex">
          {[attorney2, attorney4, attorney3].map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`size-10 rounded-full border-2 border-white object-cover ${i > 0 ? '-ml-2.5' : ''}`}
            />
          ))}
        </div>
        <p className="font-serif text-[26px] leading-[1.2] tracking-[-0.3px] text-navy lg:text-[32px]">[00]+</p>
        <p className="text-[13px] leading-[1.5] text-slate">Client reviews — add verified figure</p>
      </div>
      <img
        src={attorney1}
        alt="Attorney portrait placeholder"
        className="h-[124px] w-[110px] shrink-0 rounded-[10px] object-cover lg:h-[140px] lg:w-[124px]"
      />
    </div>
  )
}

function Hero() {
  return (
    <div className="relative isolate overflow-hidden rounded-b-[22px] bg-ink px-5 pt-5 pb-6 md:px-10 md:pt-10 md:pb-12 lg:rounded-b-[28px] xl:min-h-[780px] xl:px-14 xl:pb-14">
      {/* Background image + gradient overlays (Figma: Top / Bottom / Left fade) */}
      <img
        src={hero}
        alt=""
        className="absolute top-[60px] left-[-430px] -z-10 h-[620px] w-[900px] max-w-none object-cover md:inset-0 md:h-full md:w-full"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0a1530_0%,rgba(10,21,48,0)_30%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(10,21,48,0)_40%,rgba(10,21,48,0.9)_60%,#0a1530_100%)] md:bg-[linear-gradient(180deg,rgba(10,21,48,0)_60%,rgba(10,21,48,0.9)_100%)]" />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(10,21,48,0.8)_0%,rgba(10,21,48,0)_50%)] md:block" />

      <div className="flex h-full flex-col justify-between gap-6 xl:min-h-[684px]">
        {/* Top row */}
        <div className="flex items-start justify-between gap-8">
          <div className="flex gap-8 lg:gap-12">
            <Metric value="[00]%" />
            <Metric value="[00]+" />
          </div>
          <p className="hidden w-[300px] text-[13px] leading-[1.5] text-white md:block">{SUPPORTING_COPY}</p>
        </div>

        {/* Mobile: leaves room for the image to show between metrics and headline */}
        <div aria-hidden="true" className="h-[250px] md:h-40 xl:hidden" />

        {/* Bottom row */}
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-8">
          <div className="flex max-w-[600px] flex-col gap-5 md:gap-7">
            <h1 className="font-serif text-[44px] leading-[1.1] tracking-[-0.8px] text-white md:text-[60px] md:leading-[1.08] md:tracking-[-1.5px] xl:text-[76px]">
              Trusted Legal Guidance, Built Around You
            </h1>
            <p className="text-[13px] leading-[1.5] text-white md:hidden">{SUPPORTING_COPY}</p>
            <div className="flex flex-col gap-3 md:flex-row md:gap-3.5">
              <Button href="#contact" arrow>
                Schedule a Consultation
              </Button>
              <Button href="#practice-areas" variant="outline-light">
                Explore Our Practice Areas
              </Button>
            </div>
          </div>
          <AttorneyTeamCard />
        </div>
      </div>
    </div>
  )
}

export default function HeaderHero() {
  return (
    <div id="top" className="bg-white">
      <AnnouncementBar />
      <div className="mx-5 mt-4 rounded-[22px] bg-ink md:mx-6 lg:mt-6 lg:rounded-[28px] xl:mx-auto xl:max-w-[1280px]">
        <Header />
        <Hero />
      </div>
    </div>
  )
}
