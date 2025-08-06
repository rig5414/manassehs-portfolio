"use client"

import { useEffect } from "react"

export default function PageTransitions() {
  useEffect(() => {
    // Add page transition class to body
    document.body.classList.add('page-transition')

    // Set up intersection observer for section reveals
    const sections = document.querySelectorAll('section')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    sections.forEach((section) => {
      section.classList.add('section-reveal')
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
