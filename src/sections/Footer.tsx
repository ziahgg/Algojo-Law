import { useState, type FormEvent } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { Button, Logo } from '../components/ui'

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Practice Areas',
    links: ['Business & Corporate', 'Family Law', 'Estate Planning', 'Real Estate', 'Employment', 'Civil Litigation'].map(
      (label) => ({ label, href: '#practice-areas' }),
    ),
  },
  {
    title: 'Firm',
    links: [
      { label: 'About Us', href: '#approach' },
      { label: 'Our Attorneys', href: '#attorneys' },
      { label: 'Our Process', href: '#process' },
      { label: 'Careers', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Legal Insights', href: '#insights' },
      { label: 'Case Summaries', href: '#insights' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Client Resources', href: '#insights' },
    ],
  },
]

const CONTACT = ['[Office address line 1]', '[City, State ZIP]', '[Phone number]', '[Email address]', '[Office hours]']

const SOCIAL: { icon: IconName; label: string }[] = [
  { icon: 'linkedin', label: 'LinkedIn' },
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'x', label: 'X' },
  { icon: 'instagram', label: 'Instagram' },
]

const LEGAL_LINKS = ['Privacy Policy', 'Terms of Use', 'Legal Disclaimer', 'Cookie Settings']

function Newsletter() {
  const [done, setDone] = useState(false)
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDone(true)
  }
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        className="h-[46px] w-full rounded-lg border border-white bg-transparent px-4 text-[13px] leading-[1.5] text-white outline-none placeholder:text-white focus:border-blush"
      />
      <Button type="submit" className="w-full">
        Subscribe
      </Button>
      {done && (
        <p role="status" className="text-[13px] leading-[1.5] text-white">
          Thanks — newsletter sign-up isn’t connected yet.
        </p>
      )}
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pt-14 pb-8 text-white md:px-10 lg:pt-20 lg:pb-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 lg:gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-[420px] flex-col gap-3.5">
            <Logo />
            <p className="text-[13px] leading-[1.5]">
              [Firm Name] provides client-focused legal guidance for individuals, families and businesses. Replace with
              the firm’s own short description.
            </p>
          </div>
          <ul className="flex gap-3">
            {SOCIAL.map((s) => (
              <li key={s.icon}>
                <a
                  href="#top"
                  aria-label={`${s.label} (add profile URL)`}
                  className="flex size-[42px] items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-blush"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-white" />

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 lg:flex lg:justify-between lg:gap-10">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3.5 lg:w-[170px]">
              <h2 className="text-[15px] leading-[1.3] font-semibold">{col.title}</h2>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="block text-[13px] leading-[1.5] transition-opacity hover:opacity-70">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="flex flex-col gap-3.5 lg:w-[170px]">
            <h2 className="text-[15px] leading-[1.3] font-semibold">Contact</h2>
            <ul className="flex flex-col gap-3.5 text-[13px] leading-[1.5]">
              {CONTACT.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 flex flex-col gap-3.5 md:col-span-4 md:max-w-[300px] lg:w-[300px]">
            <h2 className="text-[15px] leading-[1.3] font-semibold">Stay Updated</h2>
            <p className="text-[13px] leading-[1.5]">Occasional legal insights and firm news. Unsubscribe anytime.</p>
            <Newsletter />
          </div>
        </div>

        <hr className="border-white" />

        <p className="text-[13px] leading-[1.5]">
          Attorney Advertising. The information on this website is for general informational purposes only and is not
          legal advice. Contacting the firm or using this website does not create an attorney-client relationship; one is
          formed only after a conflict check and a signed engagement agreement. Prior results do not guarantee a similar
          outcome. Please do not send confidential information until an attorney-client relationship has been
          established. [Add jurisdiction-specific disclaimers.]
        </p>

        <div className="flex flex-col gap-4 text-[13px] leading-[1.5] md:flex-row md:items-center md:justify-between">
          <p>© [Year] [Firm Name]. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5 md:gap-7">
            {LEGAL_LINKS.map((l) => (
              <li key={l}>
                <a href="#top" className="transition-opacity hover:opacity-70">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
