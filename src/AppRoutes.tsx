import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SeoHead from './components/SeoHead'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ProductList from './pages/ProductList'
import AllCategory from './pages/AllCategory'
import ApplicationCategory from './pages/ApplicationCategory'
import ProductPage from './pages/ProductPage'
import ContactUs from './pages/ContactUs'
import ClientsPage from './pages/ClientsPage'
import Events from './pages/Events'
import BoardOfDirectors from './pages/BoardOfDirectors'
import Career from './pages/Career'
import Service from './pages/Service'
import InfoPage from './pages/InfoPage'
import Blog from './pages/Blog'

// Scrolls to the #hash anchor after React Router navigation
function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    tryScroll()
    const t = setTimeout(tryScroll, 120)
    return () => clearTimeout(t)
  }, [hash, pathname])
  return null
}

/**
 * The full route tree. Router-agnostic so it can render under
 * <BrowserRouter> (client) or <StaticRouter> (prerender/SSG).
 */
export default function AppRoutes() {
  return (
    <>
      <SeoHead />
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          {/* Primary pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/all-category" element={<AllCategory />} />
          <Route path="/application/:slug" element={<ApplicationCategory />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/client" element={<ClientsPage />} />
          <Route path="/event" element={<Events />} />
          <Route path="/investors/:section" element={<BoardOfDirectors />} />
          <Route path="/career" element={<Career />} />
          <Route path="/service" element={<Service />} />

          {/* Lighter content / legal pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/video-gallery" element={<InfoPage title="Video Gallery" intro="Watch our machines in action — product demos, installations and factory tours." />} />
          <Route path="/photo-gallery" element={<InfoPage title="Company Gallery" intro="A look inside our manufacturing facilities, machines and team." />} />
          <Route path="/catalogue" element={<InfoPage title="Catalogue" intro="Download our complete product catalogue covering the full range of mixing and milling machinery." />} />
          <Route path="/partner" element={<InfoPage title="Partner With Us" intro="Interested in becoming a Tipco Engineering distribution or channel partner? Reach out and our team will get in touch." />} />
          <Route path="/faq" element={<InfoPage title="FAQs" intro="Frequently asked questions about our machines, lead times, installation and after-sales support." />} />
          <Route path="/service-register" element={<InfoPage title="Register For Machine Service" intro="Register your Tipco machine for priority service support." />} />
          <Route path="/privacy-policy" element={<InfoPage title="Privacy Policy" intro="This Privacy Policy explains how Tipco Engineering India Pvt. Ltd. collects, uses and protects the information you share with us." />} />
          <Route path="/term-condition" element={<InfoPage title="Terms & Conditions" intro="Please read these terms and conditions carefully before using the Tipco Engineering website." />} />
          <Route path="/certificates" element={<InfoPage title="Certificates" intro="Tipco Engineering's quality and compliance certifications." />} />
          <Route path="/login" element={<InfoPage title="Login" intro="Customer login is coming soon." />} />
          <Route path="/register" element={<InfoPage title="Sign Up" intro="Account registration is coming soon." />} />

          {/* Individual product detail — keep last so static routes win */}
          <Route path="/:category/:slug" element={<ProductPage />} />

          {/* 404 */}
          <Route path="*" element={<InfoPage title="Page Not Found" intro="Sorry, the page you're looking for doesn't exist. Try browsing our products or contact us." />} />
        </Route>
      </Routes>
    </>
  )
}
