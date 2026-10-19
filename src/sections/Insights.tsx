import { Icon } from '../components/Icon'
import { Container, Eyebrow, Heading, Lead } from '../components/ui'
import case1 from '../assets/images/case-1.jpg'
import case2 from '../assets/images/case-2.jpg'
import case3 from '../assets/images/case-3.jpg'

const INSIGHTS = [
  {
    image: case1,
    category: 'Case Summary · Placeholder',
    title: '[Anonymized Case Summary Title]',
    text: 'Describe an authorized, anonymized matter. Do not include client identities, settlement amounts or implied guarantees.',
  },
  {
    image: case2,
    category: 'Legal Insight · Business',
    title: 'What to Review Before Signing a Commercial Contract',
    text: 'An overview of common clauses worth understanding before you sign. General information only.',
  },
  {
    image: case3,
    category: 'Legal Insight · Planning',
    title: 'Estate Planning Basics: Questions to Ask Early',
    text: 'Key topics to consider when starting an estate plan, and when to seek tailored advice.',
  },
]

export default function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-title" className="bg-white px-5 py-[72px] md:px-10 lg:py-[110px]">
      <Container className="flex flex-col gap-8 lg:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>Insights</Eyebrow>
          <Heading className="max-w-[760px]">
            <span id="insights-title">Case Studies &amp; Legal Insights</span>
          </Heading>
          <Lead className="max-w-[620px]">
            Educational articles and anonymized matter summaries to help you understand common legal questions. General
            information only — not legal advice.
          </Lead>
        </div>

        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {INSIGHTS.map((post) => (
            <article key={post.title} className="group flex flex-col gap-[18px]">
              <div className="relative h-[250px] overflow-hidden rounded-[10px]">
                <img
                  src={post.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3.5 left-3.5 rounded-full bg-white px-2.5 py-[5px] text-[13px] leading-[1.5] text-burgundy">
                  {post.category}
                </span>
              </div>
              <h3 className="font-serif text-[21px] leading-[1.3] text-navy">{post.title}</h3>
              <p className="text-[13px] leading-[1.5] text-slate">{post.text}</p>
              <a
                href="#insights"
                className="flex items-center gap-1.5 self-start text-sm leading-[1.2] font-medium tracking-[0.2px] text-burgundy hover:underline"
              >
                Read More <Icon name="arrow-up-right" size={16} />
              </a>
            </article>
          ))}
        </div>

        <p className="flex items-start justify-center gap-2.5 text-[13px] leading-[1.5] text-slate md:items-center md:text-center">
          <Icon name="book" className="mt-0.5 text-muted md:mt-0" />
          Insights are provided for general educational purposes and do not constitute legal advice. Reading them does
          not create an attorney-client relationship.
        </p>
      </Container>
    </section>
  )
}
