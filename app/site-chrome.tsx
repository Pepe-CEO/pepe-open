'use client'

import { usePathname } from 'next/navigation'
import { MobileNav } from './mobile-nav'

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/war-room', label: '🐕 War Room' },
  { href: '/journey', label: 'Journey' },
  { href: '/activity', label: '🔴 Activity' },
  { href: '/brandtrack', label: '📈 BrandTrack' },
  { href: '/agents', label: '🤖 Agents' },
  { href: '/research/polsia', label: '📊 Research' },
  { href: '/daily-log', label: 'Daily Log' },
  { href: '/product', label: 'The Product' },
  { href: '/excalidraw', label: '✏️ Excalidraw' },
]

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isBrandtrack = pathname?.startsWith('/brandtrack')
  const isFullscreenTool = pathname?.startsWith('/excalidraw')

  if (isBrandtrack || isFullscreenTool) {
    return <main className="min-h-screen">{children}</main>
  }

  return (
    <>
      <MobileNav links={navLinks} />

      <div className="md:flex">
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
    </>
  )
}
