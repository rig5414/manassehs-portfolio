"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Quarry Management System",
      shortDescription: "Custom quarry management website with interactive features.",
      description: "A comprehensive quarry management system built for efficient operations management.",
      image: "/placeholder-sw6cj.png",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      features: [
        "Interactive dashboard for operations management",
        "Real-time data tracking and reporting",
        "Responsive design for mobile and desktop",
        "Client-focused feature implementation",
        "Efficient project delivery within timeline"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription: "Developed as a freelance project, this quarry management system provides comprehensive tools for managing quarry operations. Built with React.js and styled with Tailwind CSS, the system features an intuitive interface for tracking operations, managing resources, and generating reports. The project was delivered on time and met all client specifications through effective communication and iterative development.",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      shortDescription: "Localized e-commerce platform with full-stack implementation.",
      description: "A complete e-commerce solution with modern web technologies and user authentication.",
      image: "/e-commerce-platform-interface.png",
      tags: ["React.js", "Node.js", "Full-Stack", "Database Integration"],
      features: [
        "Complete product catalog management",
        "User authentication and authorization",
        "Responsive frontend design",
        "RESTful API development",
        "Database connectivity and management"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription: "Led the development of a localized e-commerce platform as part of a university project. The platform features a complete product management system, user authentication, shopping cart functionality, and order processing. Built with React.js for the frontend and Node.js for the backend, with comprehensive API integration and database management.",
    },
    {
      id: 3,
      title: "Hotel Management Website",
      shortDescription: "Custom hotel management system with intuitive user interface.",
      description: "A hotel management system focusing on user experience and interface design.",
      image: "/hotel-management-system-interface.png",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      features: [
        "Room booking and management system",
        "Guest registration and check-in/out",
        "Intuitive user interface design",
        "Responsive web design",
        "Academic project excellence"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription: "Developed as part of academic coursework, this hotel management website demonstrates proficiency in fundamental web technologies. The system includes room booking functionality, guest management, and an intuitive user interface designed with a focus on user experience optimization. Built using HTML, CSS, and JavaScript with emphasis on clean code and responsive design.",
    },
    {
      id: 4,
      title: "Network Infrastructure Optimization",
      shortDescription: "IT infrastructure improvements achieving 99% uptime.",
      description: "Comprehensive network troubleshooting and infrastructure optimization project.",
      image: "/network-monitoring-dashboard.png",
      tags: ["Network Administration", "System Optimization", "ITIL", "Infrastructure"],
      features: [
        "Network troubleshooting and optimization",
        "System performance monitoring",
        "99% uptime achievement",
        "Comprehensive documentation",
        "Team collaboration and improvement"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription: "During my internship at Bulkstream Limited, I led network infrastructure optimization efforts that resulted in maintaining 99% system uptime. The project involved comprehensive network troubleshooting, performance monitoring, and implementing best practices for system reliability. Provided technical support to 50+ end-users while maintaining detailed documentation of all improvements and resolutions.",
    }
  ]

  return (
    <section id="projects" className="py-20">
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
            🚀 Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-heading">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer enhanced-card transition-all duration-300 ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="enhanced-action-button"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              className="enhanced-gradient-button text-white"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="enhanced-action-button"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
