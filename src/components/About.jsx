import { about } from '../data/content'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 md:py-32 overflow-hidden">
      {/* Subtle background image on right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04] pointer-events-none">
        <img
          src={about.bgImage}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Left — image */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={about.image}
                alt="Creative director portrait in filmmaking environment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-ink/10" />
            </div>
          </Reveal>

          {/* Right — content */}
          <div>
            <Reveal>
              <p className="text-[11px] tracking-widest-2 uppercase text-gold mb-4">
                {about.label}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-ink whitespace-pre-line">
                {about.heading}
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <div className="mt-8 space-y-4">
                {about.body.map((p, i) => (
                  <p key={i} className="text-ink/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mt-10">
              {about.highlights.map((h, i) => (
                <Reveal key={i} delay={i + 1}>
                  <div className="border-t border-ink/15 pt-4">
                    <h3 className="text-[11px] tracking-widest-2 uppercase text-ink mb-1.5">
                      {h.title}
                    </h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{h.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={3}>
              <a
                href="#process"
                className="group inline-flex items-center gap-2 mt-10 text-[11px] tracking-widest-2 uppercase text-ink hover:text-gold transition-colors"
              >
                Discover Our Approach
                <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
