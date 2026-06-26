import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          title="About Tipco Engineerings"
          align="center"
        />
        <div className="max-w-3xl mx-auto text-center space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
          <p>
            Tipco Engineering incorporated in 2021, primarily manufactures process plants and machinery required
            by the Chemical, Paint, Inks Pharmaceuticals, Minerals, Food, Polyester resins machines, Polyester
            Button and related Industries. Over the years as the country was aiming towards self-reliance and
            industrialization, our firm jointly with our clients took up the challenge of finding solutions and
            developing cost-effective equipment &amp; process for meeting their stringent requirements.
          </p>
          <p>
            Along with the growth of our clients grew our reputation, experience, and knowledge of the
            manufacturing process and technologies.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <a href="/about-us" className="btn btn-primary px-8 py-2.5 text-sm">Read More</a>
        </div>
      </div>
    </section>
  )
}
