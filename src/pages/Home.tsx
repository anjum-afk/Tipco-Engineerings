import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import WorkingProcess from '../components/WorkingProcess'
import Testimonials from '../components/Testimonials'
import NewsSection from '../components/NewsSection'
import Clients from '../components/Clients'
import ApplicationTabs from '../components/ApplicationTabs'
import GetQuote from '../components/GetQuote'

export default function Home() {
  return (
    <main>
      <Hero />
      <ApplicationTabs />
      <WorkingProcess />
      <Testimonials />
      <NewsSection />
      <Clients />
      <StatsBar />
      <GetQuote />
    </main>
  )
}
