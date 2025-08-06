"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Server, Database, Wrench, Shield } from 'lucide-react'

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const technologies = {
    programming: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      description: "Core languages for development and scripting",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "PHP", level: 70 },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Modern web development technologies",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 90 },
      ],
    },
    backend: {
      icon: <Server className="h-6 w-6" />,
      title: "Backend & Systems",
      description: "Server-side technologies and system administration",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Django", level: 80 },
        { name: "Windows Server", level: 90 },
        { name: "Linux Administration", level: 85 },
        { name: "TCP/IP Networking", level: 85 },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Database Systems",
      description: "Database management and administration",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Oracle SQL", level: 75 },
        { name: "PL/SQL", level: 70 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Technologies",
      description: "Development and administration tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "MS Office Suite", level: 95 },
        { name: "Adobe Creative Suite", level: 80 },
        { name: "SPSS", level: 75 },
        { name: "CSPro", level: 70 },
      ],
    },
    security: {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Testing",
      description: "Security tools and penetration testing",
      skills: [
        { name: "Metasploit", level: 70 },
        { name: "Nmap", level: 75 },
        { name: "Burp Suite", level: 65 },
        { name: "ITIL Principles", level: 80 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
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
            🚀 Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-heading">Technical Proficiencies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer enhanced-card ${
                  selectedCategory === key ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-3 rounded-full animate-float">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold gradient-text-subheading">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                            onMouseEnter={() => setHoveredSkill(`${key}-${index}`)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ 
                                  duration: 1, 
                                  delay: index * 0.1,
                                  ease: "easeOut"
                                }}
                                className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 ${
                                  hoveredSkill === `${key}-${index}` ? 'shadow-lg shadow-blue-500/50 animate-shimmer' : ''
                                }`}
                                style={{
                                  filter: hoveredSkill === `${key}-${index}` ? 'brightness(1.2)' : 'brightness(1)'
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="enhanced-skill-badge">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary" className="enhanced-skill-badge bg-gradient-to-r from-blue-500/10 to-pink-500/10">
                          +{category.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
