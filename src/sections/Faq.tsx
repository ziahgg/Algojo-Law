import { useId, useState } from 'react'
import { Icon } from '../components/Icon'
import { Eyebrow, Heading } from '../components/ui'
import faqImage from '../assets/images/faq.jpg'

const FAQS = [
  {
    q: 'How do I schedule a consultation?',
    a: 'Use the consultation form, call the office or send an email. We will respond to arrange a suitable time. Availability may depend on the type of matter.',
  },
  {
    q: 'What should I prepare for an initial meeting?',
    a: 'Bring relevant documents, a short timeline of events and a list of questions. We will let you know if anything else would be helpful.',
  },
  {
    q: 'How are legal fees explained?',
    a: 'Fee arrangements are discussed before engagement and confirmed in writing, where applicable.',
  },
  {
    q: 'What happens after I contact the firm?',
    a: 'We review your inquiry, run a conflict check and follow up about next steps.',
  },
  {
    q: 'How is my information handled?',
    a: 'Inquiries are handled discreetly and in line with our Privacy Policy.',
  },
  {
    q: 'How will I receive updates on my matter?',
    a: 'Clients receive regular updates by their preferred method of communication.',
  },
  {
    q: 'Do you handle my type of legal matter?',
    a: 'Contact us with a brief description and we will let you know whether we can help or suggest other resources.',
  },
]

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId()
  return (
    <li className="border-b border-white py-[22px]">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 text-left"
        >
          <span className="font-serif text-[19px] leading-[1.3] text-white md:text-[21px]">{q}</span>
          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-white transition-colors ${open ? 'bg-white text-navy' : 'text-white'}`}
          >
            <Icon name={open ? 'minus' : 'plus'} />
          </span>
        </button>
      </h3>
      <p id={id} hidden={!open} className="pt-3 text-[15px] leading-[1.6] text-white">
        {a}
      </p>
    </li>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-ink py-[72px] lg:py-[110px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:gap-14">
        <div className="flex flex-col items-center gap-4 px-5 text-center md:px-10">
          <Eyebrow light>FAQ</Eyebrow>
          <Heading light className="max-w-[760px]">
            <span id="faq-title">Find Answers to Your Legal Questions.</span>
          </Heading>
          <p className="max-w-[620px] text-[15px] leading-[1.6] text-white">
            General answers to common questions. For guidance on your specific situation, please schedule a
            consultation.
          </p>
        </div>

        <div className="flex flex-col gap-7 px-5 md:px-10 lg:flex-row lg:items-start lg:gap-20 lg:pr-10 lg:pl-0 xl:pr-[120px]">
          <img
            src={faqImage}
            alt="Lady Justice statue holding scales"
            className="h-[240px] w-full rounded-[18px] object-cover md:h-[400px] lg:h-[640px] lg:w-[42%] lg:max-w-[560px] lg:shrink-0 lg:rounded-l-none lg:rounded-r-3xl"
          />
          <div className="flex-1">
            <ul>
              {FAQS.map((f, i) => (
                <FaqItem
                  key={f.q}
                  {...f}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </ul>
            <p className="flex items-start gap-2.5 pt-5 text-[13px] leading-[1.5] text-white">
              <Icon name="shield" className="mt-0.5" />
              These answers are general information and not a legal opinion on any specific matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
