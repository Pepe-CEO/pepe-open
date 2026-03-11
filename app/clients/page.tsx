'use client'
import { useState, useEffect } from 'react'

interface Client {
  name: string
  config: string
  status: 'live' | 'setup' | 'call-scheduled' | 'pending'
  statusLabel: string
  bot?: string
  model?: string
  channel: string
  notes: string
  nextAction?: string
}

const clients: Client[] = [
  {
    name: 'Ninie & Gaspard (GANI)',
    config: 'Pepe v01',
    status: 'live',
    statusLabel: '✅ Live',
    bot: '@pepe_ninie_bot',
    model: 'Sonnet 4.5',
    channel: 'Telegram (group)',
    notes: 'Family setup. Running on Railway. Device pairing issue being debugged.',
  },
  {
    name: 'Golf Coach (Simon)',
    config: 'Custom',
    status: 'setup',
    statusLabel: '🔧 Demo Tonight',
    channel: 'WhatsApp (Kapso)',
    notes: 'Demo with Simon\'s golf coach tonight. WhatsApp via Kapso bridge. Custom build, no standard version.',
    nextAction: 'Run demo tonight',
  },
  {
    name: 'Jon (Cursor community)',
    config: 'Config 1',
    status: 'setup',
    statusLabel: '🔧 Setup Tomorrow',
    model: 'Sonnet 4.5',
    channel: 'Telegram (group)',
    notes: 'Beta tester from Cursor group. Had intro call already. Telegram bot needs to be created.',
    nextAction: 'Create Telegram bot, prep workspace files, setup call tomorrow',
  },
  {
    name: 'Juan (Cursor community)',
    config: 'Config 1',
    status: 'call-scheduled',
    statusLabel: '📞 Call Tomorrow',
    model: 'Sonnet 4.5',
    channel: 'Telegram',
    notes: 'Beta tester from Cursor group. Call scheduled for tomorrow. Need to send pre-call questions.',
    nextAction: 'Send pre-call questions: background, what to delegate day-to-day, Telegram account',
  },
  {
    name: 'Elena (Cursor community)',
    config: 'Config 1',
    status: 'call-scheduled',
    statusLabel: '📞 Call Friday',
    model: 'Sonnet 4.5',
    channel: 'Telegram',
    notes: 'Beta tester from Cursor group. Call scheduled for Friday. Same flow as Juan.',
    nextAction: 'Send pre-call questions before Friday',
  },
  {
    name: 'Tanguy (Friend)',
    config: 'Config 1+',
    status: 'call-scheduled',
    statusLabel: '📞 Call Friday',
    model: 'Sonnet 4.5',
    channel: 'Telegram',
    notes: 'Friend of Alex. Will be a bit more custom than standard Config 1. Call Friday.',
    nextAction: 'Prep for more custom setup based on call',
  },
  {
    name: 'Gui (Friend)',
    config: 'Config 1+',
    status: 'call-scheduled',
    statusLabel: '📞 TBD',
    model: 'Sonnet 4.5',
    channel: 'Telegram',
    notes: 'Friend of Alex. Same approach as Tanguy, more custom.',
    nextAction: 'Schedule call',
  },
  {
    name: 'Miguel (Friend)',
    config: 'Custom',
    status: 'pending',
    statusLabel: '⏳ Pending',
    channel: 'WhatsApp / Telegram',
    notes: 'Hairdresser. Friend of Alex. Should be more custom like Golf Coach setup. Needs onboarding.',
    nextAction: 'Schedule intro call, scope custom needs',
  },
]

const pending = [
  { name: 'Leandro', source: 'Cursor community', notes: '' },
  { name: 'Antonio', source: 'Cursor community', notes: '' },
  { name: 'Friend of Jon', source: 'Referral (Jon)', notes: '' },
]

const statusColors: Record<string, string> = {
  'live': 'bg-green-100 text-green-800 border-green-200',
  'setup': 'bg-blue-100 text-blue-800 border-blue-200',
  'call-scheduled': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'pending': 'bg-gray-100 text-gray-600 border-gray-200',
}

export default function ClientDashboard() {
  const [authed, setAuthed] = useState(false)
  const [checking, setChecking] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('wg_auth')
    if (token === 'authenticated') {
      setAuthed(true)
    }
    setChecking(false)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'alex@houdz.com' && password === 'Pepe2026!') {
      localStorage.setItem('wg_auth', 'authenticated')
      setAuthed(true)
      setError('')
    } else {
      setError('Wrong credentials')
    }
  }

  if (checking) return <div className="p-8">Loading...</div>

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <span className="text-4xl">🔒</span>
            <h1 className="text-xl font-bold mt-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>White Glove Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Internal access only</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DBE45]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6DBE45]"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#6DBE45] text-white font-medium py-2 rounded-lg hover:bg-[#5DA83A] transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    )
  }

  const liveCount = clients.filter(c => c.status === 'live').length
  const setupCount = clients.filter(c => c.status === 'setup').length
  const callCount = clients.filter(c => c.status === 'call-scheduled').length

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
              🤝 White Glove Dashboard
            </h1>
            <p className="text-gray-500 mt-1">Pepe AI Assistant — Beta Program</p>
          </div>
          <button
            onClick={() => { localStorage.removeItem('wg_auth'); setAuthed(false) }}
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            Log out
          </button>
        </div>
      </header>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-600">{liveCount}</p>
          <p className="text-xs text-gray-500 mt-1">Live</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">{setupCount}</p>
          <p className="text-xs text-gray-500 mt-1">Setting Up</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">{callCount}</p>
          <p className="text-xs text-gray-500 mt-1">Calls Scheduled</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-gray-600">{pending.length}</p>
          <p className="text-xs text-gray-500 mt-1">Waiting List</p>
        </div>
      </div>

      {/* Configs legend */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-8">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Configurations</h3>
        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
          <span><strong>Config 1:</strong> Telegram group + Sonnet 4.5 + Pepe v01 template</span>
          <span><strong>Config 1+:</strong> Config 1 with custom workflows</span>
          <span><strong>Custom:</strong> Non-standard (WhatsApp/Kapso, custom integrations)</span>
        </div>
      </div>

      {/* Active clients */}
      <h2 className="text-lg font-bold mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Active Clients</h2>
      <div className="space-y-3 mb-10">
        {clients.map((client, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 md:p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-[#2D2D2D]">{client.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[client.status]}`}>
                  {client.statusLabel}
                </span>
              </div>
              <span className="text-xs text-gray-400">{client.config}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
              <div>
                <span className="text-gray-400 text-xs">Channel:</span> {client.channel}
              </div>
              {client.model && (
                <div>
                  <span className="text-gray-400 text-xs">Model:</span> {client.model}
                </div>
              )}
              {client.bot && (
                <div>
                  <span className="text-gray-400 text-xs">Bot:</span> {client.bot}
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-2">{client.notes}</p>
            {client.nextAction && (
              <div className="mt-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-sm text-blue-700">
                ⚡ {client.nextAction}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pending */}
      <h2 className="text-lg font-bold mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Waiting List</h2>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-10">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Name</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Source</th>
              <th className="text-left px-4 py-2 font-medium text-gray-600">Notes</th>
            </tr>
          </thead>
          <tbody>
            {pending.map((p, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3 text-gray-500">{p.source}</td>
                <td className="px-4 py-3 text-gray-400">{p.notes || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 text-center mt-12">
        Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} · Pepe White Glove Beta
      </p>
    </div>
  )
}
