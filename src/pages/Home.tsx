import Hero from '../components/Hero'
import WorkingProcess from '../components/WorkingProcess'
import Testimonials from '../components/Testimonials'
import NewsSection from '../components/NewsSection'
import Clients from '../components/Clients'
import Applications from '../components/Applications'
import GetQuote from '../components/GetQuote'

export default function Home() {
  return (
    <main>
      <Hero />
      <Applications />
      <WorkingProcess />
      <Testimonials />
      <NewsSection />
      <Clients />
      <GetQuote />
    </main>
  )
}
