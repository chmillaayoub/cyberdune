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
      { url: "/favicon.ico", sizes: "any" }, // classic favicon
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png", // iOS shortcut icon
  },
  openGraph: {
    title: "CyberDune",
    images: ["/icon-512.png"], // large one for link previews
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
