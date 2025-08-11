"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const loadingMessages = [
  { message: "Initializing awesome experience... 🚀", emoji: "✨" },
  { message: "Loading creative projects... 💼", emoji: "🎨" },
  { message: "Preparing tech stack... 🔧", emoji: "💻" },
  { message: "Almost there... ⚡", emoji: "🌟" }
]

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    // Handle actual resource loading
    const handleLoad = () => {
      setProgress(100)
      setTimeout(() => setIsLoading(false), 500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Simulate progress until everything is loaded
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.min(99 - prev, Math.random() * 15)
        return prev + increment
      })

      setMessageIndex(prev => (prev + 1) % loadingMessages.length)
    }, 1500)

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="loading-container"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="loading-text">
              <span className="text-blue-500">Manasseh</span>
              <span className="text-pink-500">Telle</span>
            </h1>
            <p className="loading-subtitle">ICT Infrastructure Support & Full-Stack Developer</p>
            
            <div className="mt-8">
              <div className="w-80 h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.p
                key={messageIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2"
              >
                {loadingMessages[messageIndex].message}
                <span className="text-xl animate-bounce">
                  {loadingMessages[messageIndex].emoji}
                </span>
              </motion.p>
              <p className="text-sm font-semibold mt-2">{Math.round(progress)}%</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="loading-spinner"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
