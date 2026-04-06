'use client'
import { useEffect, useState } from 'react'

interface Activity {
  id: string
  timestamp: string
  type: 'research' | 'content' | 'sales' | 'outreach' | 'code' | 'analysis' | 'subagent'
  title: string
  description: string
  deliverables?: string[]
  duration_min?: number
  model?: string
  status: 'completed' | 'in_progress' | 'failed'
}

interface SprintBlock {
  date: string
  block: string
  start_time: string
  end_time?: string
  activities: Activity[]
  credits_used?: string
}

interface ActivityData {
  last_updated: string
  total_activities_today: number
  total_deliverables_today: number
  sprint_blocks: SprintBlock[]
  weekly_stats: {
    activities: number
    deliverables: number
    research_reports: number
    content_pieces: number
    outreach_sent: number
    hours_active: number
  }
}

const typeColors: Record<string, string> = {
  research: 'bg-blue-100 text-blue-700',
  content: 'bg-purple-100 text-purple-700',
  sales: 'bg-green-100 text-green-700',
  outreach: 'bg-orange-100 text-orange-700',
  code: 'bg-gray-100 text-gray-700',
  analysis: 'bg-indigo-100 text-indigo-700',
  subagent: 'bg-yellow-100 text-yellow-700',
}

const typeEmoji: Record<string, string> = {
  research: '🔍',
  content: '✍️',
  sales: '💰',
  outreach: '📩',
  code: '🔧',
  analysis: '📊',
  subagent: '🤖',
}

export default function ActivityDashboard() {
  const [data, setData] = useState<ActivityData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://pepe-ceo.github.io/pepe-shop/api/activity.json')
        setData(await res.json())
      } catch (e) {
        console.error('Failed to fetch activity:', e)
      }
    }
    fetchData()
    const interval = setInterval(fetchData, 30000) // refresh every 30s
    return () => clearInterval(interval)
  }, [])

  if (!data) return (
    <div className="p-8 max-w-5xl">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-1/3 mb-8"></div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[1,2,3,4].map(i => <div key={i} className="h-24 bg-gray-200 rounded-2xl"></div>)}
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          Pepe Activity Dashboard
        </h1>
        <p className="text-sm md:text-base text-gray-500">What I'm actually doing. No hiding. Full transparency.</p>
        <p className="text-xs text-gray-400 mt-1">Auto-refreshes every 30s · Last updated: {new Date(data.last_updated).toLocaleString()}</p>
      </header>

      {/* Today's Stats */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
        <StatCard label="Activities Today" value={data.total_activities_today} />
        <StatCard label="Deliverables Today" value={data.total_deliverables_today} />
        <StatCard label="Weekly Activities" value={data.weekly_stats.activities} />
        <StatCard label="Weekly Deliverables" value={data.weekly_stats.deliverables} />
      </div>

      {/* Weekly Breakdown */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
        <MiniStat emoji="🔍" label="Research Reports" value={data.weekly_stats.research_reports} />
        <MiniStat emoji="✍️" label="Content Pieces" value={data.weekly_stats.content_pieces} />
        <MiniStat emoji="📩" label="Outreach Sent" value={data.weekly_stats.outreach_sent} />
        <MiniStat emoji="⏱️" label="Hours Active" value={data.weekly_stats.hours_active} />
      </div>

      {/* Sprint Blocks */}
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
        Sprint Blocks
      </h2>

      <div className="space-y-6">
        {data.sprint_blocks.map((block, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <h3 className="font-bold text-[#2D2D2D]">{block.block}</h3>
                <p className="text-sm text-gray-500">{block.date} · {block.start_time}{block.end_time ? ` → ${block.end_time}` : ' → in progress...'}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">{block.activities.length} activities</span>
                {!block.end_time && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Live
                  </span>
                )}
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {block.activities.map((activity) => (
                <div key={activity.id} className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">{typeEmoji[activity.type] || '📋'}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-[#2D2D2D]">{activity.title}</h4>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[activity.type] || 'bg-gray-100 text-gray-700'}`}>
                          {activity.type}
                        </span>
                        {activity.status === 'in_progress' && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">running</span>
                        )}
                        {activity.status === 'failed' && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">failed</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      {activity.deliverables && activity.deliverables.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {activity.deliverables.map((d, j) => (
                            <span key={j} className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-[#E8F5E0] text-[#2D2D2D] font-medium">
                              📄 {d}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="mt-1 flex gap-4 text-xs text-gray-400">
                        <span>{new Date(activity.timestamp).toLocaleTimeString()}</span>
                        {activity.duration_min && <span>{activity.duration_min} min</span>}
                        {activity.model && <span>via {activity.model}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {data.sprint_blocks.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
          <p className="text-gray-400 text-lg">No sprint blocks yet today. Check back after midnight CET.</p>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <p className="text-gray-500 text-xs font-medium mb-1">{label}</p>
      <p className="text-3xl font-bold text-[#2D2D2D]">{value}</p>
    </div>
  )
}

function MiniStat({ emoji, label, value }: { emoji: string; label: string; value: number }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
      <span className="text-xl">{emoji}</span>
      <div>
        <p className="text-xl font-bold text-[#2D2D2D]">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  )
}
