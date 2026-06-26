import Hero from '../components/Hero'
import About from '../components/About'
import WorkingProcess from '../components/WorkingProcess'
import Products from '../components/Products'
import IndustrySection from '../components/IndustrySection'
import Testimonials from '../components/Testimonials'
import NewsSection from '../components/NewsSection'
import Clients from '../components/Clients'
import GetQuote from '../components/GetQuote'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WorkingProcess />
      <Products />
      <IndustrySection />
      <Testimonials />
      <NewsSection />
      <Clients />
      <GetQuote />
    </main>
  )
}
