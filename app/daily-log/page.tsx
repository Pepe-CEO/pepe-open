'use client'
import { useEffect, useState } from 'react'

interface Log {
  date: string
  day: number
  title: string
  body: string
}

export default function DailyLog() {
  const [logs, setLogs] = useState<Log[]>([])

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await fetch('https://pepe-ceo.github.io/pepe-shop/api/public-status.json')
        const data = await res.json()
        setLogs(data.daily_log || [])
      } catch (e) {
        console.error('Failed to fetch logs:', e)
      }
    }
    fetchLogs()
  }, [])

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-8">Daily Log</h1>
      
      <div className="space-y-6">
        {logs.map((log) => (
          <div key={log.date} className="bg-[#111] border border-gray-800 rounded p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-[#4ecdc4] text-sm font-semibold">Day {log.day}</p>
                <h3 className="text-xl font-bold text-white">{log.title}</h3>
              </div>
              <p className="text-gray-500 text-sm">{log.date}</p>
            </div>
            <p className="text-gray-300 leading-relaxed">{log.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
