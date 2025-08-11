import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Certificates from "@/components/certificates"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import LoadingScreen from "@/components/loading-screen"
import ScrollProgress from "@/components/scroll-progress"
import PageTransitions from "@/components/page-transitions"

export const metadata: Metadata = {
  title: "Manasseh Telle | ICT Infrastructure Support & Full-Stack Developer",
  description: "Professional portfolio of Manasseh Telle - ICT Infrastructure Support professional with hands-on experience in system administration, network troubleshooting, and full-stack development. Based in Mombasa, Kenya.",
  keywords: [
    "Manasseh Telle",
    "ICT Infrastructure Support",
    "Full-Stack Developer",
    "Network Support Specialist",
    "System Administrator",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Network Troubleshooting",
    "System Administration",
    "Mombasa Kenya",
    "IT Support",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer"
  ],
  authors: [{ name: "Manasseh Telle", url: "https://linkedin.com/in/manasseh-telle" }],
  creator: "Manasseh Telle",
  publisher: "Manasseh Telle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tellefolio.vercel.app",
    siteName: "Manasseh Telle Portfolio",
    title: "Manasseh Telle | ICT Infrastructure Support & Full-Stack Developer",
    description: "Professional portfolio showcasing ICT infrastructure support expertise and full-stack development skills. Specializing in system administration, network troubleshooting, and modern web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manasseh Telle - ICT Infrastructure Support & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manasseh Telle | ICT Infrastructure Support & Full-Stack Developer",
    description: "Professional portfolio showcasing ICT infrastructure support expertise and full-stack development skills.",
    images: ["/og-image.png"],
    creator: "@manassehtelle",
  },
  alternates: {
    canonical: "https://tellefolio.vercel.app",
  },
  category: "technology",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manasseh Telle",
  url: "https://tellefolio.vercel.app",
  image: "/manasseh-telle-headshot.png",
  sameAs: [
    "https://linkedin.com/in/manasseh-telle",
    "mailto:manassehtelle90@gmail.com"
  ],
  jobTitle: "ICT Infrastructure Support & Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mombasa",
    addressCountry: "Kenya"
  },
  alumniOf: {
    "@type": "Organization",
    name: "Machakos University"
  },
  knowsAbout: [
    "ICT Infrastructure Support",
    "Network Troubleshooting",
    "System Administration",
    "Full-Stack Development",
    "React.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Network Security",
    "Windows Server",
    "Linux Administration"
  ],
  description: "ICT Infrastructure Support professional with hands-on experience in system administration, network troubleshooting, and full-stack development. Combining strong technical problem-solving skills with proven software development capabilities."
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LoadingScreen />
      <ScrollProgress />
      <PageTransitions />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Certificates />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
