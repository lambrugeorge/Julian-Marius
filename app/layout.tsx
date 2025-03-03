import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Julian & Marius | Premium Street Food",
  description: "Découvrez nos délicieuses pizzas et plats de rue de qualité supérieure à Ahetze, France.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'