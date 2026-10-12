import { services } from '../data/content'
import { Icon } from './Icons'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 md:py-32 film-grain">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <SectionHeading
          num="02"
          label="WHAT WE DO"
          title={'CREATIVE SERVICES.\nCINEMATIC RESULTS.'}
          subtitle="From the first spark of an idea to the final frame, we create visuals designed to capture attention and communicate with purpose."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-16 bg-dark-border">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={(i % 3) + 1}>
              <div className="group bg-ink p-8 md:p-10 h-full transition-colors duration-500 hover:bg-ink-secondary">
                <div className="flex items-start justify-between mb-8">
                  <div className="text-gold/40 transition-colors duration-500 group-hover:text-gold">
                    <Icon name={s.icon} className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] tracking-widest text-muted/40 font-serif text-lg">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-sm tracking-widest-2 uppercase text-ivory mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-px w-0 bg-gold/40 transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
