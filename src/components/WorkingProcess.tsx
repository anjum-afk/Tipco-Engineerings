import SectionHeader from './SectionHeader'

const STEPS = [
  {
    img: 'https://tipcoengineering.com/assets/Untitled-1_0000_Understand-Organization-Requirements.png',
    label: 'Understand Organization Requirements',
  },
  {
    img: 'https://tipcoengineering.com/assets/Untitled-1_0001_Planning-&-Designing-.png',
    label: 'Planning & Designing',
  },
  {
    img: 'https://tipcoengineering.com/assets/Untitled-1_0002_Production-.png',
    label: 'Production',
  },
  {
    img: 'https://tipcoengineering.com/assets/Untitled-1_0003_comMachine-Installationputing.png',
    label: 'Machine Installation',
  },
]

export default function WorkingProcess() {
  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: 'url(https://tipcoengineering.com/assets/demos/contast.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(20,30,30,0.85)' }} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <SectionHeader
          title="Our Working Process"
          subtitle="These are Technology with Tipco Engineerings"
          align="center"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-[10px] px-6 py-8 flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1"
            >
              <img src={s.img} alt={s.label} className="w-16 h-16 object-contain" />
              <h3 className="text-gray-800 font-semibold leading-snug" style={{ fontSize: '19px' }}>{s.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
