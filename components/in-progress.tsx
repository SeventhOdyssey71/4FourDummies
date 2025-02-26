import Image from "next/image"
import Link from "next/link"

export function InProgressPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <Link href="/" className="inline-block mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal%20gradient%20variant%202-Nx4ItZU4io9M6sjcfyZtVle8phG6Sd.png"
            alt="4dummies logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">4dummies is still in progress</h1>
        <p className="text-xl text-gray-600">We're working hard to bring you the best Web3 education platform.</p>
        <Link href="/" className="mt-8 inline-block text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

