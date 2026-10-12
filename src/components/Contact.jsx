import { useState } from 'react'
import { config, projectTypes, budgetOptions } from '../data/content'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', whatsapp: '', projectType: '', budget: '', date: '', description: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.email.trim()) e.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.whatsapp.trim()) e.whatsapp = 'Please enter your WhatsApp number'
    if (!form.projectType) e.projectType = 'Please select a project type'
    if (!form.description.trim()) e.description = 'Please describe your project'
    return e
  }

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('loading')

    const message = [
      "Hello TEEN STUDIO! I'd like to discuss a new project.",
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `Project Type: ${form.projectType}`,
      `Budget: ${form.budget || 'Not specified'}`,
      `Preferred Date: ${form.date || 'Flexible'}`,
      '',
      `Description: ${form.description}`,
    ].join('\n')

    const url = `${config.whatsapp}?text=${encodeURIComponent(message)}`

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
      setStatus('success')
      setForm({ name: '', email: '', whatsapp: '', projectType: '', budget: '', date: '', description: '' })
      setTimeout(() => setStatus('idle'), 6000)
    }, 600)
  }

  const inputBase =
    'w-full bg-transparent border-b border-dark-border text-ivory placeholder:text-muted/40 text-sm py-3 focus:outline-none focus:border-gold transition-colors'

  return (
    <section id="contact" className="bg-ivory py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — info */}
          <Reveal>
            <div>
              <p className="text-[11px] tracking-widest-2 uppercase text-gold mb-4">
                06 — Get in Touch
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-ink whitespace-pre-line">
                LET&rsquo;S CREATE{'\n'}SOMETHING UNFORGETTABLE.
              </h2>
              <p className="mt-6 text-ink/60 leading-relaxed max-w-md">
                Have a project in mind? Tell us what you&rsquo;re imagining, and let&rsquo;s explore how we can bring it to life.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-5">
                <a href={config.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                    <Icon name="whatsapp" className="w-4 h-4 text-ink group-hover:text-gold transition-colors" />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-widest-2 uppercase text-muted">WhatsApp</p>
                    <p className="text-sm text-ink group-hover:text-gold transition-colors">{config.whatsappNumber}</p>
                  </div>
                </a>
                <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                    <Icon name="instagram" className="w-4 h-4 text-ink group-hover:text-gold transition-colors" />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-widest-2 uppercase text-muted">Instagram</p>
                    <p className="text-sm text-ink group-hover:text-gold transition-colors">{config.instagramHandle}</p>
                  </div>
                </a>
                <a href={config.telegram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                    <Icon name="telegram" className="w-4 h-4 text-ink group-hover:text-gold transition-colors" />
                  </span>
                  <div>
                    <p className="text-[10px] tracking-widest-2 uppercase text-muted">Telegram</p>
                    <p className="text-sm text-ink group-hover:text-gold transition-colors">{config.telegramHandle}</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — form card */}
          <Reveal delay={2}>
            <div className="dark-form bg-ink p-8 md:p-10 border border-dark-border">
              <h3 className="font-serif text-xl md:text-2xl text-ivory mb-2">
                TELL US ABOUT YOUR PROJECT.
              </h3>
              <p className="text-sm text-muted mb-8">
                Share a few details and we&rsquo;ll have a better understanding of what you need.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <input type="text" placeholder="Full Name *" value={form.name} onChange={handleChange('name')} className={inputBase} aria-label="Full Name" />
                  {errors.name && <p className="text-xs text-amber mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input type="email" placeholder="Email Address *" value={form.email} onChange={handleChange('email')} className={inputBase} aria-label="Email Address" />
                  {errors.email && <p className="text-xs text-amber mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input type="tel" placeholder="WhatsApp Number *" value={form.whatsapp} onChange={handleChange('whatsapp')} className={inputBase} aria-label="WhatsApp Number" />
                  {errors.whatsapp && <p className="text-xs text-amber mt-1">{errors.whatsapp}</p>}
                </div>
                <div>
                  <select value={form.projectType} onChange={handleChange('projectType')} className={`${inputBase} ${!form.projectType ? 'text-muted/40' : ''} cursor-pointer`} aria-label="Project Type">
                    <option value="" disabled>Select Project Type *</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-ink-secondary text-ivory">{t}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-xs text-amber mt-1">{errors.projectType}</p>}
                </div>
                <div>
                  <select value={form.budget} onChange={handleChange('budget')} className={`${inputBase} ${!form.budget ? 'text-muted/40' : ''} cursor-pointer`} aria-label="Estimated Budget">
                    <option value="" disabled>Estimated Budget</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} className="bg-ink-secondary text-ivory">{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <input type="date" value={form.date} onChange={handleChange('date')} className={inputBase} aria-label="Preferred Project Date" />
                </div>
                <div>
                  <textarea placeholder="Project Description *" value={form.description} onChange={handleChange('description')} rows={4} className={`${inputBase} resize-none`} aria-label="Project Description" />
                  {errors.description && <p className="text-xs text-amber mt-1">{errors.description}</p>}
                </div>

                <button type="submit" disabled={status === 'loading'} className="group w-full flex items-center justify-center gap-2 bg-gold/10 border border-gold/40 px-6 py-4 text-[11px] tracking-widest-2 uppercase text-gold hover:bg-gold hover:text-ink transition-all duration-300 disabled:opacity-50">
                  {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Inquiry Sent' : 'Send Project Inquiry'}
                  {status === 'idle' && <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>

                {status === 'success' && (
                  <p className="text-xs text-gold text-center">
                    Your inquiry has been prepared in WhatsApp — please send the message to complete.
                  </p>
                )}
              </form>

              <a
                href={`${config.whatsapp}?text=${encodeURIComponent(config.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 mt-6 text-[11px] tracking-widest-2 uppercase text-ivory/60 hover:text-gold transition-colors"
              >
                Prefer WhatsApp? Let&rsquo;s Talk
                <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
