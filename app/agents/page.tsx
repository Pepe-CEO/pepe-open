'use client'
import { useEffect, useState } from 'react'

interface AgentRun {
  id: string
  spawned_at: string
  completed_at?: string
  label: string
  task_summary: string
  model: string
  status: 'running' | 'completed' | 'failed'
  result_summary?: string
  output_path?: string
  duration_min?: number
  parent: string
}

interface AgentsData {
  last_updated: string
  total_spawned: number
  total_completed: number
  total_failed: number
  currently_running: number
  runs: AgentRun[]
}

const statusConfig: Record<string, { color: string; dot: string; label: string }> = {
  running: { color: 'bg-green-100 text-green-700', dot: 'bg-green-500', label: 'Running' },
  completed: { color: 'bg-blue-100 text-blue-700', dot: 'bg-blue-500', label: 'Completed' },
  failed: { color: 'bg-red-100 text-red-700', dot: 'bg-red-500', label: 'Failed' },
}

const modelColors: Record<string, string> = {
  'gemini-2.5-flash': 'bg-cyan-100 text-cyan-700',
  'claude-opus-4.6': 'bg-violet-100 text-violet-700',
  'claude-sonnet-4.5': 'bg-purple-100 text-purple-700',
  'minimax-m2.5': 'bg-amber-100 text-amber-700',
  'kimi-k2.5': 'bg-rose-100 text-rose-700',
  'gpt-4o': 'bg-emerald-100 text-emerald-700',
}

function getModelShort(model: string): string {
  const parts = model.split('/')
  return parts[parts.length - 1]
}

function getModelColor(model: string): string {
  const short = getModelShort(model)
  return modelColors[short] || 'bg-gray-100 text-gray-700'
}

function formatDuration(min?: number): string {
  if (!min) return ''
  if (min < 1) return '<1m'
  if (min < 60) return `${Math.round(min)}m`
  return `${Math.floor(min / 60)}h ${Math.round(min % 60)}m`
}

function timeAgo(date: string): string {
  const now = new Date()
  const then = new Date(date)
  const diffMs = now.getTime() - then.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  if (diffMin < 1) return 'just now'
  if (diffMin < 60) return `${diffMin}m ago`
  const diffHr = Math.floor(diffMin / 60)
  if (diffHr < 24) return `${diffHr}h ago`
  const diffDays = Math.floor(diffHr / 24)
  return `${diffDays}d ago`
}

export default function AgentsDashboard() {
  const [data, setData] = useState<AgentsData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://pepe-ceo.github.io/pepe-shop/api/agents.json')
        setData(await res.json())
      } catch (e) {
        console.error('Failed to fetch agents:', e)
      }
    }
    fetchData()
    const interval = setInterval(fetchData, 15000)
    return () => clearInterval(interval)
  }, [])

  if (!data) return (
    <div className="p-8 max-w-5xl">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded w-1/3 mb-8"></div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[1,2,3,4].map(i => <div key={i} className="h-24 bg-gray-200 rounded-2xl"></div>)}
        </div>
        <div className="space-y-4">
          {[1,2,3].map(i => <div key={i} className="h-32 bg-gray-200 rounded-2xl"></div>)}
        </div>
      </div>
    </div>
  )

  const running = data.runs.filter(r => r.status === 'running')
  const history = data.runs.filter(r => r.status !== 'running')

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          🤖 Agent Swarm
        </h1>
        <p className="text-sm md:text-base text-gray-500">
          Live view of every subagent Pepe spins up. Brain delegates, muscles execute.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Auto-refreshes every 15s · Last updated: {new Date(data.last_updated).toLocaleString()}
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-10">
        <StatCard label="Currently Running" value={data.currently_running} highlight={data.currently_running > 0} />
        <StatCard label="Total Spawned" value={data.total_spawned} />
        <StatCard label="Completed" value={data.total_completed} />
        <StatCard label="Failed" value={data.total_failed} alert={data.total_failed > 0} />
      </div>

      {/* Currently Running */}
      {running.length > 0 && (
        <>
          <h2 className="text-xl font-bold text-[#2D2D2D] mb-4 flex items-center gap-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Live Agents
          </h2>
          <div className="space-y-4 mb-8">
            {running.map(run => (
              <AgentCard key={run.id} run={run} />
            ))}
          </div>
        </>
      )}

      {/* History */}
      <h2 className="text-xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
        Agent History
      </h2>
      <div className="space-y-3">
        {history.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
            <p className="text-gray-400 text-lg">No agent runs yet. They'll show up here when Pepe starts delegating.</p>
          </div>
        ) : (
          history.map(run => (
            <AgentCard key={run.id} run={run} compact />
          ))
        )}
      </div>
    </div>
  )
}

function AgentCard({ run, compact = false }: { run: AgentRun; compact?: boolean }) {
  const status = statusConfig[run.status]
  const modelShort = getModelShort(run.model)

  return (
    <div className={`bg-white border border-gray-200 rounded-2xl overflow-hidden ${run.status === 'running' ? 'ring-2 ring-green-200' : ''}`}>
      <div className={`px-4 md:px-6 ${compact ? 'py-3 md:py-4' : 'py-4 md:py-5'}`}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg">🤖</span>
            <h3 className="font-bold text-[#2D2D2D]">{run.label}</h3>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
              {run.status === 'running' && <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`}></span>}
              {status.label}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getModelColor(run.model)}`}>
              {modelShort}
            </span>
          </div>
          <span className="text-xs text-gray-400 whitespace-nowrap">{timeAgo(run.spawned_at)}</span>
        </div>

        <p className="text-sm text-gray-600 mb-2">{run.task_summary}</p>

        {run.result_summary && (
          <div className="bg-gray-50 rounded-lg p-3 mb-2">
            <p className="text-xs text-gray-500 font-medium mb-1">Result</p>
            <p className="text-sm text-gray-700">{run.result_summary}</p>
          </div>
        )}

        {run.output_path && (
          <div className="flex items-center gap-1 mb-1">
            <span className="text-xs">📄</span>
            <span className="text-xs text-gray-500 font-mono">{run.output_path}</span>
          </div>
        )}

        <div className="flex gap-4 text-xs text-gray-400 mt-2">
          <span>Spawned: {new Date(run.spawned_at).toLocaleString()}</span>
          {run.completed_at && <span>Finished: {new Date(run.completed_at).toLocaleString()}</span>}
          {run.duration_min !== undefined && <span>Duration: {formatDuration(run.duration_min)}</span>}
          <span>Parent: {run.parent}</span>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, highlight, alert }: { label: string; value: number; highlight?: boolean; alert?: boolean }) {
  return (
    <div className={`bg-white border rounded-2xl p-4 md:p-5 ${highlight ? 'border-green-300 ring-2 ring-green-100' : alert ? 'border-red-200' : 'border-gray-200'}`}>
      <p className="text-gray-500 text-xs font-medium mb-1">{label}</p>
      <p className={`text-2xl md:text-3xl font-bold ${alert ? 'text-red-600' : highlight ? 'text-green-600' : 'text-[#2D2D2D]'}`}>{value}</p>
    </div>
  )
}
