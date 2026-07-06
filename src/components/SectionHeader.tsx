interface Props {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({ title, subtitle, align = 'center', light = false }: Props) {
  const aClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const titleColor = light ? 'text-white' : 'text-gray-800'
  const subColor = light ? 'text-gray-300' : 'text-gray-500'
  return (
    <div className={`flex flex-col gap-2 mb-8 ${aClass}`}>
      <h2 className={`text-2xl md:text-3xl font-bold ${titleColor}`}>{title}</h2>
      <div className="flex gap-1 mt-1" style={align === 'center' ? { justifyContent: 'center' } : {}}>
        <span className="block h-1 w-10 rounded" style={{ background: '#186B6D' }} />
        <span className="block h-1 w-4 rounded" style={{ background: '#186B6D', opacity: 0.4 }} />
      </div>
      {subtitle && <p className={`text-sm mt-1 max-w-2xl ${subColor}`}>{subtitle}</p>}
    </div>
  )
}
