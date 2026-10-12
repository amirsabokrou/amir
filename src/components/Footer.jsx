import { navLinks, config } from '../data/content'
import { Icon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-dark-border pt-16 pb-8">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Left — brand */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl">TEEN</span>
              <span className="text-[9px] tracking-widest-2 uppercase text-muted mt-0.5">STUDIO</span>
            </div>
            <p className="mt-5 text-sm text-muted leading-relaxed max-w-xs">
              Cinematic storytelling. Intentional visuals. Creative work that stays with you.
            </p>
          </div>

          {/* Center — quick links */}
          <div>
            <h4 className="text-[11px] tracking-widest-2 uppercase text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted hover:text-ivory transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — social + monogram */}
          <div>
            <h4 className="text-[11px] tracking-widest-2 uppercase text-gold mb-6">Follow Our Work</h4>
            <div className="flex gap-4">
              <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-all" aria-label="Instagram">
                <Icon name="instagram" className="w-4 h-4" />
              </a>
              <a href={config.telegram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-all" aria-label="Telegram">
                <Icon name="telegram" className="w-4 h-4" />
              </a>
              <a href={config.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-all" aria-label="WhatsApp">
                <Icon name="whatsapp" className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 w-16 h-16 rounded-full border border-gold/25 flex items-center justify-center">
              <span className="font-serif text-lg text-gold/50">TS</span>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border pt-8 text-center">
          <p className="text-[10px] tracking-widest text-muted uppercase">
            &copy; {new Date().getFullYear()} TEEN STUDIO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
