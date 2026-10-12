import { config } from '../data/content'
import { Icon } from './Icons'
import Modal from './Modal'

export default function ShowreelModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} maxWidth="max-w-2xl">
      {config.showreelUrl ? (
        <video src={config.showreelUrl} controls autoPlay className="w-full max-h-[80vh]" />
      ) : (
        <div className="text-center py-16 px-8">
          <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
            <Icon name="play" className="w-6 h-6 text-gold" />
          </div>
          <h3 className="font-serif text-2xl text-ivory mb-3">Showreel Coming Soon</h3>
          <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed">
            Our showreel is being prepared. In the meantime, feel free to explore our selected work or reach out directly.
          </p>
          <a
            href="#contact"
            onClick={onClose}
            className="group inline-flex items-center gap-2 mt-6 text-[11px] tracking-widest-2 uppercase text-gold hover:text-amber transition-colors"
          >
            Get in Touch
            <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      )}
    </Modal>
  )
}
