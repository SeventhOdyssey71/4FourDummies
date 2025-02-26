"use client"

import { Button } from "@/components/ui/button"
import { useWallet } from "@mysten/wallet-kit"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function AppPage() {
  const { connected, disconnect } = useWallet()
  const router = useRouter()

  useEffect(() => {
    if (!connected) {
      router.push("/connect")
    }
  }, [connected, router])

  const handleDisconnect = async () => {
    try {
      await disconnect()
      router.push("/")
    } catch (error) {
      console.error("Failed to disconnect:", error)
    }
  }

  if (!connected) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We&apos;re working hard to bring you the best Web3 education platform. Stay tuned!
        </p>
        <div className="space-y-4">
          <p className="text-muted-foreground">Wallet connected successfully</p>
          <Button variant="outline" onClick={handleDisconnect}>
            Disconnect Wallet
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

