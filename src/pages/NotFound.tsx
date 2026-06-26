import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

const LOGO = 'https://tipcoengineering.com/public/uploads/Tipco.png'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-lg w-full text-center">
        <img src={LOGO} alt="Tipco Engineering" className="h-12 w-auto mx-auto mb-10" />

        {/* Big 404 with brand-teal accent */}
        <h1 className="font-extrabold leading-none text-brand select-none" style={{ fontSize: 'clamp(5rem, 18vw, 9rem)' }}>
          404
        </h1>

        <span className="block w-16 h-1 rounded mx-auto my-5" style={{ background: 'var(--brand)' }} />

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-8">
          The page you're looking for doesn't exist, may have been moved, or is temporarily
          unavailable. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline px-6 py-2.5 text-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} /> Go Back
          </button>
          <Link
            to="/"
            className="btn btn-primary px-6 py-2.5 text-sm flex items-center justify-center gap-2"
          >
            <Home size={16} /> Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
