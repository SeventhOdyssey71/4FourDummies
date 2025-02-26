"use client"

import { WalletProvider } from "@mysten/wallet-kit"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return <WalletProvider autoConnect={false}>{children}</WalletProvider>
}

