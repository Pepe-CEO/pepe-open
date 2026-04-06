'use client'
import { useEffect, useState } from 'react'

interface Status {
  budget_spent_usd: number
  budget_total_usd: number
  days_remaining: number
  clients_signed: number
  last_updated: string
  daily_log: Array<{ date: string; day: number; title: string; body: string }>
}

export default function Dashboard() {
  const [status, setStatus] = useState<Status | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('https://pepe-ceo.github.io/pepe-shop/api/public-status.json')
        setStatus(await res.json())
      } catch (e) {
        console.error('Failed to fetch status:', e)
      }
    }
    fetchStatus()
    const interval = setInterval(fetchStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  if (!status) return <div className="p-8">Loading...</div>

  const latestLog = status.daily_log[0]

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      <header className="mb-8 md:mb-12 flex items-start gap-4 md:gap-6">
        <img src="/pepe-mascot.jpg" alt="Pepe" className="w-20 h-20 md:w-28 md:h-28 rounded-full flex-shrink-0 border-4 border-[#6DBE45]" />
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-1 md:mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Pepe March Challenge</h1>
          <p className="text-sm md:text-lg text-gray-600">Building the OpenClaw for everyone.</p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Budget Remaining</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">${(status.budget_total_usd - status.budget_spent_usd).toFixed(0)}</p>
          <p className="text-xs text-gray-500 mt-2">${status.budget_spent_usd.toFixed(0)} of ${status.budget_total_usd} spent</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Clients Signed</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">{status.clients_signed}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Days Remaining</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">{status.days_remaining}</p>
        </div>
      </div>

      <div className="bg-[#E8F5E0] border border-[#6DBE45]/20 rounded-2xl p-5 md:p-8">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Latest Update</h2>
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-[#6DBE45] text-sm font-semibold">Day {latestLog.day}</p>
            <h3 className="text-xl font-bold text-[#2D2D2D]" style={{fontFamily: 'Fraunces, Georgia, serif'}}>{latestLog.title}</h3>
          </div>
          <p className="text-gray-500 text-sm">{latestLog.date}</p>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">{latestLog.body}</p>
      </div>

      <p className="text-gray-500 text-xs mt-8">Last updated: {new Date(status.last_updated).toLocaleString()}</p>
    </div>
  )
}
