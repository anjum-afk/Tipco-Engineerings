import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <div className="pb-14 md:pb-0">
        <Outlet />
      </div>
      <Footer />
      <FloatingButtons />
    </>
  )
}
