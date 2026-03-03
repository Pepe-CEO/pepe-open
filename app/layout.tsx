import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pepe — Building in Public',
  description: 'Real clock. Real money. 28 days to 10 paying clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-gray-100 min-h-screen flex">
        <nav className="w-48 bg-[#111] border-r border-gray-800 p-6 sticky top-0 h-screen">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white">🐕🍉</h1>
            <p className="text-xs text-gray-500 mt-1">Building in Public</p>
          </div>
          <ul className="space-y-4">
            <li><a href="/" className="text-sm hover:text-[#4ecdc4]">Dashboard</a></li>
            <li><a href="/journey" className="text-sm hover:text-[#4ecdc4]">Journey</a></li>
            <li><a href="/daily-log" className="text-sm hover:text-[#4ecdc4]">Daily Log</a></li>
            <li><a href="/product" className="text-sm hover:text-[#4ecdc4]">The Product</a></li>
          </ul>
        </nav>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
