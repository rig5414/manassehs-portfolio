"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager at TechCorp",
      content:
        "Working with Manasseh was an absolute pleasure. He delivered our project on time and exceeded our expectations in terms of quality and functionality. His attention to detail and problem-solving skills are exceptional.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      company: "TechCorp",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO at StartupX",
      content:
        "Manasseh helped us rebuild our entire platform from the ground up. His technical expertise and ability to understand our business needs resulted in a product that has significantly improved our user engagement.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      company: "StartupX",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder of DesignHub",
      content:
        "I was impressed by Manasseh's ability to translate our design vision into a fully functional website. He was responsive, professional, and provided valuable suggestions that improved the overall user experience.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      company: "DesignHub",
    },
    {
      id: 4,
      name: "David Kim",
      position: "IT Director at GrowthCo",
      content:
        "Manasseh's expertise in both infrastructure support and development made him invaluable to our team. He solved complex network issues while also building custom tools that streamlined our operations.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      company: "GrowthCo",
    },
    {
      id: 5,
      name: "Lisa Patel",
      position: "Operations Manager at RetailPlus",
      content:
        "The system optimization work done by Manasseh has been a game-changer for our business. Our network uptime improved to 99% and the custom dashboard he built helps us monitor everything in real-time.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      company: "RetailPlus",
    },
    {
      id: 6,
      name: "James Wilson",
      position: "CEO at InnovateTech",
      content:
        "Manasseh's full-stack development skills are outstanding. He built our e-commerce platform from scratch and it has been running flawlessly. His project management abilities ensured everything was delivered on schedule.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      company: "InnovateTech",
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 2) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonials = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  // Get current testimonials (2 at a time for desktop, 1 for mobile)
  const getCurrentTestimonials = () => {
    const current = testimonials[currentIndex]
    const next = testimonials[(currentIndex + 1) % testimonials.length]
    return [current, next]
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-muted/30 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 enhanced-badge">
            💬 Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-heading">Client Satisfaction</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Two Column Testimonials - Desktop */}
            <div className="hidden md:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {getCurrentTestimonials().map((testimonial, index) => (
                    <TestimonialCard 
                      key={`${testimonial.id}-${currentIndex}`}
                      testimonial={testimonial}
                      renderStars={renderStars}
                      delay={index * 0.1}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Single Column Testimonials - Mobile */}
            <div className="md:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <TestimonialCard 
                    testimonial={testimonials[currentIndex]}
                    renderStars={renderStars}
                    delay={0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonials}
                className="enhanced-nav-button"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonials}
                className="enhanced-nav-button"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonials(index * 2)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 2) === index
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonial Card Component
function TestimonialCard({ testimonial, renderStars, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full enhanced-card hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
        <CardContent className="p-6 sm:p-8">
          <div className="absolute top-4 right-4 text-primary/20">
            <Quote className="h-12 w-12 sm:h-16 sm:w-16" />
          </div>
          
          <div className="flex flex-col h-full">
            <div className="flex justify-start mb-4">
              {renderStars(testimonial.rating)}
            </div>
            
            <blockquote className="text-base sm:text-lg text-muted-foreground mb-6 italic leading-relaxed flex-grow">
              "{testimonial.content}"
            </blockquote>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="min-w-0 flex-1">
                <h4 className="text-lg sm:text-xl font-bold text-foreground truncate">
                  {testimonial.name}
                </h4>
                <p className="text-primary font-medium text-sm sm:text-base truncate">
                  {testimonial.position}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
