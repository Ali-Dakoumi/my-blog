import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Geek Blog - Digital Sanctuary for Code Warriors",
  description:
    "A terminal-themed blog for developers, hackers, and digital nomads. Dive deep into code, Linux, and the art of computing.",
  keywords: ["programming", "linux", "terminal", "coding", "geek", "developer", "blog"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>{children}</body>
    </html>
  )
}
