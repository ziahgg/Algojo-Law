import { Icon } from '../components/Icon'
import { Button, Eyebrow, Heading } from '../components/ui'
import attorney1 from '../assets/images/attorney-1.jpg'
import attorney2 from '../assets/images/attorney-2.jpg'
import attorney3 from '../assets/images/attorney-3.jpg'
import attorney4 from '../assets/images/attorney-4.jpg'
import attorney5 from '../assets/images/attorney-5.jpg'

const ATTORNEYS = [
  { photo: attorney4, role: 'Partner' },
  { photo: attorney2, role: 'Partner' },
  { photo: attorney1, role: 'Associate' },
  { photo: attorney3, role: 'Associate' },
  { photo: attorney5, role: 'Of Counsel' },
]

function AttorneyCard({ photo, role }: { photo: string; role: string }) {
  return (
    <article className="relative flex h-[340px] w-[270px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[14px] p-3.5 md:h-[380px] md:w-auto">
      <img src={photo} alt="Attorney portrait placeholder" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,48,0)_50%,rgba(10,20,48,0.9)_100%)]" />
      <span className="absolute top-3.5 left-3.5 rounded-full bg-white px-2.5 py-[5px] text-[13px] leading-[1.5] text-navy">
        Portrait placeholder
      </span>
      <div className="relative flex items-center gap-3 rounded-[10px] bg-navy py-3.5 pr-3.5 pl-4">
        <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
          <h3 className="text-[15px] leading-[1.3] font-semibold text-white">[Attorney Name]</h3>
          <p className="text-[13px] leading-[1.5] text-white">{role} · [Practice area]</p>
        </div>
        <a
          href="#attorneys"
          aria-label="LinkedIn profile (add URL)"
          className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-blush"
        >
          <Icon name="linkedin" />
        </a>
      </div>
    </article>
  )
}

export default function Attorneys() {
  return (
    <section id="attorneys" aria-labelledby="attorneys-title" className="bg-ink py-[72px] lg:py-[110px]">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 md:grid-cols-2 md:gap-5 md:px-10 lg:grid-cols-3 xl:px-0">
        <div className="flex flex-col items-start gap-5 py-2 md:pr-6">
          <Eyebrow light>Meet Our Attorneys</Eyebrow>
          <Heading light>
            <span id="attorneys-title">The People Behind Your Representation</span>
          </Heading>
          <p className="text-[15px] leading-[1.6] text-white">
            Profiles below are placeholders. Add each attorney’s verified name, role, practice areas, admissions and a
            short biography.
          </p>
          <Button href="#attorneys" arrow>
            View All Attorneys
          </Button>
        </div>

        {/* Mobile: swipeable row. Tablet/desktop: cards flow into the grid. */}
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 md:contents">
          {ATTORNEYS.map((a, i) => (
            <AttorneyCard key={i} {...a} />
          ))}
        </div>
        <p className="-mt-4 flex items-center gap-2 text-[13px] leading-[1.5] text-white md:hidden">
          Swipe to view attorney profiles <Icon name="arrow-right" />
        </p>
      </div>
    </section>
  )
}
