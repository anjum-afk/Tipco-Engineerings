export default function NewsSection() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
          LATEST NEWS & ARTICLES
        </h2>
        <div className="flex justify-center mb-8">
          <span className="block h-1 w-10 rounded" style={{ background: '#007872' }} />
        </div>
        <p className="text-center text-gray-400 text-sm">Stay tuned for the latest updates from Tipco Engineering.</p>
      </div>
    </section>
  )
}
