"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Network, Code, Users } from 'lucide-react'

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            👨‍💻 About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-heading">Professional Summary</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text-subheading">ICT Professional & Developer</h3>
            <p className="text-muted-foreground mb-6">
              I'm an ICT Infrastructure Support professional with hands-on experience in system administration, 
              network troubleshooting, and full-stack development. I combine strong technical problem-solving 
              skills with proven software development capabilities.
            </p>
            <p className="text-muted-foreground mb-6">
              With experience delivering comprehensive IT support, managing network infrastructure, and developing 
              scalable web applications, I'm committed to leveraging technology to optimize business operations 
              and enhance system reliability.
            </p>
            <p className="text-muted-foreground">
              Based in Mombasa, Kenya, I bring a unique combination of infrastructure support experience and 
              modern software development capabilities to every project I work on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card className="enhanced-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-3 rounded-full animate-float">
                      <Server className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">System Administration</h4>
                      <p className="text-muted-foreground">
                        Expert in Windows and Linux system administration, hardware diagnostics, and performance optimization.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card className="enhanced-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-3 rounded-full animate-float" style={{ animationDelay: '0.5s' }}>
                      <Network className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Network Infrastructure</h4>
                      <p className="text-muted-foreground">
                        Skilled in network troubleshooting, TCP/IP protocols, and maintaining 99% system uptime.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card className="enhanced-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 p-3 rounded-full animate-float" style={{ animationDelay: '1s' }}>
                      <Code className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Full-Stack Development</h4>
                      <p className="text-muted-foreground">
                        Proficient in modern web technologies including React.js, Node.js, and database management.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
