import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'iCog Labs | AI Research & Software Development',
  description: 'iCog Labs is a research and development company specializing in artificial intelligence, machine learning, robotics, and innovative software solutions.',
  keywords: 'artificial intelligence, AI, machine learning, robotics, software development, Ethiopia, research',
  authors: [{ name: 'iCog Labs' }],
  openGraph: {
    title: 'iCog Labs | AI Research & Software Development',
    description: 'Advancing the frontier of artificial intelligence through research and innovative solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
