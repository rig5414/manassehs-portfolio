"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Linkedin, Send, CheckCircle, AlertCircle, Clock, Shield } from 'lucide-react'
import { useContactForm } from '@/hooks/useContactForm'

export default function Contact() {
  const {
    data,
    isSubmitting,
    status,
    message,
    errors,
    updateField,
    submitForm,
    clearStatus,
  } = useContactForm()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Clear status message after 8 seconds
  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => {
        clearStatus()
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [status, clearStatus])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm()
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 flex-shrink-0" />
      case 'error':
        return <AlertCircle className="h-5 w-5 flex-shrink-0" />
      case 'rate-limited':
        return <Clock className="h-5 w-5 flex-shrink-0" />
      default:
        return null
    }
  }

  const getStatusStyles = () => {
    switch (status) {
      case 'success':
        return 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
      case 'rate-limited':
        return 'bg-yellow-50 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800'
      case 'error':
      default:
        return 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "manassehtelle90@gmail.com",
      link: "mailto:manassehtelle90@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+254 711 580 663",
      link: "tel:+254711580663",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Mombasa, Kenya",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
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
            📧 Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-heading">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <Card className="enhanced-card">
              <CardContent className="p-6">
                {/* Security Badge */}
                <div className="flex items-center gap-2 mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-800 dark:text-blue-400">
                    🔒 Your information is secure and will never be shared with third parties
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={data.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        disabled={isSubmitting}
                        className={`transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 ${
                          errors.name ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        maxLength={100}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={data.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        disabled={isSubmitting}
                        className={`transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 ${
                          errors.email ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        maxLength={254}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={data.subject}
                      onChange={(e) => updateField('subject', e.target.value)}
                      disabled={isSubmitting}
                      className={`transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 ${
                        errors.subject ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      maxLength={200}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="I'd like to discuss a project..."
                      rows={6}
                      value={data.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      disabled={isSubmitting}
                      className={`transition-all duration-300 focus:ring-2 focus:ring-blue-500/20 resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      maxLength={2000}
                    />
                    <div className="flex justify-between items-center">
                      {errors.message ? (
                        <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                      ) : (
                        <div />
                      )}
                      <p className="text-xs text-muted-foreground">
                        {data.message.length}/2000 characters
                      </p>
                    </div>
                  </div>

                  {/* Status Message */}
                  {status !== 'idle' && message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 p-4 rounded-lg ${getStatusStyles()}`}
                    >
                      {getStatusIcon()}
                      <p className="text-sm">{message}</p>
                    </motion.div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full enhanced-gradient-button text-white font-semibold" 
                    disabled={isSubmitting || status === 'rate-limited'}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="enhanced-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-3 rounded-full animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 gradient-text-subheading">{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="mt-8 enhanced-card">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 gradient-text-subheading">Connect With Me</h4>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="social-icon-button" asChild>
                      <a href="https://linkedin.com/in/manasseh-telle" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="social-icon-button" asChild>
                      <a href="mailto:manassehtelle90@gmail.com">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="social-icon-button" asChild>
                      <a href="tel:+254711580663">
                        <Phone className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time Card */}
              <Card className="enhanced-card">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 gradient-text-subheading">💡 Quick Tips</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>I typically respond within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Include project details for faster response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Available for both remote and local projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Rate limited: 3 messages per 5 minutes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
