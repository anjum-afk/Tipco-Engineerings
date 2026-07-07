import Hero from '../components/Hero'
import WorkingProcess from '../components/WorkingProcess'
import TestimonialsSection from '../components/TestimonialsSection'
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
      <TestimonialsSection />
      <NewsSection />
      <Clients />
      <GetQuote />
    </main>
  )
}
