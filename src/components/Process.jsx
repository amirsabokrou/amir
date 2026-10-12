import { processSteps, process } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section id="process" className="bg-ivory py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Heading + image */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start mb-20">
          <SectionHeading
            num="04"
            label="OUR PROCESS"
            title={'FROM THE FIRST IDEA\nTO THE FINAL FRAME.'}
            subtitle={'Great visuals don\u2019t happen by accident. Every project follows a thoughtful creative process built around clarity, collaboration, and craft.'}
            dark={false}
          />
          <Reveal delay={2} className="hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={process.image}
                alt="Behind the scenes with a cinema camera"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-ink/10" />
            </div>
          </Reveal>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid grid-cols-5 relative">
          <div className="absolute top-6 left-[10%] right-[10%] h-px bg-ink/15" />
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i + 1} className="flex flex-col items-center text-center px-3">
              <div className="w-12 h-12 rounded-full border border-gold/50 bg-ivory flex items-center justify-center font-serif text-lg text-gold relative z-10">
                {step.num}
              </div>
              <h3 className="text-[11px] tracking-widest-2 uppercase text-ink mt-6 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ink/55 leading-relaxed">{step.desc}</p>
            </Reveal>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden flex flex-col gap-8">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i + 1}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-gold/50 bg-ivory flex items-center justify-center font-serif text-lg text-gold shrink-0">
                    {step.num}
                  </div>
                  {i < processSteps.length - 1 && <div className="w-px flex-1 bg-ink/15 mt-3" />}
                </div>
                <div className="pb-2">
                  <h3 className="text-[11px] tracking-widest-2 uppercase text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
