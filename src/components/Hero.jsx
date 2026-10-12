import { useState } from 'react'
import { hero, config } from '../data/content'
import { Icon } from './Icons'
import ShowreelModal from './ShowreelModal'

export default function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false)

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden film-grain">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt="Cinematic filmmaker with camera in dramatic lighting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full pt-24 pb-20">
        <div className="flex justify-between gap-8">
          {/* Left */}
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-widest-2 uppercase text-gold mb-6">
              {hero.eyebrow}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {hero.headlineLines.map((line, i) => (
                <span
                  key={i}
                  className={`block ${line === hero.highlightLine ? 'text-amber' : 'text-ivory'}`}
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-[11px] tracking-widest-2 uppercase text-muted mb-6">
              {hero.descriptor}
            </p>
            <p className="text-ivory/70 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
              {hero.intro}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => setShowreelOpen(true)}
                className="group flex items-center gap-3 bg-gold/10 border border-gold/40 px-6 py-3.5 text-[11px] tracking-widest-2 uppercase text-gold hover:bg-gold hover:text-ink transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-ink transition-colors">
                  <Icon name="play" className="w-3 h-3" />
                </span>
                Watch Our Showreel
              </button>
              <a
                href="#work"
                className="group flex items-center gap-2 text-[11px] tracking-widest-2 uppercase text-ivory/70 hover:text-gold transition-colors"
              >
                Explore Our Work
                <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right — brand statement badges */}
          <div className="hidden lg:flex flex-col gap-6 pt-4">
            {hero.statements.map((stmt, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border border-gold/25 flex flex-col items-center justify-center text-center px-2 hover:border-gold/50 transition-colors duration-500">
                  <span className="text-[8px] tracking-widest text-gold/70 uppercase leading-tight">
                    {stmt.title}
                  </span>
                  <span className="text-[7px] tracking-widest text-muted uppercase leading-tight mt-1">
                    {stmt.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom indicators */}
      <div className="absolute bottom-8 left-6 md:left-12 z-10">
        <span className="text-[11px] tracking-widest text-muted">01 / 03</span>
      </div>
      <div className="absolute bottom-8 right-6 md:right-12 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-widest-2 uppercase text-muted [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent animate-scroll-indicator" />
      </div>

      <ShowreelModal open={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </section>
  )
}
