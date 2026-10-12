import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [sectionIds, offset])

  return activeSection
}
