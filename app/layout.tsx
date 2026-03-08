import type { Metadata } from 'next'
import './globals.css'
import { MobileNav } from './mobile-nav'

export const metadata: Metadata = {
  title: 'Pepe — Building in Public',
  description: 'Real clock. Real money. 28 days to 10 paying clients.',
}

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/war-room', label: '🐕 War Room' },
  { href: '/journey', label: 'Journey' },
  { href: '/activity', label: '🔴 Activity' },
  { href: '/agents', label: '🤖 Agents' },
  { href: '/daily-log', label: 'Daily Log' },
  { href: '/product', label: 'The Product' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap" rel="preload" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAFAF8] text-[#2D2D2D] min-h-screen" style={{fontFamily: 'Outfit, system-ui, sans-serif'}}>
        {/* Mobile header */}
        <MobileNav links={navLinks} />

        <div className="md:flex">
          {/* Desktop sidebar */}
          <nav className="hidden md:block w-48 bg-white border-r border-gray-200 p-6 sticky top-0 h-screen flex-shrink-0">
            <div className="mb-8">
              <img src="https://meetpepe.com/assets/pepe-DoHRXmt-.jpg" alt="Pepe" className="w-12 h-12 rounded-full mb-2 border-2 border-[#6DBE45]" />
              <p className="text-xs text-gray-600 mt-1 font-medium">Pepe CEO</p>
            </div>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-medium hover:text-[#6DBE45] transition">{link.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">meetpepe.com</p>
            </div>
          </nav>
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </body>
    </html>
  )
}
