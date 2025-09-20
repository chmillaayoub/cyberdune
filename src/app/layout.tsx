import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CyberDune",
  description: "CyberDune - First Cybersecurity Club in The Moroccan Sahara",
  icons: {
    icon: [
      { url: "/favicon.webp", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "CyberDune",
    images: ["/favicon.webp"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
