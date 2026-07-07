import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
      <FloatingButtons />
    </>
  )
}
