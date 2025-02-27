"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const features = [
  {
    id: 1,
    title: "Blockchain Gaming",
    description:
      "Experience the future of gaming with blockchain technology. Learn about NFTs, play-to-earn mechanics, and more.",
    image: "https://pbs.twimg.com/media/GenUvUiXEAAKs1O?format=jpg&name=large",
  },
  {
    id: 2,
    title: "DeFi Fundamentals",
    description: "Master the basics of decentralized finance, from staking to yield farming and beyond.",
    image: "https://pbs.twimg.com/media/GkuFM83XYAAfVOG?format=jpg&name=medium",
  },
  {
    id: 3,
    title: "Interactive Learning",
    description: "Learn by doing with our interactive tutorials and hands-on exercises.",
    image: "https://pbs.twimg.com/media/GcqkklHbQAAIjyF?format=jpg&name=4096x4096",
  },
]

export function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout>()

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }, [])

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [nextSlide])

  // Pause auto-advance on hover
  const pauseAutoAdvance = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [])

  // Resume auto-advance when mouse leaves
  const resumeAutoAdvance = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(nextSlide, 4000)
  }, [nextSlide])

  return (
    <div
      className="relative w-full h-[400px] sm:h-[600px] bg-gray-900 overflow-hidden"
      onMouseEnter={pauseAutoAdvance}
      onMouseLeave={resumeAutoAdvance}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
            <Image
              src={features[currentIndex].image || "/placeholder.svg"}
              alt={features[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="text-sm font-mono mb-2 text-gray-400">
                  {String(currentIndex + 1).padStart(2, "0")} • {String(features.length).padStart(2, "0")}
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
                >
                  {features[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg sm:text-xl font-light text-gray-300 mb-8"
                >
                  {features[currentIndex].description}
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-normal">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => {
          prevSlide()
          pauseAutoAdvance()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => {
          nextSlide()
          pauseAutoAdvance()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}

