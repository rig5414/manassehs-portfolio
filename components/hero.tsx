"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import styles from "@/styles/hero.module.css"

export default function Hero() {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const roles = [
    "💻 ICT Infrastructure Support",
    "🌐 Network Support Specialist", 
    "⚡ Full-Stack Developer",
    "🎯 Vibe Coder"
  ]

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeoutId: NodeJS.Timeout

    const typeEffect = () => {
      if (isPaused) {
        timeoutId = setTimeout(() => {
          setIsPaused(false)
          setIsDeleting(true)
        }, 1500)
        return
      }

      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.substring(0, text.length + 1))
          timeoutId = setTimeout(typeEffect, 100)
        } else {
          setIsPaused(true)
          timeoutId = setTimeout(typeEffect, 100)
        }
      } else {
        if (text.length > 0) {
          setText(text.substring(0, text.length - 1))
          timeoutId = setTimeout(typeEffect, 50)
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }

    timeoutId = setTimeout(typeEffect, 100)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [text, roleIndex, isDeleting, isPaused, roles])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section 
      id="home" 
      className={cn(
        theme === 'dark' ? styles.heroBackgroundDark : styles.heroBackgroundLight,
        isMobile ? styles.heroScroll : styles.heroFixed
      )}
      aria-label="Hero section"
    >
      <div className={styles.overlay} aria-hidden="true"></div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="block sm:inline">
                <span className={styles.nameFirst}>Manasseh</span>{" "}
                <span className={styles.nameLast}>Telle</span>
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground mb-6 min-h-[3rem] flex items-center">
              <span className="text-foreground animate-color-pulse">{text}</span>
              <span className="ml-1 text-blue-500 animate-blink">|</span>
            </h2>
            <p className="max-w-lg mb-8 text-base leading-relaxed sm:text-lg text-muted-foreground">
              ICT Infrastructure Support professional with hands-on experience in system administration, network 
              troubleshooting, and full-stack development. Combining strong technical problem-solving skills with 
              proven software development capabilities.
            </p>

            <div className="flex flex-col gap-4 mb-8 sm:flex-row">
              <Button 
                size="lg" 
                className="w-full font-semibold text-white group enhanced-gradient-button sm:w-auto" 
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="relative z-10 w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full font-semibold enhanced-outline-button sm:w-auto" 
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex justify-center gap-4 sm:justify-start">
              <Button variant="ghost" size="icon" className="social-icon-button" asChild>
                <a 
                  href="https://linkedin.com/in/manasseh-telle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Visit my LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn Profile</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="social-icon-button" asChild>
                <a 
                  href="mailto:manassehtelle90@gmail.com"
                  title="Send me an email"
                >
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email Me</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="social-icon-button" asChild>
                <a 
                  href="tel:+254711580663"
                  title="Call my phone number"
                >
                  <Phone className="w-5 h-5" />
                  <span className="sr-only">Call Me</span>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 max-w-sm mx-auto aspect-square sm:max-w-md lg:order-2"
          >
            <div className={styles.ringContainer}>
              <div className={styles.outerRing}></div>
              <div className={styles.middleRing}></div>
              <div className={styles.innerRing}></div>
            </div>
            
            <div className={styles.photoContainer}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manasseh%20photo-inEgF2ue6Qw2UUvf4unwXKzp0DFFr7.png"
                alt="Manasseh Telle - Professional Headshot"
                className={styles.photo}
                loading="eager"
                onError={(e) => {
                  console.error('Image failed to load:', e)
                  e.currentTarget.src = '/manasseh-telle-headshot.png'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute hidden transform -translate-x-1/2 bottom-10 left-1/2 md:block">
        <button 
          onClick={() => scrollToSection("about")} 
          className="text-blue-500 transition-all duration-300 animate-bounce hover:text-pink-500 hover:scale-125"
          title="Scroll to About section"
        >
          <ArrowRight className="w-6 h-6 transform rotate-90" />
          <span className="sr-only">Scroll to About section</span>
        </button>
      </div>
    </section>
  )
}
