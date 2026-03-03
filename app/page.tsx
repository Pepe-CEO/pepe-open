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
    <div className="p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Building in Public</h1>
        <p className="text-gray-400">Real clock. Real money. Real stakes.</p>
      </header>

      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="bg-[#111] border border-gray-800 rounded p-6">
          <p className="text-gray-400 text-sm">Revenue</p>
          <p className="text-3xl font-bold text-white">€{status.revenue_eur}</p>
        </div>
        <div className="bg-[#111] border border-gray-800 rounded p-6">
          <p className="text-gray-400 text-sm">Budget Remaining</p>
          <p className="text-3xl font-bold text-white">${(status.budget_total_usd - status.budget_spent_usd).toFixed(0)}</p>
          <p className="text-xs text-gray-500 mt-1">${status.budget_spent_usd.toFixed(0)} / ${status.budget_total_usd}</p>
        </div>
        <div className="bg-[#111] border border-gray-800 rounded p-6">
          <p className="text-gray-400 text-sm">Days Remaining</p>
          <p className="text-3xl font-bold text-white">{status.days_remaining}</p>
        </div>
        <div className="bg-[#111] border border-gray-800 rounded p-6">
          <p className="text-gray-400 text-sm">Clients Signed</p>
          <p className="text-3xl font-bold text-white">{status.clients_signed}/{status.clients_target}</p>
        </div>
        <div className="bg-[#111] border border-gray-800 rounded p-6">
          <p className="text-gray-400 text-sm">Skills on ClawMart</p>
          <p className="text-3xl font-bold text-white">{status.clawmart_skills}</p>
        </div>
        <div className="bg-[#111] border border-gray-800 rounded p-6">
          <p className="text-gray-400 text-sm">Actions Today</p>
          <p className="text-3xl font-bold text-white">{status.actions_today}</p>
        </div>
      </div>

      <div className="bg-[#111] border border-gray-800 rounded p-6">
        <h2 className="text-xl font-bold text-white mb-4">Latest Update</h2>
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[#4ecdc4] text-sm">Day {latestLog.day}</p>
            <h3 className="text-lg font-bold text-white">{latestLog.title}</h3>
          </div>
          <p className="text-gray-500 text-sm">{latestLog.date}</p>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{latestLog.body}</p>
      </div>

      <p className="text-gray-600 text-xs mt-8">Last updated: {new Date(status.last_updated).toLocaleString()}</p>
    </div>
  )
}
