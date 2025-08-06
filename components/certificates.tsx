"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Award, Calendar, ExternalLink, Eye, Download } from 'lucide-react'

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  category: string
  description: string
  image: string
  credentialId: string
  skills: string[]
  verifyUrl: string
  downloadUrl: string
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [filter, setFilter] = useState("all")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "CompTIA Network+ Certification",
      issuer: "CompTIA",
      date: "2024",
      category: "networking",
      description: "Validates the essential knowledge and skills needed to confidently design, configure, manage and troubleshoot wired and wireless networks.",
      image: "/comptia-network-plus.png",
      credentialId: "COMP001234567",
      skills: ["Network Troubleshooting", "TCP/IP", "Network Security", "Wireless Networks"],
      verifyUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      category: "cloud",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      image: "/aws-cloud-practitioner.png",
      credentialId: "AWS-CCP-2024-001",
      skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Cost Management"],
      verifyUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "ITIL Foundation v4",
      issuer: "AXELOS",
      date: "2023",
      category: "management",
      description: "Understanding of the ITIL framework and how it can be used to enhance IT service management within an organization.",
      image: "/itil-foundation-v4.png",
      credentialId: "ITIL-F-2023-789",
      skills: ["Service Management", "ITIL Practices", "Value Streams", "Continual Improvement"],
      verifyUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      category: "cloud",
      description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      image: "/azure-fundamentals.png",
      credentialId: "MS-AZ-900-2024",
      skills: ["Azure Services", "Cloud Concepts", "Azure Pricing", "Security & Compliance"],
      verifyUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "2023",
      category: "networking",
      description: "Validates ability to install, configure, operate, and troubleshoot medium-size routed and switched networks.",
      image: "/cisco-ccna.png",
      credentialId: "CSCO13579246",
      skills: ["Routing & Switching", "Network Security", "IP Connectivity", "Network Access"],
      verifyUrl: "#",
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Google IT Support Professional Certificate",
      issuer: "Google",
      date: "2023",
      category: "support",
      description: "Comprehensive program covering troubleshooting, customer service, networking, operating systems, system administration and security.",
      image: "/google-it-support.png",
      credentialId: "GOOGLE-IT-2023-456",
      skills: ["Technical Support", "System Administration", "Customer Service", "Problem Solving"],
      verifyUrl: "#",
      downloadUrl: "#"
    }
  ]

  const categories = [
    { id: "all", name: "All Certificates", count: certificates.length },
    { id: "networking", name: "Networking", count: certificates.filter(cert => cert.category === "networking").length },
    { id: "cloud", name: "Cloud Computing", count: certificates.filter(cert => cert.category === "cloud").length },
    { id: "management", name: "IT Management", count: certificates.filter(cert => cert.category === "management").length },
    { id: "support", name: "IT Support", count: certificates.filter(cert => cert.category === "support").length }
  ]

  const filteredCertificates = filter === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === filter)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      networking: "certificate-badge-blue",
      cloud: "certificate-badge-purple", 
      management: "certificate-badge-green",
      support: "certificate-badge-pink"
    }
    return colors[category] || "certificate-badge-gray"
  }

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-background to-muted/30">
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
            🏆 Certifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-heading">Professional Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        {/* Enhanced Filter Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`enhanced-filter-button transition-all duration-300 ${
                filter === category.id 
                  ? "enhanced-gradient-button text-white" 
                  : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 dark:hover:from-blue-950 dark:hover:to-pink-950"
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 enhanced-count-badge">
                {category.count}
              </Badge>
            </Button>
          ))}
        </motion.div>

        {/* Enhanced Certificates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full cursor-pointer enhanced-card">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={certificate.image || "/placeholder.svg?height=200&width=300"}
                        alt={certificate.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="enhanced-action-button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedCertificate(certificate)
                            }}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="enhanced-action-button"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(certificate.verifyUrl, "_blank")
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Verify
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={getCategoryColor(certificate.category)}>
                          {certificate.category.charAt(0).toUpperCase() + certificate.category.slice(1)}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {certificate.date}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                        {certificate.title}
                      </h3>
                      
                      <p className="text-primary font-medium mb-3">{certificate.issuer}</p>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {certificate.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {certificate.skills.slice(0, 2).map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs enhanced-skill-badge">
                            {skill}
                          </Badge>
                        ))}
                        {certificate.skills.length > 2 && (
                          <Badge variant="outline" className="text-xs enhanced-skill-badge">
                            +{certificate.skills.length - 2} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Award className="h-3 w-3 mr-1" />
                          ID: {certificate.credentialId}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="enhanced-learn-more-button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedCertificate(certificate)
                          }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Certificate Detail Modal */}
      {selectedCertificate && (
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-2xl enhanced-modal">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 gradient-text-heading">
                <Award className="h-5 w-5 text-primary" />
                {selectedCertificate.title}
              </DialogTitle>
              <DialogDescription>
                <Badge className={getCategoryColor(selectedCertificate.category)}>
                  {selectedCertificate.category.charAt(0).toUpperCase() + selectedCertificate.category.slice(1)}
                </Badge>
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              <img
                src={selectedCertificate.image || "/placeholder.svg"}
                alt={selectedCertificate.title}
                className="w-full rounded-lg object-cover max-h-64"
              />
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Issuing Organization</h4>
                  <p className="text-muted-foreground">{selectedCertificate.issuer}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Issue Date</h4>
                  <p className="text-muted-foreground">{selectedCertificate.date}</p>
                </div>
                <div className="col-span-2">
                  <h4 className="font-semibold mb-1">Credential ID</h4>
                  <p className="text-muted-foreground font-mono">{selectedCertificate.credentialId}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-muted-foreground">{selectedCertificate.description}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Skills Validated</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="enhanced-skill-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button asChild className="flex-1 enhanced-gradient-button text-white">
                  <a href={selectedCertificate.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </a>
                </Button>
                <Button variant="outline" asChild className="enhanced-outline-button">
                  <a href={selectedCertificate.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download
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
