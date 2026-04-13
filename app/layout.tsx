import type { Metadata } from 'next'
import './globals.css'
import { SiteChrome } from './site-chrome'

export const metadata: Metadata = {
  title: 'Pepe — Building in Public',
  description: 'Real clock. Real money. 28 days to 10 paying clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap" rel="preload" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAFAF8] text-[#2D2D2D] min-h-screen" style={{fontFamily: 'Outfit, system-ui, sans-serif'}}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
