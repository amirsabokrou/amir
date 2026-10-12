import { Icon } from './Icons'
import Modal from './Modal'

export default function ProjectModal({ project, onClose }) {
  return (
    <Modal open={!!project} onClose={onClose} maxWidth="max-w-3xl">
      {project && (
        <div>
          <div className="relative aspect-[16/9] overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-secondary via-transparent to-transparent" />
          </div>
          <div className="p-8 md:p-10">
            <p className="text-[11px] tracking-widest-2 uppercase text-gold mb-2">
              {project.category}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-4">{project.title}</h3>
            <p className="text-muted leading-relaxed">{project.desc}</p>
            <div className="mt-8 pt-6 border-t border-dark-border">
              <a
                href="#contact"
                onClick={onClose}
                className="group inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase text-gold hover:text-amber transition-colors"
              >
                Discuss a Similar Project
                <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}
