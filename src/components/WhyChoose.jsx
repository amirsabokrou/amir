import { whyChoose } from '../data/content'
import Reveal from './Reveal'

export default function WhyChoose() {
  return (
    <section className="bg-ink py-24 md:py-32 film-grain">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
          {/* Left — heading */}
          <Reveal>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-ivory">
                MORE THAN A PRODUCTION.<br />
                A CREATIVE PARTNERSHIP.
              </h2>
              <p className="mt-6 text-muted leading-relaxed max-w-md">
                We believe exceptional content begins with understanding the story behind the brief.
                Our approach combines creative thinking, intentional cinematography, and careful
                post-production to create work that feels cohesive, distinctive, and purposeful.
              </p>
            </div>
          </Reveal>

          {/* Right — feature blocks */}
          <div className="grid sm:grid-cols-2 gap-px bg-dark-border">
            {whyChoose.map((item, i) => (
              <Reveal key={item.num} delay={(i % 2) + 1}>
                <div className="bg-ink p-8 md:p-10 h-full">
                  <span className="font-serif text-2xl text-gold/40">{item.num}</span>
                  <h3 className="mt-4 text-[11px] tracking-widest-2 uppercase text-ivory leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
