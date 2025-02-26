import type React from "react"
import "@/styles/globals.css"
import { Space_Grotesk } from "next/font/google"
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "4dummies - Learn Web3 The Right Way",
  description: "The ultimate platform for learning about blockchain gaming, DeFi, and more",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", spaceGrotesk.variable)}>
      <body className="font-sans min-h-screen antialiased">{children}</body>
    </html>
  )
}



import './globals.css'