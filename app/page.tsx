"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FeatureCarousel } from "@/components/feature-carousel"
import { WaitlistQuestionnaire } from "@/components/waitlist-questionnaire"
import { InProgressPage } from "@/components/in-progress"

const ecosystemProjects = [
  { name: "Walrus", description: "The most advanced wallet for the Sui blockchain", icon: "🦭" },
  { name: "Deepbook", description: "Decentralized order book for efficient trading", icon: "📚" },
  { name: "Aftermath", description: "Next-generation DeFi trading platform", icon: "⚡" },
  { name: "Suilend", description: "Lending and borrowing protocol on Sui", icon: "💰" },
  { name: "Navi", description: "Cross-chain bridge and infrastructure", icon: "🌉" },
  { name: "Tradeport", description: "NFT marketplace and trading platform", icon: "🎨" },
  { name: "NS", description: "Naming service for Sui addresses", icon: "📝" },
  { name: "AnimaLabs", description: "Gaming and NFT infrastructure", icon: "🎮" },
  { name: "7kAg", description: "Web3 gaming studio and platform", icon: "🎲" },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showQuestionnaire, setShowQuestionnaire] = useState(false)
  const [showInProgress, setShowInProgress] = useState(false)

  const handleButtonClick = (isWaitlist: boolean) => {
    if (isWaitlist) {
      setShowQuestionnaire(true)
    } else {
      setShowInProgress(true)
    }
  }

  if (showInProgress) {
    return <InProgressPage />
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal%20gradient%20variant%202-Nx4ItZU4io9M6sjcfyZtVle8phG6Sd.png"
              alt="4dummies logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-extrabold text-xl">4dummies</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-light hover:text-blue-600">
              Features
            </Link>
            <Link href="#learn" className="text-sm font-light hover:text-blue-600">
              Learn
            </Link>
            <Link href="#gaming" className="text-sm font-light hover:text-blue-600">
              Gaming
            </Link>
            <Link href="#defi" className="text-sm font-light hover:text-blue-600">
              DeFi
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700 font-normal hidden sm:inline-flex"
              onClick={() => handleButtonClick(false)}
            >
              Connect Wallet
            </Button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-light hover:text-blue-600 hover:bg-gray-50"
              >
                Features
              </Link>
              <Link
                href="#learn"
                className="block px-3 py-2 rounded-md text-base font-light hover:text-blue-600 hover:bg-gray-50"
              >
                Learn
              </Link>
              <Link
                href="#gaming"
                className="block px-3 py-2 rounded-md text-base font-light hover:text-blue-600 hover:bg-gray-50"
              >
                Gaming
              </Link>
              <Link
                href="#defi"
                className="block px-3 py-2 rounded-md text-base font-light hover:text-blue-600 hover:bg-gray-50"
              >
                DeFi
              </Link>
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 font-normal"
                  onClick={() => handleButtonClick(false)}
                >
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 overflow-hidden">
          <div className="container relative">
            {/* Background Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute inset-0 z-0"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal%20gradient%20variant%202q-68uM66zsiyUm2lCxWIVmR8J2mOZa2l.png"
                alt="Background logo"
                width={600}
                height={600}
                className="w-[600px] h-[600px] object-contain opacity-10"
                priority
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                Simple and Seamless{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                  onboarding on Sui
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 font-light">
                Learn about blockchain gaming, DeFi, and more through interactive lessons designed for beginners
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 font-normal"
                  onClick={() => handleButtonClick(true)}
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 font-normal"
                  onClick={() => handleButtonClick(false)}
                >
                  Explore Features
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Replace the old Features section with the new FeatureCarousel */}
        <section id="features" className="w-full">
          <FeatureCarousel />
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-16 bg-gray-100">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-extrabold mb-2 text-blue-600">100+</h3>
                <p className="text-gray-600 font-light">Active Learners</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-extrabold mb-2 text-blue-600">50+</h3>
                <p className="text-gray-600 font-light">Interactive Courses</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-extrabold mb-2 text-blue-600">24/7</h3>
                <p className="text-gray-600 font-light">Community Support</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NFT Showcase */}
        <section className="py-8 sm:py-16">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Most Visited Course</h2>
      <p className="text-gray-600 max-w-2xl mx-auto font-light">
        The most viewed and completed course by our users this week.
      </p>
    </motion.div>

    <div className="flex justify-center"> 
      <div className="grid md:grid-cols-1 gap-8">
        {[1].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-96"
          >
            <Image
              src={`https://pbs.twimg.com/profile_banners/1803816329553850368/1723558406/1500x500`}
              alt={`NFT ${i}`}
              width={400}
              height={300}
              className="w-full object-cover aspect-video"
            />
            <div className="p-4">
              <h3 className="font-bold mb-2 text-gray-900">Walrus for Beginners</h3>
              <p className="text-sm text-gray-600">Comprehensive lessons on Walrus Protocol</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


        {/* Add the new Sui Ecosystem section before the CTA section */}
        <section className="py-8 sm:py-16 bg-gray-900 text-white">
          <div className="container">
            <div className="mb-12">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block text-gray-400 mb-4"
              >
                Ecosystem
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
              >
                Learn about the Sui Ecosystem
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg sm:text-xl max-w-3xl font-light"
              >
                We have partnered with the leading projects in the ecosystem to deliver the best possible user
                experience for a wide variety of use cases
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecosystemProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-gray-800/70 transition-colors">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
 
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                        <p className="text-gray-400 font-light">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-16 bg-blue-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-extrabold mb-4 text-white">Ready to Start Your Web3 Journey?</h2>
              <p className="text-blue-100 mb-8 font-light">
                Join thousands of learners and start your blockchain education today
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => handleButtonClick(false)}
              >
                Get Started Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t">
        <div className="container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal%20gradient%20variant%202-Nx4ItZU4io9M6sjcfyZtVle8phG6Sd.png"
                  alt="4dummies logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-bold text-xl text-gray-900">4dummies</span>
              </Link>
              <p className="text-sm text-gray-600">Making Web3 education accessible to everyone</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 font-light">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Community</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} 4dummies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showQuestionnaire && <WaitlistQuestionnaire onClose={() => setShowQuestionnaire(false)} />}
    </div>
  )
}

