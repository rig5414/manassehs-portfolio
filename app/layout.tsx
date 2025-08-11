import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true
})

// Removed duplicate viewport declaration
export const metadata: Metadata = {
  metadataBase: new URL('https://tellefolio.vercel.app'),
  title: {
    default: "Manasseh Telle | ICT Infrastructure Support & Full-Stack Developer",
    template: "%s | Manasseh Telle"
  },
  description: "Professional portfolio of Manasseh Telle - ICT Infrastructure Support professional with expertise in system administration, network troubleshooting, and full-stack development. Based in Mombasa, Kenya.",
  applicationName: "Manasseh Telle Portfolio",
  referrer: 'origin-when-cross-origin',
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
    "Backend Developer",
    "Portfolio",
    "Professional Services"
  ],
  authors: [{ name: "Manasseh Telle", url: "https://linkedin.com/in/manasseh-telle" }],
  creator: "Manasseh Telle",
  publisher: "Manasseh Telle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "sfp3n5mE9V9IH_aX5ZaZvHRoErmoaRZpN67F56rU-_0",
    yandex: "your-yandex-verification-code"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#60a5fa' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen overflow-x-hidden text-foreground bg-background`}>
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
