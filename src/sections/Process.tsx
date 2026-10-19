import { Icon, type IconName } from '../components/Icon'
import { Container, Lead, NotchCard, SectionHeader } from '../components/ui'

const STEPS: { title: string; text: string; icon: IconName }[] = [
  { title: 'Initial Inquiry', text: 'Reach out by form, phone or email with a brief outline of your matter.', icon: 'message' },
  { title: 'Preliminary Consultation', text: 'We discuss your situation, answer initial questions and review your options.', icon: 'calendar' },
  { title: 'Assessment & Engagement', text: 'We assess the matter, run conflict checks and confirm scope and fees in writing.', icon: 'file' },
  { title: 'Strategy & Next Steps', text: 'We outline a legal strategy and the practical steps ahead.', icon: 'compass' },
  { title: 'Ongoing Updates', text: 'Regular communication and case updates as your matter progresses.', icon: 'clock' },
]

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-cream py-[72px] lg:py-[110px]">
      <Container className="flex flex-col gap-8 px-5 md:px-10 lg:gap-12 xl:px-0">
        <SectionHeader
          eyebrow="Our Legal Process"
          title={<span id="process-title">A Clear Path From First Inquiry to Next Steps</span>}
          aside={
            <Lead className="md:max-w-[420px]">
              We keep you informed at each stage so you know what is happening and what to expect next.
            </Lead>
          }
        />

        <div className="flex flex-col gap-4">
          {/* Horizontal swipe on mobile/tablet, five columns on desktop */}
          <ol className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 md:-mx-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0">
            {STEPS.map((s, i) => (
              <li key={s.title} className="w-[250px] shrink-0 snap-start lg:w-auto">
                <NotchCard
                  icon={s.icon}
                  surface="cream"
                  chip="burgundy"
                  notch={84}
                  chipSize={36}
                  iconSize={17}
                  className="flex h-[240px] flex-col gap-3 px-6 pt-[26px] pb-6 lg:h-[250px]"
                >
                  <span className="font-serif text-4xl leading-none tracking-[-1px] text-navy lg:text-[44px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-auto font-serif text-[21px] leading-[1.3] text-navy">{s.title}</h3>
                  <p className="text-[13px] leading-[1.5] text-slate">{s.text}</p>
                </NotchCard>
              </li>
            ))}
          </ol>
          <p className="flex items-center gap-2 text-[13px] leading-[1.5] text-slate lg:hidden">
            Swipe to see all 5 steps <Icon name="arrow-right" />
          </p>
        </div>

        <p className="flex items-start gap-3 rounded-[10px] border border-line bg-white px-5 py-4 text-[13px] leading-[1.5] text-slate">
          <Icon name="scale" size={18} className="mt-px text-burgundy" />
          Actual procedures vary depending on the type of legal matter, the jurisdiction and each client’s circumstances.
          This overview is general information, not legal advice.
        </p>
      </Container>
    </section>
  )
}
