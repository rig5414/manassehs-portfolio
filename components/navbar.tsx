"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    link.href = '/manasseh-telle-resume.pdf'
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

  return (
    <header 
      className="fixed top-0 w-full z-50 transition-all duration-300 border-0"
      style={{
        backgroundImage: theme === 'dark' 
          ? `url('/hero-bg-dark.png')` 
          : `url('/hero-bg-light.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
      }}
    >
      {/* Overlay for better text readability - reduced opacity for seamless blend */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("home")} 
            className="text-2xl font-bold hover:scale-105 transition-transform duration-300"
          >
            <span className="text-blue-500">Manasseh</span>
            <span className="text-pink-500">Telle</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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
              className="rounded-full hover:bg-blue-500/10 backdrop-blur-sm"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              onClick={downloadResume} 
              className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 backdrop-blur-sm text-white"
            >
              <Download className="h-4 w-4 mr-2" />
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
        <div 
          className="md:hidden"
          style={{
            backgroundImage: theme === 'dark' 
              ? `url('/hero-bg-dark.png')` 
              : `url('/hero-bg-light.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for mobile menu */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md"></div>
          
          <div className="container mx-auto px-4 py-4 relative z-10">
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
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button onClick={downloadResume} className="flex-1 ml-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                  <Download className="h-4 w-4 mr-2" />
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
