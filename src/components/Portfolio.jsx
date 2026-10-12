import { useState } from 'react'
import { portfolio } from '../data/content'
import { Icon } from './Icons'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ProjectModal from './ProjectModal'

export default function Portfolio() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="work" className="bg-ink py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <SectionHeading
          num="03"
          label="SELECTED WORK"
          title="A SELECTION OF OUR WORK."
          subtitle="Every project has a story. These are some of the ways we bring those stories to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16">
          {portfolio.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) + 1}>
              <button
                onClick={() => setSelected(project)}
                className="group relative block w-full overflow-hidden text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/40 transition-opacity duration-500 group-hover:bg-ink/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="w-14 h-14 rounded-full border border-gold/60 flex items-center justify-center text-gold backdrop-blur-sm">
                      <Icon name="play" className="w-5 h-5" />
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg md:text-xl text-ivory group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] tracking-widest-2 uppercase text-muted mt-1">
                    {project.category}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase text-ivory/70 hover:text-gold transition-colors"
            >
              View All Projects
              <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
