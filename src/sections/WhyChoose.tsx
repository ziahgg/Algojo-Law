import { Icon, type IconName } from '../components/Icon'
import { Container, Eyebrow, Heading, Lead } from '../components/ui'
import imageA from '../assets/images/why-a.jpg'
import imageB from '../assets/images/why-b.jpg'

const FEATURES: { icon: IconName; title: string; text: string }[] = [
  { icon: 'user', title: 'Personalized Guidance', text: 'Advice shaped around your circumstances and goals.' },
  { icon: 'message', title: 'Clear Communication', text: 'Plain-language explanations and timely responses.' },
  { icon: 'search', title: 'Professional Diligence', text: 'Careful preparation and attention to detail.' },
  { icon: 'lock', title: 'Confidential & Respectful', text: 'Discreet handling of sensitive information.' },
  { icon: 'file', title: 'Transparent Fees', text: 'Processes and fee arrangements explained upfront, where applicable.' },
  { icon: 'heart', title: 'Client-Centered Approach', text: 'Your questions and priorities guide the work.' },
]

function Collage() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[350px] shrink-0 md:h-[540px] md:max-w-[560px] xl:mx-0 xl:w-[560px]">
      <img
        src={imageA}
        alt="Attorney reviewing case documents"
        className="absolute top-[50px] left-0 h-[300px] w-[200px] rounded-[14px] object-cover md:top-20 md:h-[460px] md:w-[300px]"
      />
      <img
        src={imageB}
        alt="Law library with a classical bust"
        className="absolute top-0 right-0 h-[270px] w-[180px] rounded-[14px] border-8 border-white object-cover md:h-[420px] md:w-[300px]"
      />
      <div className="absolute top-[296px] right-[8px] flex items-center gap-2.5 rounded-[10px] bg-navy px-4 py-3 text-white md:top-[460px] md:right-auto md:left-[300px]">
        <Icon name="lock" />
        <span className="text-[15px] leading-[1.3] font-semibold whitespace-nowrap">Confidential consultations</span>
      </div>
    </div>
  )
}

export default function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="bg-white px-5 py-[72px] md:px-10 lg:py-[110px]">
      <Container className="flex flex-col items-center gap-10 xl:flex-row xl:gap-20">
        <Collage />
        <div className="flex flex-col gap-6 xl:w-[560px]">
          <Eyebrow>Why Choose Our Firm</Eyebrow>
          <Heading>
            <span id="why-title">Dedicated to Clarity, Committed to You</span>
          </Heading>
          <Lead>
            We aim to make the legal process more understandable. Every matter is different, so we take time to learn
            your situation and explain your options before you decide how to proceed.
          </Lead>
          <ul className="grid gap-[22px] pt-4 sm:grid-cols-2 sm:gap-7">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-3.5">
                <span className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-burgundy text-white">
                  <Icon name={f.icon} size={20} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-serif text-lg leading-[1.3] text-navy">{f.title}</h3>
                  <p className="text-[13px] leading-[1.5] text-slate">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
