"use client"
import { Card } from "@/components/ui/card"
import { ConnectButton, useWallet } from "@mysten/wallet-kit"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ConnectPage() {
  const { connected } = useWallet()
  const router = useRouter()

  useEffect(() => {
    if (connected) {
      router.push("/app")
    }
  }, [connected, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <Card className="w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Connect a Wallet</h1>
          <p className="text-muted-foreground">
            You need a Sui wallet to interact with 4dummies. Connect your wallet to get started.
          </p>
        </div>

        <div className="space-y-4">
          <ConnectButton className="w-full" />
        </div>

        <p className="text-sm text-muted-foreground text-center mt-6">
          By connecting a wallet, you accept 4dummies&apos;s{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and consent to its{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </Card>
    </div>
  )
}

