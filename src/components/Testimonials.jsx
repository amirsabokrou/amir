import { testimonials } from '../data/content'
import { Icon } from './Icons'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="bg-ink-secondary py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <SectionHeading
          num="05"
          label="KIND WORDS"
          title={'GOOD WORK.\nMEANINGFUL CONNECTIONS.'}
        />

        <div className="grid md:grid-cols-3 gap-px mt-16 bg-dark-border">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="bg-ink-secondary p-8 md:p-10 h-full flex flex-col">
                <Icon name="quote" className="w-8 h-8 text-gold/30 mb-6" />
                <p className="font-serif text-lg leading-relaxed text-ivory/90 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="text-sm text-ivory">{t.author}</p>
                  <p className="text-[10px] tracking-widest text-muted uppercase mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <p className="mt-10 text-center text-[10px] tracking-widest text-muted/50 uppercase">
            Sample testimonials — replace with real client feedback before launch
          </p>
        </Reveal>
      </div>
    </section>
  )
}
