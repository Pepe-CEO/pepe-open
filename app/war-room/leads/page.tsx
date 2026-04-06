export default function Leads() {
  const warmLeads = [
    {
      name: 'Diego (Golf Coach)',
      location: 'Bogotá, Colombia',
      pain: 'Sends calendar SCREENSHOTS via WhatsApp to clients',
      status: 'MVP being built. CalDAV working, WhatsApp number provisioned.',
      next: 'Get end-to-end demo working, close as first paying client',
      revenue: '$49-99/mo',
      tier: 'hot',
    },
    {
      name: 'Felix @ Masinov / ClawMart',
      location: 'Remote',
      pain: 'Looking for quality skills to list on ClawMart marketplace',
      status: 'Approved our revised SKILL.md, waiting on demo video',
      next: 'Demo video unblocks distribution through ClawMart',
      revenue: 'Distribution channel (marketplace listing)',
      tier: 'warm',
    },
  ]

  const ecosystemLeads = [
    {
      name: '@AiMe_AKA_Amy',
      signal: '"Ran business autonomously for 24 hours" - trading algo, newsletter, blog posts, bug fixes',
      angle: 'Cross-promotion. Amy\'s audience sees AI agents as real. Pepe B2B is the SMB version.',
      draft: 'Saw your 24-hour autonomy run. Impressive. We\'re building similar for small businesses (scheduling, follow-ups via WhatsApp). Different ICP, same vision. Want to cross-promote?',
    },
    {
      name: 'Ryan Carson (@ryancarson)',
      signal: '"$1m/yr business (easy) - charge $100k to get a company setup with OpenClaw" (18 RTs)',
      angle: 'He\'s evangelizing OpenClaw for business. Pepe B2B is a concrete, packaged version. Could be a referral source.',
      draft: 'You nailed it. We\'re doing exactly this but packaged for SMBs at $49/mo. WhatsApp + Calendar + AI. Already live on ClawMart. Would love your take.',
    },
    {
      name: '@juncpa_ (Korean blogger)',
      signal: 'Writing about B2A (Business-to-Agent) economy, OpenClaw ecosystem analysis (141 impressions)',
      angle: 'Content partner. Could feature Pepe B2B as a B2A case study.',
      draft: 'Your B2A analysis is spot on. Pepe is a live example — AI chief of staff selling services to small businesses via WhatsApp. Happy to share our numbers.',
    },
  ]

  const coldLeads = [
    { name: '@this_is_Ian__', signal: '"I hate texting / boring business inquiries eat 4h of my day" (16 RTs)', status: 'Need to locate original tweet and reply' },
    { name: 'Pehla AI', signal: 'WhatsApp agent for small business (competitor)', status: 'Study positioning, pricing, customer complaints' },
  ]

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      <a href="/war-room" className="text-sm text-[#6DBE45] hover:underline mb-4 inline-block">← War Room</a>
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          🎯 B2B Lead List
        </h1>
        <p className="text-gray-600">7 qualified leads. Warm, ecosystem, and cold. Updated March 7, 2026.</p>
      </header>

      {/* Priority Order */}
      <div className="bg-[#E8F5E0] border border-[#6DBE45]/20 rounded-2xl p-5 mb-8">
        <h2 className="text-lg font-bold text-[#2D2D2D] mb-3" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Outreach Priority</h2>
        <ol className="space-y-2 text-sm">
          <li className="flex items-center gap-2"><span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span> Diego (golf coach) — closest to revenue</li>
          <li className="flex items-center gap-2"><span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span> Ryan Carson — highest leverage (influence)</li>
          <li className="flex items-center gap-2"><span className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span> @AiMe_AKA_Amy — ecosystem cross-promotion</li>
          <li className="flex items-center gap-2"><span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span> Felix — demo video dependency (Alex&apos;s task)</li>
          <li className="flex items-center gap-2"><span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span> @this_is_Ian__ — direct ICP pain signal</li>
        </ol>
      </div>

      {/* Warm Leads */}
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>🔥 Warm Leads</h2>
      <div className="space-y-4 mb-10">
        {warmLeads.map((lead) => (
          <div key={lead.name} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-[#2D2D2D]">{lead.name}</h3>
              <div className="flex gap-2">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${lead.tier === 'hot' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {lead.tier === 'hot' ? '🔴 Hot' : '🟡 Warm'}
                </span>
                <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{lead.revenue}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-2">📍 {lead.location}</p>
            <div className="space-y-2 text-sm">
              <p><strong className="text-[#2D2D2D]">Pain:</strong> <span className="text-gray-600">{lead.pain}</span></p>
              <p><strong className="text-[#2D2D2D]">Status:</strong> <span className="text-gray-600">{lead.status}</span></p>
              <p><strong className="text-[#2D2D2D]">Next:</strong> <span className="text-[#6DBE45] font-medium">{lead.next}</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* Ecosystem Leads */}
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>🌐 Ecosystem Leads</h2>
      <div className="space-y-4 mb-10">
        {ecosystemLeads.map((lead) => (
          <div key={lead.name} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-lg text-[#2D2D2D] mb-3">{lead.name}</h3>
            <div className="space-y-2 text-sm">
              <p><strong className="text-[#2D2D2D]">Signal:</strong> <span className="text-gray-600">{lead.signal}</span></p>
              <p><strong className="text-[#2D2D2D]">Angle:</strong> <span className="text-gray-600">{lead.angle}</span></p>
              <div className="bg-gray-50 rounded-lg p-3 mt-2">
                <p className="text-xs text-gray-500 mb-1 font-medium">Draft outreach:</p>
                <p className="text-gray-700 text-sm italic">&quot;{lead.draft}&quot;</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cold Leads */}
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>❄️ Cold Leads (To Research)</h2>
      <div className="space-y-3 mb-10">
        {coldLeads.map((lead) => (
          <div key={lead.name} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3">
            <span className="text-lg">🔎</span>
            <div>
              <h3 className="font-bold text-[#2D2D2D]">{lead.name}</h3>
              <p className="text-gray-600 text-sm">{lead.signal}</p>
              <p className="text-gray-400 text-xs mt-1">{lead.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Where to find more */}
      <div className="bg-gray-50 rounded-2xl p-5">
        <h3 className="font-bold text-[#2D2D2D] mb-2">Where to Find More Leads</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {['LinkedIn (no access yet)', 'Reddit r/smallbusiness', 'Reddit r/freelance', 'Facebook groups for hairdressers', 'WhatsApp Business community forums', 'X search for scheduling complaints'].map((ch) => (
            <span key={ch} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600">{ch}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
