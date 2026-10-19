import HeaderHero from './sections/HeaderHero'
import Credentials from './sections/Credentials'
import PracticeAreas from './sections/PracticeAreas'
import WhyChoose from './sections/WhyChoose'
import Process from './sections/Process'
import Attorneys from './sections/Attorneys'
import Approach from './sections/Approach'
import Insights from './sections/Insights'
import Testimonials from './sections/Testimonials'
import Faq from './sections/Faq'
import Consultation from './sections/Consultation'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <HeaderHero />
      <main>
        <Credentials />
        <PracticeAreas />
        <WhyChoose />
        <Process />
        <Attorneys />
        <Approach />
        <Insights />
        <Testimonials />
        <Faq />
        <Consultation />
      </main>
      <Footer />
    </>
  )
}
