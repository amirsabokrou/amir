import { useEffect } from 'react'
import { Icon } from './Icons'

export default function Modal({ open, onClose, children, maxWidth = 'max-w-3xl' }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-ink/90 backdrop-blur-sm animate-fade-in" />
      <div
        className={`relative z-10 w-full ${maxWidth} bg-ink-secondary border border-dark-border max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-ivory/60 hover:text-gold transition-colors"
          aria-label="Close"
        >
          <Icon name="close" className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  )
}
