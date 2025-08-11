"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"
import styles from "@/styles/navbar.module.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 100
      
      // Check if scrolled past threshold
      // setScrolled(currentScrollY > 10)
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setIsVisible(false) // Scrolling down - hide navbar
      } else {
        setIsVisible(true) // Scrolling up - show navbar
      }
      
      // Show scroll to top button when near bottom
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const sections = ["home", "about", "tech-stack", "experience", "projects", "certificates", "testimonials", "contact"]
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId)
          }
        },
        { threshold: 0.6 }
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Manassehs_resume.pdf'
    link.download = 'Manasseh_Telle_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "tech-stack" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Certificates", href: "certificates" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Contact", href: "contact" },
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <header 
      className={cn(
        styles.header,
        theme === 'dark' ? styles.headerBackgroundDark : styles.headerBackgroundLight,
        isMobile ? styles.headerScroll : styles.headerFixed,
        "transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className={styles.overlay}></div>
      
      <div className="container relative z-10 px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("home")} 
            className="text-2xl font-bold transition-transform duration-300 hover:scale-105"
          >
            <span className="text-blue-500">Manasseh</span>
            <span className="text-pink-500">Telle</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-6 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative text-foreground/90 hover:text-foreground transition-all duration-300 nav-glow font-medium ${
                  activeSection === link.href 
                    ? 'text-blue-500 active' 
                    : ''
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-pulse" />
                )}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-blue-500/40 backdrop-blur-sm"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button 
              onClick={downloadResume} 
              className="text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden backdrop-blur-sm" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu - No border separation */}
      {isOpen && (
        <div className={theme === 'dark' ? styles.mobileNavDark : styles.mobileNavLight}>
          {/* Overlay for mobile menu */}
          <div className={styles.mobileOverlay}></div>
          
          <div className="container relative z-10 px-4 py-4 mx-auto">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-foreground/90 hover:text-foreground transition-colors py-2 text-left font-medium ${
                    activeSection === link.href ? 'text-blue-500' : ''
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex items-center justify-between pt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full hover:bg-blue-500/10"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
                <Button onClick={downloadResume} className="flex-1 ml-4 text-white bg-gradient-to-r from-blue-500 to-pink-500">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
