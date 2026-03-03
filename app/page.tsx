'use client'
import { useEffect, useState } from 'react'

interface Status {
  revenue_eur: number
  budget_spent_usd: number
  budget_total_usd: number
  days_remaining: number
  clients_signed: number
  clients_target: number
  actions_today: number
  clawmart_skills: number
  x_followers: number
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
    <div className="p-8 max-w-5xl">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Building in Public</h1>
        <p className="text-lg text-gray-600">Real clock. Real money. Real stakes.</p>
      </header>

      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Revenue</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">€{status.revenue_eur}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Budget Remaining</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">${(status.budget_total_usd - status.budget_spent_usd).toFixed(0)}</p>
          <p className="text-xs text-gray-500 mt-2">${status.budget_spent_usd.toFixed(0)} of ${status.budget_total_usd} spent</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Days Remaining</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">{status.days_remaining}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Clients Signed</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">{status.clients_signed}<span className="text-gray-400">/{status.clients_target}</span></p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Skills on ClawMart</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">{status.clawmart_skills}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Actions Today</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">{status.actions_today}</p>
        </div>
      </div>

      <div className="bg-[#E8F5E0] border border-[#6DBE45]/20 rounded-2xl p-8">
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
