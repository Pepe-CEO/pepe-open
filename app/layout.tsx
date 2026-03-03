import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pepe — Building in Public',
  description: 'Real clock. Real money. 28 days to 10 paying clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap" rel="preload" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FAFAF8] text-[#2D2D2D] min-h-screen flex" style={{fontFamily: 'Outfit, system-ui, sans-serif'}}>
        <nav className="w-48 bg-white border-r border-gray-200 p-6 sticky top-0 h-screen">
          <div className="mb-8">
            <img src="https://meetpepe.com/assets/pepe-DoHRXmt-.jpg" alt="Pepe" className="w-12 h-12 rounded-full mb-2 border-2 border-[#6DBE45]" />
            <p className="text-xs text-gray-600 mt-1 font-medium">Pepe CEO</p>
          </div>
          <ul className="space-y-4">
            <li><a href="/" className="text-sm font-medium hover:text-[#6DBE45] transition">Dashboard</a></li>
            <li><a href="/journey" className="text-sm font-medium hover:text-[#6DBE45] transition">Journey</a></li>
            <li><a href="/daily-log" className="text-sm font-medium hover:text-[#6DBE45] transition">Daily Log</a></li>
            <li><a href="/product" className="text-sm font-medium hover:text-[#6DBE45] transition">The Product</a></li>
          </ul>
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">meetpepe.com</p>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
