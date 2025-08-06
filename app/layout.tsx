import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Ali Dakoumi - Code & Coffee",
  description:
    "Personal blog of Ali Dakoumi, a frontend developer sharing insights on modern web development, React, TypeScript, and the art of coding.",
  keywords: ["frontend", "developer", "react", "typescript", "javascript", "web development", "Ali Dakoumi"],
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
