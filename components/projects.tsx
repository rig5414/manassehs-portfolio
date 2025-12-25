"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown, ChevronRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
  fullDescription: string
  isCodeDisabled?: boolean
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    // Page 1 - Projects 1-4
    {
      id: 1,
      title: "BuildLink",
      shortDescription: "Kenya's first dedicated platform for built environment professionals.",
      description: "A digital ecosystem connecting architects, engineers, planners, and construction professionals.",
      image: "/buildlink.png",
      tags: ["React.js", "Supabase", "Full-Stack", "Real-time Database", "Professional Network"],
      features: [
        "Professional profile management and verification",
        "Project showcase and portfolio building",
        "Professional networking and collaboration",
        "Event and tender marketplace",
        "Knowledge exchange and resources",
        "Real-time data synchronization"
      ],
      demoLink: "https://buildlink.co.ke/",
      githubLink: "#",
      fullDescription: "BuildLink is a comprehensive digital ecosystem designed for architects, engineers, planners, students, and construction professionals across Kenya. Built with React.js and Supabase, it provides a unified space to network, learn, showcase, and grow in the built environment industry. The platform features professional profiles, project showcases, event listings, and curated industry content.",
      isCodeDisabled: true
    },
    {
      id: 2,
      title: "Quarry Management System",
      shortDescription: "Custom quarry management website with interactive features.",
      description: "A comprehensive quarry management system built for efficient operations management.",
      image: "/placeholder-sw6cj.png",
      tags: ["Next.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      features: [
        "Interactive dashboard for operations management",
        "Real-time data tracking and reporting",
        "Responsive design for mobile and desktop",
        "Client-focused feature implementation",
        "Efficient project delivery within timeline"
      ],
      demoLink: "https://v0-natural-stone-website.vercel.app/",
      githubLink: "https://github.com/rig5414/quarry-site",
      fullDescription: "Developed as a freelance project, this quarry management system provides comprehensive tools for managing quarry operations. Built with React.js and styled with Tailwind CSS, the system features an intuitive interface for tracking operations, managing resources, and generating reports. The project was delivered on time and met all client specifications through effective communication and iterative development.",
    },
    {
      id: 3,
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
      demoLink: "https://mtshopnextdoor.netlify.app/",
      githubLink: "https://github.com/rig5414/shop-next-door",
      fullDescription: "Led the development of a localized e-commerce platform as part of a university project. The platform features a complete product management system, user authentication, shopping cart functionality, and order processing. Built with React.js for the frontend and Node.js for the backend, with comprehensive API integration and database management.",
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
    },
    // Page 2 - Projects 5-7
    {
      id: 5,
      title: "Vehicle Tracker System",
      shortDescription: "Real-time vehicle tracking and management platform.",
      description: "A comprehensive vehicle tracking system with real-time location monitoring.",
      image: "/vehicle-tracker.png",
      tags: ["React.js", "Node.js", "Google Maps API", "Real-time Tracking"],
      features: [
        "Real-time vehicle location tracking",
        "GPS-based fleet management",
        "Route optimization and analytics",
        "Driver behavior monitoring",
        "Maintenance scheduling and alerts",
        "Comprehensive reporting dashboard"
      ],
      demoLink: "https://vehicle-tracker-tau.vercel.app/",
      githubLink: "https://github.com/rig5414/vehicle-tracker",
      fullDescription: "A sophisticated vehicle tracking system built with React.js and Node.js that provides real-time monitoring and management of vehicle fleets. The system integrates Google Maps API for location tracking, includes GPS-based analytics, and offers comprehensive reporting features. Ideal for logistics companies, delivery services, and fleet management operations.",
    },
    {
      id: 6,
      title: "Portfolio Website",
      shortDescription: "Personal portfolio website showcasing projects and experience.",
      description: "My own portfolio website built with modern web technologies.",
      image: "/portfolio.jpg",
      tags: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Vercel"],
      features: [
        "Responsive design for all devices",
        "Project showcase with detailed descriptions",
        "Experience timeline with animations",
        "Certificate and skills gallery",
        "Contact form with email integration",
        "Dark mode support"
      ],
      demoLink: "https://tellefolio.vercel.app/",
      githubLink: "https://github.com/rig5414/manassehs-portfolio",
      fullDescription: "This is my personal portfolio website built with Next.js, React.js, and Tailwind CSS. It showcases my professional journey, projects, certifications, and skills with smooth animations and a modern design. The site is fully responsive, supports dark mode, and includes an integrated contact form with EmailJS for direct communication. Deployed on Vercel for optimal performance.",
    },
    {
      id: 7,
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
    }
  ]

  const projectsPerPage = 4
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const displayedProjects = projects.slice(startIndex, startIndex + projectsPerPage)

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
          {displayedProjects.map((project, index) => (
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
                      loading="lazy"
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
                              disabled={project.isCodeDisabled || project.githubLink === "#"}
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank", "noopener,noreferrer")
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
                                window.open(project.demoLink, "_blank", "noopener,noreferrer")
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

          {/* GitHub Redirect Card - Only on Page 2 as last item */}
          {currentPage === 2 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: displayedProjects.length * 0.1 }}
              variants={fadeIn}
            >
              <Card className="group h-full enhanced-card relative overflow-hidden min-h-[300px] flex items-center justify-center hover:shadow-lg transition-all duration-300" style={{ backgroundImage: 'url(/vscode.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/65 via-background/55 to-background/65 z-0"></div>

                <CardContent className="p-6 text-center w-full relative z-10">
                  <div className="space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-blue-500/20 to-pink-500/20 p-4 rounded-lg">
                        <Github className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold gradient-text-heading">
                      Projects
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relax ">
                      Check out more projects and collaboration on GitHub
                    </p>
                    <Button
                      className="enhanced-gradient-button text-white font-semibold w-40"
                      onClick={() => window.open("https://github.com/rig5414", "_blank", "noopener,noreferrer")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Visit GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-4 mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="enhanced-action-button"
            >
              ← Previous
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                  className={currentPage === i + 1 ? "enhanced-gradient-button text-white" : ""}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="lg"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="enhanced-action-button"
            >
              Next <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="w-[95vw] max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[80vh] overflow-y-auto p-4 md:p-6 top-1/2 -translate-y-1/2">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs md:text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 md:space-y-4 pr-2 md:pr-0">
              <div className="relative w-full overflow-hidden rounded-md">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  loading="lazy"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {selectedProject.fullDescription}
              </p>
              
              <div className="space-y-2 md:space-y-3">
                <h4 className="font-semibold text-xs md:text-sm">Key Features:</h4>
                <ul className="list-disc list-inside text-xs md:text-sm text-muted-foreground space-y-1">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="leading-tight">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 pt-2 justify-end">
                <Button 
                  variant="outline" 
                  asChild 
                  disabled={selectedProject.isCodeDisabled || selectedProject.githubLink === "#"}
                  className="text-xs md:text-sm w-full sm:w-auto h-9 md:h-10"
                >
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button 
                  asChild
                  className="text-xs md:text-sm w-full sm:w-auto h-9 md:h-10"
                >
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
