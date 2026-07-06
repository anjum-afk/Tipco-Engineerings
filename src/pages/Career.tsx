import { Briefcase, GraduationCap, Users } from 'lucide-react'
import PageBanner from '../components/PageBanner'

const RESPONSIBILITIES = [
  'Understand client technical requirements',
  'Propose tailored engineering solutions',
  'Manage B2B client relationships',
  'Drive sales targets with a consultative approach',
  'Provide technical support during and after sales',
]

const LOOKING_FOR = [
  "Bachelor's degree in Mechanical / Electrical / Instrumentation Engineering (or related field)",
  '1–5 years of experience in technical / B2B sales',
  'Strong communication and presentation skills',
  'Ability to travel for client meetings / site visits',
  'Problem-solving mindset with a passion for innovation',
]

const OFFER = [
  'Competitive salary + performance incentives',
  'Training & growth opportunities',
  'A collaborative, tech-driven work environment',
  'Exposure to leading industrial technologies and clients',
]

export default function Career() {
  return (
    <main>
      <PageBanner title="Career" image="https://tipcoengineering.com/public/uploads/banner_team.jpg" crumbs={[{ label: 'Career' }]} />

      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 max-w-4xl">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{ background: '#186B6D' }}>
                <Briefcase size={22} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">Sales Executive</h2>
                <p className="text-sm text-gray-500">Technical Sales Engineer — Mixing &amp; Milling Technology</p>
              </div>
              <div className="flex gap-6 text-sm">
                <span className="flex items-center gap-1.5 text-gray-600"><Users size={15} className="text-brand" /> 3 Positions</span>
                <span className="flex items-center gap-1.5 text-gray-600"><GraduationCap size={15} className="text-brand" /> Graduate</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Are you passionate about engineering and skilled at building client relationships? Join our dynamic
              team as a Technical Sales Engineer and help us deliver cutting-edge solutions to industries across
              Mixing &amp; Milling Technology.
            </p>

            <JobList title="Key Responsibilities" items={RESPONSIBILITIES} />
            <JobList title="What We're Looking For" items={LOOKING_FOR} />
            <JobList title="We Offer" items={OFFER} />

            <a href="/contact-us" className="btn btn-primary px-8 py-3 text-sm mt-4 inline-block">Apply Now</a>
          </div>
        </div>
      </section>
    </main>
  )
}

function JobList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-gray-800 mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map(i => (
          <li key={i} className="flex gap-2 text-sm text-gray-600">
            <span className="text-brand font-bold">•</span> {i}
          </li>
        ))}
      </ul>
    </div>
  )
}
