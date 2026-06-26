import { Calendar } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { EVENTS } from '../data/site'

export default function Events() {
  return (
    <main>
      <PageBanner
        title="Events"
        image="https://tipcoengineering.com/public/uploads/banner_team.jpg"
        crumbs={[{ label: 'Events' }]}
      />

      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map(ev => (
              <article key={ev.title} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img src={ev.img} alt={ev.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-brand mb-2">
                    <Calendar size={14} /> {ev.date}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 leading-snug">{ev.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{ev.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
