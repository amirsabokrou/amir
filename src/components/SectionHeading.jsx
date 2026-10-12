import Reveal from './Reveal'

export default function SectionHeading({ num, label, title, subtitle, dark = true }) {
  const titleColor = dark ? 'text-ivory' : 'text-ink'
  const subColor = dark ? 'text-muted' : 'text-ink/60'
  const numColor = dark ? 'text-ivory/10' : 'text-ink/10'

  return (
    <Reveal className="flex gap-4 md:gap-10 items-start">
      {/* Vertical label */}
      <div className="hidden md:flex shrink-0 pt-1">
        <span
          className="text-[10px] tracking-widest-2 uppercase text-gold whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {label}
        </span>
      </div>
      {/* Number */}
      <div className={`font-serif text-4xl md:text-6xl leading-none ${numColor} shrink-0`}>
        {num}
      </div>
      {/* Title + subtitle */}
      <div className="flex-1">
        <h2 className={`font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.08] ${titleColor} whitespace-pre-line`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-5 max-w-xl text-sm md:text-base leading-relaxed ${subColor}`}>
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  )
}
