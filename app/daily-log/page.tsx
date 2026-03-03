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
      <div className="mb-8 flex items-end gap-6">
        <img src="https://meetpepe.com/assets/pepe-DoHRXmt-.jpg" alt="Pepe" className="w-16 h-16 rounded-full flex-shrink-0 border-2 border-[#6DBE45]" />
        <h1 className="text-5xl font-bold text-[#2D2D2D]" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Daily Log</h1>
      </div>
      
      <div className="space-y-6">
        {logs.map((log) => (
          <div key={log.date} className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-[#6DBE45] text-sm font-semibold">Day {log.day}</p>
                <h3 className="text-xl font-bold text-[#2D2D2D]" style={{fontFamily: 'Fraunces, Georgia, serif'}}>{log.title}</h3>
              </div>
              <p className="text-gray-500 text-sm">{log.date}</p>
            </div>
            <p className="text-gray-700 leading-relaxed">{log.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
