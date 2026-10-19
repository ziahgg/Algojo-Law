import { useState, type FormEvent, type ReactNode } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { Button } from '../components/ui'
import { PRACTICE_AREAS } from '../data/practiceAreas'
import consultationImage from '../assets/images/consultation.jpg'

const inputCls =
  'h-12 w-full rounded-lg border border-line bg-white px-4 text-[15px] leading-[1.6] text-navy placeholder:text-muted outline-none transition-colors focus:border-navy'

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm leading-[1.3] font-semibold text-navy">
        {label}
      </label>
      {children}
    </div>
  )
}

function ContactRow({ icon, children }: { icon: IconName; children: ReactNode }) {
  return (
    <li className="flex items-center gap-2.5">
      <span className="flex size-8 items-center justify-center rounded-full bg-blush text-burgundy">
        <Icon name={icon} size={16} />
      </span>
      <span className="text-[15px] leading-[1.6] text-navy">{children}</span>
    </li>
  )
}

function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)

  // The site is static (GitHub Pages) and no form service is configured yet,
  // so a valid submission only shows a status message — nothing is sent.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 px-2 pb-6 lg:px-4 xl:w-[560px] xl:shrink-0 xl:px-0 xl:pt-6 xl:pr-6">
      <h2 id="contact-title" className="font-serif text-[30px] leading-[1.15] tracking-[-1px] text-navy md:text-[44px]">
        Discuss Your Legal Matter
      </h2>
      <p className="text-[15px] leading-[1.6] text-slate">
        Schedule a consultation by sharing a few details. A member of our team will respond to confirm availability and
        next steps.
      </p>
      <div className="flex gap-4">
        <Field label="First Name" htmlFor="first-name">
          <input id="first-name" name="firstName" autoComplete="given-name" placeholder="First name" required className={inputCls} />
        </Field>
        <Field label="Last Name" htmlFor="last-name">
          <input id="last-name" name="lastName" autoComplete="family-name" placeholder="Last name" required className={inputCls} />
        </Field>
      </div>
      <div className="flex gap-4">
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className={inputCls} />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+0 (000) 000-0000" className={inputCls} />
        </Field>
      </div>
      <Field label="Practice Area" htmlFor="practice-area">
        <div className="relative">
          <select id="practice-area" name="practiceArea" defaultValue="" required className={`${inputCls} appearance-none pr-10 invalid:text-muted`}>
            <option value="" disabled>
              Select a practice area
            </option>
            {PRACTICE_AREAS.map((p) => (
              <option key={p} value={p} className="text-navy">
                {p}
              </option>
            ))}
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted">
            ▾
          </span>
        </div>
      </Field>
      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={1}
          placeholder="Briefly describe your matter (no confidential details yet)"
          className={`${inputCls} h-auto min-h-12 resize-y pt-3`}
        />
      </Field>
      <label className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-slate">
        <input type="checkbox" name="consent" required className="mt-px size-[18px] shrink-0 rounded accent-burgundy" />
        I agree to the Privacy Policy and understand how my information will be used.
      </label>
      <Button type="submit" className="w-full">
        Schedule a Consultation
      </Button>
      {submitted && (
        <p role="status" className="rounded-lg border border-line bg-white px-4 py-3 text-[13px] leading-[1.5] text-navy">
          Thank you. Online submission isn’t connected yet — please call or email the office to schedule your
          consultation.
        </p>
      )}
      <p className="flex gap-2.5 rounded-lg bg-blush px-4 py-3.5 text-[13px] leading-[1.5] text-burgundy-dark">
        <Icon name="shield" size={18} className="mt-px" />
        Submitting an inquiry does not create an attorney-client relationship. Please avoid sending confidential
        information until a conflict check is complete and an engagement is confirmed.
      </p>
    </form>
  )
}

export default function Consultation() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white px-5 py-[72px] md:px-10 lg:py-[110px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 rounded-[20px] bg-cream px-3 pt-3 pb-5 lg:rounded-3xl lg:p-6 xl:flex-row xl:gap-14">
        <div className="relative flex min-h-[486px] flex-1 flex-col justify-end overflow-hidden rounded-2xl p-3 pt-[200px] md:min-h-[600px] lg:p-5 xl:min-h-[758px]">
          <img
            src={consultationImage}
            alt="Attorney seated in a leather chair"
            className="absolute inset-0 size-full object-cover object-[50%_25%]"
          />
          <div className="relative flex flex-col items-start gap-3.5 rounded-[14px] bg-white p-6 shadow-[0_10px_30px_rgba(10,20,48,0.1)]">
            <h3 className="font-serif text-[21px] leading-[1.3] text-navy">Prefer to talk first?</h3>
            <ul className="flex flex-col gap-3.5">
              <ContactRow icon="phone">[Phone number]</ContactRow>
              <ContactRow icon="mail">[Email address]</ContactRow>
              <ContactRow icon="clock">[Office hours]</ContactRow>
            </ul>
            <Button href="#contact" variant="outline-dark">
              Call the Office
            </Button>
          </div>
        </div>
        <ConsultationForm />
      </div>
    </section>
  )
}
