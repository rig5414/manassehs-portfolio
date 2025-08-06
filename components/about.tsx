"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Network, Code } from 'lucide-react'

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <Badge variant="outline" className="mb-4 enhanced-badge">
            👨‍💻 About Me
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl gradient-text-heading">Professional Summary</h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="mb-4 text-2xl font-bold gradient-text-subheading">ICT Professional & Developer</h3>
            <p className="mb-6 text-muted-foreground">
              I'm an ICT Infrastructure Support professional with hands-on experience in system administration, 
              network troubleshooting, and full-stack development. I combine strong technical problem-solving 
              skills with proven software development capabilities.
            </p>
            <p className="mb-6 text-muted-foreground">
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
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-pink-500/10 animate-float">
                      <Server className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold">System Administration</h4>
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
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-pink-500/10 animate-float-delay-1">
                      <Network className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold">Network Infrastructure</h4>
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
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-pink-500/10 animate-float-delay-2">
                      <Code className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold">Full-Stack Development</h4>
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