"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Building, ChevronDown, ChevronUp } from 'lucide-react'

interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: string
  shortDescription: string
  description: string[]
  technologies: string[]
  achievements: string[]
}

export default function Experience() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [activeExperience, setActiveExperience] = useState(0)
  const [showAllExperiences, setShowAllExperiences] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Freelancer Web Developer",
      company: "BuildLink",
      location: "Nairobi (Remote)",
      period: "Dec 2025 - Jan 2026",
      type: "Freelance",
      shortDescription: "Contributed to Kenya's first dedicated platform for built environment professionals",
      description: [
        "Actively contributed to BuildLink, a digital ecosystem connecting architects, engineers, planners, and construction professionals across Kenya",
        "Developed and maintained features for professional profile management and project showcase functionality",
        "Collaborated with cross-functional team to enhance platform UI/UX for built environment professionals",
        "Implemented responsive components using React.js for seamless multi-device experience",
        "Managed real-time data synchronization with Supabase backend for professional networking features",
        "Contributed to codebase optimization and performance improvements for the growing community platform"
      ],
      technologies: ["React.js", "Supabase", "JavaScript", "Full-Stack Development", "Real-time Database"],
      achievements: [
        "Contributed to Kenya's first dedicated built environment platform",
        "Implemented professional networking features",
        "Enhanced platform accessibility for 500+ users"
      ]
    },
    {
      id: 2,
      title: "ICT Support Intern",
      company: "Bulkstream Logistics Limited",
      location: "Mombasa",
      period: "Sep 2025 - Present",
      type: "Internship",
      shortDescription: "Providing comprehensive ICT support for logistics operations and infrastructure",
      description: [
        "Providing comprehensive technical support to logistics operations team, managing 50+ devices and systems",
        "Supporting network administration tasks including network monitoring, configuration, and troubleshooting for seamless operations",
        "Performing regular system maintenance including Windows and Linux system updates, patches, and security configurations",
        "Resolving hardware and software issues to minimize operational downtime and maintain productivity",
        "Contributing to IT infrastructure optimization initiatives and implementing best practices for service delivery",
        "Managing user accounts, software installations, and system configurations as part of daily support duties",
        "Implementing backup and disaster recovery procedures ensuring data integrity and business continuity",
        "Assisting in documentation and reporting of IT processes, incidents, and resolutions for knowledge management",
        "Collaborating with IT team to evaluate and recommend infrastructure improvements"
      ],
      technologies: ["Windows Server", "Linux Administration", "Network Administration", "System Support", "IT Infrastructure", "IT Security", "ITIL"],
      achievements: [
        "Maintaining smooth IT operations for logistics management",
        "Supporting 50+ devices and systems with minimal downtime",
        "Contributing to infrastructure optimization and reliability improvements"
      ]
    },
    {
      id: 3,
      title: "Freelancer Web Developer",
      company: "Self-Employed",
      location: "Juja, Kiambu",
      period: "Feb 2025 - May 2025",
      type: "Freelance",
      shortDescription: "Developed custom quarry management website with interactive features",
      description: [
        "Independently developed a custom quarry management website with interactive features",
        "Utilized React.js and Tailwind CSS for responsive frontend development",
        "Implemented client requirements through effective communication and iterative development",
        "Delivered fully functional web solution meeting client specifications and timeline"
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Web Development"],
      achievements: [
        "100% client satisfaction rate",
        "Delivered project 2 weeks ahead of schedule",
        "Implemented 15+ interactive features"
      ]
    },
    {
      id: 4,
      title: "Full Stack Engineer & Project Manager",
      company: "Machakos University",
      location: "Machakos",
      period: "Oct 2024 - April 2025",
      type: "Project",
      shortDescription: "Led full-stack development of localized e-commerce platform",
      description: [
        "Led the full-stack development of a localized e-commerce platform using React.js and Node.js",
        "Implemented responsive frontend design principles and optimized user experience",
        "Developed and integrated backend APIs with database connectivity and user authentication",
        "Managed complete project lifecycle from requirements gathering to deployment",
        "Coordinated with stakeholders to ensure project deliverables met technical specifications"
      ],
      technologies: ["React.js", "Node.js", "Full-Stack", "Project Management", "API Development"],
      achievements: [
        "Successfully managed team of 4 developers",
        "Delivered scalable e-commerce solution",
        "Implemented secure payment integration"
      ]
    },
    {
      id: 5,
      title: "ICT and Network Support Intern",
      company: "Bulkstream Limited",
      location: "Mombasa",
      period: "May 2024 - Sep 2024",
      type: "Internship",
      shortDescription: "Provided comprehensive technical support maintaining 99% system uptime",
      description: [
        "Delivered comprehensive technical support to 200+ end-users, resolving hardware and software issues",
        "Performed network troubleshooting and connectivity issue resolution, maintaining 99% system uptime",
        "Managed user accounts, software installation, and system configurations as part of daily duties",
        "Implemented backup and recovery procedures ensuring data integrity and business continuity",
        "Maintained detailed documentation of support activities and technical resolutions",
        "Collaborated with IT team to optimize infrastructure performance and implement improvements"
      ],
      technologies: ["Windows", "Linux", "Network Administration", "System Support", "ITIL"],
      achievements: [
        "Maintained 99% system uptime",
        "Supported 50+ end users daily",
        "Reduced ticket resolution time by 40%"
      ]
    },
    {
      id: 6,
      title: "Web Developer & Project Manager",
      company: "Machakos University",
      location: "Machakos",
      period: "Feb 2023 - March 2023",
      type: "Academic Project",
      shortDescription: "Built custom hotel management website with intuitive UI",
      description: [
        "Developed a custom hotel management website using HTML, CSS, and JavaScript",
        "Designed intuitive user interfaces focusing on user experience optimization",
        "Successfully completed project as part of academic coursework, demonstrating technical proficiency"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Web Development", "UI/UX Design"],
      achievements: [
        "Achieved 95% project grade",
        "Implemented booking system",
        "Created responsive design"
      ]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const experienceElements = experiences.map((_, index) => 
        document.getElementById(`experience-${index}`)
      )
      
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      experienceElements.forEach((element, index) => {
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          const elementTop = top + window.scrollY
          const elementBottom = bottom + window.scrollY
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveExperience(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [experiences])

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Freelance":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Project":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Internship":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Academic Project":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      case "Volunteership":
        return "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  // Filter experiences based on showAllExperiences toggle
  const displayedExperiences = showAllExperiences ? experiences : experiences.slice(0, 4)

  // Split experiences into two columns
  const leftColumnExperiences = displayedExperiences.filter((_, index) => index % 2 === 0)
  const rightColumnExperiences = displayedExperiences.filter((_, index) => index % 2 === 1)

  return (
    <section id="experience" className="py-20 bg-muted/30">
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
            💼 Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-heading">Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Central Animated Timeline Line - Hidden on mobile */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-muted rounded-full hidden lg:block overflow-hidden transform -translate-x-1/2">
              <motion.div
                className="w-full bg-gradient-to-b from-primary via-accent to-primary rounded-full"
                initial={{ height: "0%" }}
                animate={{ 
                  height: `${((activeExperience + 1) / experiences.length) * 100}%` 
                }}
                transition={{ 
                  duration: 1, 
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100
                }}
                style={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
              />
            </div>

            {/* Two Column Layout - Desktop */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
              {/* Left Column */}
              <div className="space-y-12">
                {leftColumnExperiences.map((experience, index) => {
                  const originalIndex = experiences.findIndex(exp => exp.id === experience.id)
                  return (
                    <motion.div
                      key={experience.id}
                      id={`experience-${originalIndex}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      variants={fadeIn}
                      className="relative pr-8"
                    >
                      {/* Timeline Dot */}
                      <motion.div 
                        className={`absolute -right-4 top-6 w-6 h-6 rounded-full border-4 border-background z-10 ${
                          activeExperience >= originalIndex 
                            ? 'bg-primary shadow-lg shadow-primary/50' 
                            : 'bg-muted'
                        }`}
                        animate={{
                          scale: activeExperience === originalIndex ? 1.3 : 1,
                          boxShadow: activeExperience === originalIndex 
                            ? "0 0 25px rgba(59, 130, 246, 0.8)" 
                            : "0 0 0px rgba(59, 130, 246, 0)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <ExperienceCard 
                        experience={experience} 
                        isActive={activeExperience === originalIndex}
                        isExpanded={expandedExperience === experience.id}
                        onToggleExpand={() => setExpandedExperience(
                          expandedExperience === experience.id ? null : experience.id
                        )}
                        getTypeColor={getTypeColor}
                      />
                    </motion.div>
                  )
                })}
              </div>

              {/* Right Column */}
              <div className="space-y-12 pt-24">
                {rightColumnExperiences.map((experience, index) => {
                  const originalIndex = experiences.findIndex(exp => exp.id === experience.id)
                  return (
                    <motion.div
                      key={experience.id}
                      id={`experience-${originalIndex}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      variants={fadeIn}
                      className="relative pl-8"
                    >
                      {/* Timeline Dot */}
                      <motion.div 
                        className={`absolute -left-4 top-6 w-6 h-6 rounded-full border-4 border-background z-10 ${
                          activeExperience >= originalIndex 
                            ? 'bg-primary shadow-lg shadow-primary/50' 
                            : 'bg-muted'
                        }`}
                        animate={{
                          scale: activeExperience === originalIndex ? 1.3 : 1,
                          boxShadow: activeExperience === originalIndex 
                            ? "0 0 25px rgba(59, 130, 246, 0.8)" 
                            : "0 0 0px rgba(59, 130, 246, 0)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <ExperienceCard 
                        experience={experience} 
                        isActive={activeExperience === originalIndex}
                        isExpanded={expandedExperience === experience.id}
                        onToggleExpand={() => setExpandedExperience(
                          expandedExperience === experience.id ? null : experience.id
                        )}
                        getTypeColor={getTypeColor}
                      />
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Single Column Layout - Mobile/Tablet */}
            <div className="lg:hidden space-y-8">
              {displayedExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  id={`experience-${index}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeIn}
                >
                  <ExperienceCard 
                    experience={experience} 
                    isActive={activeExperience === index}
                    isExpanded={expandedExperience === experience.id}
                    onToggleExpand={() => setExpandedExperience(
                      expandedExperience === experience.id ? null : experience.id
                    )}
                    getTypeColor={getTypeColor}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* View More/Less Button */}
          {experiences.length > 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mt-12"
            >
              <Button
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                className="enhanced-gradient-button text-white font-semibold px-8 py-3 text-lg"
              >
                {showAllExperiences ? (
                  <>
                    <ChevronUp className="h-5 w-5 mr-2" />
                    View Less Experience
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5 mr-2" />
                    View More Experience ({experiences.length - 4} more)
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

// Experience Card Component
interface ExperienceCardProps {
  experience: Experience
  isActive: boolean
  isExpanded: boolean
  onToggleExpand: () => void
  getTypeColor: (type: string) => string
}

function ExperienceCard({ experience, isActive, isExpanded, onToggleExpand, getTypeColor }: ExperienceCardProps) {
  return (
    <Card className={`enhanced-card hover:shadow-lg transition-all duration-300 ${
      isActive ? 'shadow-xl shadow-primary/10 ring-2 ring-primary/20' : ''
    }`}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge className={getTypeColor(experience.type)}>
                {experience.type}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {experience.period}
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{experience.title}</h3>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                <span className="font-medium text-sm sm:text-base">{experience.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span className="text-sm sm:text-base">{experience.location}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              {experience.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {experience.technologies.slice(0, 3).map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {experience.technologies.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{experience.technologies.length - 3} more
                </Badge>
              )}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleExpand}
              className="enhanced-toggle-button"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  See More
                </>
              )}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t pt-4 mt-4"
            >
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                  <div className="space-y-2">
                    {experience.description.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                  <div className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="hover:bg-primary/10 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
