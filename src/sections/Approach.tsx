import { Button, Eyebrow, Heading, Lead } from '../components/ui'
import approachImage from '../assets/images/approach.jpg'

const PRINCIPLES = [
  { title: 'Listen before advising', text: 'We take time to understand the facts, your concerns and what you hope to achieve.' },
  { title: 'Prepare carefully', text: 'Research, documentation and planning are done thoroughly and on schedule.' },
  { title: 'Explain in plain language', text: 'You receive clear explanations of options, risks and likely next steps.' },
  { title: 'Set honest expectations', text: 'Outcomes depend on the facts and applicable law, so we never guarantee results.' },
]

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="bg-white px-5 py-[72px] md:px-10 lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-7 rounded-[20px] bg-cream px-4 pt-4 pb-7 lg:rounded-3xl lg:p-6 xl:flex-row xl:items-center xl:gap-16">
        <img
          src={approachImage}
          alt="Attorney seated at a desk with documents"
          className="h-[320px] w-full rounded-2xl object-cover object-[50%_35%] md:h-[460px] xl:h-[718px] xl:w-[520px] xl:shrink-0"
        />
        <div className="flex flex-col items-start gap-[22px] px-2 xl:py-6 xl:pr-10 xl:pl-0">
          <Eyebrow>Our Experience &amp; Approach</Eyebrow>
          <Heading>
            <span id="approach-title">Thoughtful Preparation, Honest Communication</span>
          </Heading>
          <Lead>
            How we work matters as much as what we do. These principles guide every engagement, from the first
            conversation to the final update.
          </Lead>
          <ol className="w-full">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="flex gap-5 border-b border-line py-[18px]">
                <span className="font-serif text-[21px] leading-[1.3] text-burgundy">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] leading-[1.3] font-semibold text-navy">{p.title}</h3>
                  <p className="text-[13px] leading-[1.5] text-slate">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button href="#contact" variant="navy" arrow>
            Learn About Our Firm
          </Button>
        </div>
      </div>
    </section>
  )
}
