"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export default function Hero() {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const { theme } = useTheme()
  
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
      className="relative pt-20 pb-20 md:pt-28 md:pb-32 min-h-screen flex items-center"
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
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="block sm:inline">
                <span className="gradient-text-blue animate-float">Manasseh</span>{" "}
                <span className="gradient-text-pink animate-float" style={{ animationDelay: '0.5s' }}>Telle</span>
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground mb-6 min-h-[3rem] flex items-center">
              <span className="text-foreground animate-color-pulse">{text}</span>
              <span className="animate-blink text-blue-500 ml-1">|</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              ICT Infrastructure Support professional with hands-on experience in system administration, network 
              troubleshooting, and full-stack development. Combining strong technical problem-solving skills with 
              proven software development capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="group enhanced-gradient-button w-full sm:w-auto text-white font-semibold" 
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 relative z-10" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="enhanced-outline-button w-full sm:w-auto font-semibold" 
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 justify-center sm:justify-start">
              <Button variant="ghost" size="icon" className="social-icon-button" asChild>
                <a href="https://linkedin.com/in/manasseh-telle" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="social-icon-button" asChild>
                <a href="mailto:manassehtelle90@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="social-icon-button" asChild>
                <a href="tel:+254711580663">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-sm sm:max-w-md mx-auto order-1 lg:order-2"
          >
            {/* Enhanced Animated border rings */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-spin-slow animate-glow-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-pink-500/40 animate-spin-reverse animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-pulse"></div>
            </div>
            
            {/* Photo container with enhanced effects */}
            <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 hover:ring-pink-500/30 transition-all duration-500 hover:scale-105">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manasseh%20photo-inEgF2ue6Qw2UUvf4unwXKzp0DFFr7.png"
                alt="Manasseh Telle - Professional Headshot"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
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

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce text-blue-500 hover:text-pink-500 transition-all duration-300 hover:scale-125">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}
