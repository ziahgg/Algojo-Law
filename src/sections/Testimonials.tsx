import { useState } from 'react'
import { Icon } from '../components/Icon'
import { Container, Lead, SectionHeader } from '../components/ui'
import clientPhoto from '../assets/images/client.jpg'

// The design shows a single placeholder testimonial with three pagination dots.
// Replace these entries with real, authorized testimonials.
const TESTIMONIALS = Array.from({ length: 3 }, () => ({
  photo: clientPhoto,
  quote:
    '“[Placeholder] Add an authorized client testimonial here, in the client’s own words. Only publish real testimonials with written permission and any disclaimers required in your jurisdiction.”',
  name: '[Client Name or Initials]',
  detail: '[Matter type] · Shared with permission',
}))

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length
  const step = (delta: number) => setIndex((i) => (i + delta + count) % count)
  const t = TESTIMONIALS[index]

  return (
    <section aria-labelledby="testimonials-title" className="bg-white px-5 pt-10 pb-[72px] md:px-10 lg:pb-[110px]">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Testimonials"
          title={<span id="testimonials-title">What Our Clients Say</span>}
          intro={
            <Lead>
              Testimonials appear here only when they are real, authorized by the client, and compliant with local
              attorney advertising rules.
            </Lead>
          }
          aside={
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous testimonial"
                className="flex size-12 items-center justify-center rounded-full bg-mist text-navy transition-colors hover:bg-line"
              >
                <Icon name="arrow-left" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next testimonial"
                className="flex size-12 items-center justify-center rounded-full bg-burgundy text-white transition-colors hover:bg-burgundy-dark"
              >
                <Icon name="arrow-right-lg" />
              </button>
            </div>
          }
        />
        <figure
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${count}`}
          className="flex flex-col gap-5 rounded-2xl border border-line bg-white px-4 pt-4 pb-6 shadow-[0_12px_32px_rgba(10,20,48,0.1)] md:flex-row md:items-center md:gap-12 md:p-6"
        >
          <img
            src={t.photo}
            alt=""
            className="h-[180px] w-full rounded-xl bg-mist object-cover object-[50%_30%] md:h-[340px] md:w-[300px] md:shrink-0"
          />
          <div className="flex flex-col gap-[22px] px-2 md:py-2 md:pr-6 md:pl-0">
            <p className="flex items-center gap-2.5 text-[13px] leading-[1.3] font-medium tracking-[1.2px] text-burgundy uppercase">
              <Icon name="quote" />
              Client Testimonial — Placeholder
            </p>
            <blockquote className="font-serif text-lg leading-[1.5] text-navy italic md:text-[22px]">{t.quote}</blockquote>
            <hr className="border-line" />
            <figcaption className="flex flex-col gap-1">
              <span className="text-[15px] leading-[1.3] font-semibold text-navy">{t.name}</span>
              <span className="text-[13px] leading-[1.5] text-slate">{t.detail}</span>
            </figcaption>
          </div>
        </figure>

        <div className="flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-7 bg-burgundy' : 'w-2 bg-line hover:bg-muted'}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
