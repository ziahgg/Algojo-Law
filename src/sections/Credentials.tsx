import type { IconName } from '../components/Icon'
import { Container, Lead, NotchCard, SectionHeader } from '../components/ui'

const CREDENTIALS: { value: string; title: string; text: string; icon: IconName }[] = [
  {
    value: '[ Jurisdiction ]',
    title: 'Bar Admissions',
    text: 'List the jurisdictions and courts where firm attorneys are admitted to practice.',
    icon: 'scale',
  },
  {
    value: '[ Organization ]',
    title: 'Professional Memberships',
    text: 'Add bar associations or professional bodies the attorneys actively belong to.',
    icon: 'users',
  },
  {
    value: '[ Recognition ]',
    title: 'Awards & Recognition',
    text: 'Include only verifiable awards, with the issuing body and year, where permitted.',
    icon: 'award',
  },
]

export default function Credentials() {
  return (
    <section aria-labelledby="credentials-title" className="bg-white px-5 pt-[72px] pb-10 md:px-10 lg:pt-[100px]">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Credentials"
          title={<span id="credentials-title">Professional Credentials &amp; Affiliations</span>}
          aside={
            <Lead className="md:max-w-[420px]">
              This area is reserved for verified information only. Replace each placeholder with the firm’s actual bar
              admissions, memberships and recognitions — or remove it.
            </Lead>
          }
        />
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {CREDENTIALS.map((c) => (
            <NotchCard
              key={c.title}
              icon={c.icon}
              surface="white"
              chip="blush"
              className="flex min-h-[190px] flex-col justify-between gap-2.5 pt-8 pr-8 pb-7 pl-8 lg:min-h-[212px]"
            >
              <p className="font-serif text-2xl leading-[1.2] tracking-[-0.3px] text-navy lg:text-[28px]">{c.value}</p>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[15px] leading-[1.3] font-semibold text-navy">{c.title}</h3>
                <p className="text-[13px] leading-[1.5] text-slate">{c.text}</p>
              </div>
            </NotchCard>
          ))}
        </div>
      </Container>
    </section>
  )
}
