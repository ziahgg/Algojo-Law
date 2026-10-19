import { Icon } from '../components/Icon'
import { Button, Container, SectionHeader } from '../components/ui'
import { PRACTICE_LEFT as LEFT, PRACTICE_MORE as MORE, PRACTICE_RIGHT as RIGHT, type Practice } from '../data/practiceAreas'
import practiceImage from '../assets/images/practice.jpg'

function PracticeCard({ n, title, text }: Practice) {
  // Cards with a description are the highlighted (burgundy) variant in the design.
  const featured = Boolean(text)
  return (
    <a
      href="#contact"
      className={`group flex flex-col gap-2.5 rounded-xl px-7 pt-6 pb-[26px] transition-colors duration-200 ${
        featured ? 'bg-burgundy text-white hover:bg-burgundy-dark' : 'border border-line bg-white text-navy hover:border-navy'
      }`}
    >
      <span className="flex items-center justify-between">
        <span
          className={`text-xs leading-[1.3] font-medium tracking-[1.2px] uppercase md:text-[13px] ${featured ? 'text-white' : 'text-burgundy'}`}
        >
          {n}
        </span>
        <Icon
          name="arrow-up-right"
          className={`transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${featured ? 'text-white' : 'text-navy'}`}
        />
      </span>
      <span className="font-serif text-[19px] leading-[1.3] md:text-[21px]">{title}</span>
      {text && <span className="text-[13px] leading-[1.5]">{text}</span>}
    </a>
  )
}

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-white px-5 py-[72px] md:px-10 lg:py-[110px]">
      <Container className="flex flex-col gap-8 lg:gap-12">
        <SectionHeader
          eyebrow="Practice Areas"
          title="Focused Counsel, Guided by Clear Values."
          aside={
            <Button href="#contact" variant="outline-dark" arrow className="self-start md:self-auto">
              Explore Our Practice Areas
            </Button>
          }
        />

        <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-[1fr_400px_1fr] lg:gap-5">
          <div className="flex flex-col gap-3 lg:gap-4">
            {LEFT.map((p) => (
              <PracticeCard key={p.n} {...p} />
            ))}
          </div>
          <img
            src={practiceImage}
            alt="Attorney signing a legal document"
            className="h-[300px] w-full rounded-t-[200px] rounded-b-2xl object-cover md:order-last md:col-span-2 md:h-[420px] lg:order-none lg:col-span-1 lg:h-[480px]"
          />
          <div className="flex flex-col gap-3 lg:gap-4">
            {RIGHT.map((p) => (
              <PracticeCard key={p.n} {...p} />
            ))}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 md:gap-5">
          {MORE.map((p) => (
            <PracticeCard key={p.n} {...p} />
          ))}
        </div>

        <p className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-slate">
          <Icon name="file" size={16} className="mt-0.5 text-muted" />
          Practice areas shown are editable examples. List only the services the firm actually provides.
        </p>
      </Container>
    </section>
  )
}
