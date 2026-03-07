export default function WarRoom() {
  const sections = [
    {
      href: '/war-room/one-pager',
      title: '📄 Sales One-Pager',
      desc: 'Prospect-facing 2-minute pitch document. Pricing, positioning, competitor comparison.',
      status: 'Ready to send',
    },
    {
      href: '/war-room/competitors',
      title: '🔍 Competitive Analysis',
      desc: '12 competitors mapped. Pricing, strengths, weaknesses, and where Pepe wins.',
      status: 'Complete',
    },
    {
      href: '/war-room/leads',
      title: '🎯 B2B Lead List',
      desc: '7 qualified leads with outreach drafts. Warm leads, ecosystem leads, and ICP cold leads.',
      status: 'Ready for outreach',
    },
    {
      href: '/war-room/outreach',
      title: '📩 Outreach Templates',
      desc: '3 segment templates (hair/coach/lawyer) in ES+EN. Personalization hooks per Tier 1 prospect.',
      status: 'Ready to send',
    },
    {
      href: '/war-room/demo-script',
      title: '🎬 Demo Video Script',
      desc: '3-minute Loom script. What to show, what to say, timing. Record in 5 minutes.',
      status: 'Waiting on recording',
    },
    {
      href: '/war-room/content',
      title: '✍️ Content Queue',
      desc: 'Tweet queue, X thread draft, and Alex\'s personal tweet drafts. Ready to post.',
      status: 'Ready to post',
    },
  ]

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      <header className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          🐕 War Room
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Everything Pepe built overnight. All in one place. No files, just URLs.
        </p>
        <p className="text-sm text-gray-400 mt-2">Last updated: March 7, 2026 — Night Sprint + Sales Block</p>
      </header>

      {/* Status Banner */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">⏰</span>
          <h2 className="text-xl font-bold text-red-800" style={{fontFamily: 'Fraunces, Georgia, serif'}}>24 Days Remaining · €0 Revenue</h2>
        </div>
        <p className="text-red-700 text-sm">Target: 10 paying clients by March 31. Everything below is built to close that gap.</p>
      </div>

      {/* Section Grid */}
      <div className="grid gap-4 md:gap-6">
        {sections.map((section) => (
          <a
            key={section.href}
            href={section.href}
            className="block bg-white border border-gray-200 rounded-2xl p-5 md:p-6 hover:border-[#6DBE45] hover:shadow-sm transition group"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#2D2D2D] group-hover:text-[#6DBE45] transition" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
                  {section.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{section.desc}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E8F5E0] text-[#2D2D2D] flex-shrink-0 ml-4">
                {section.status}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-10 bg-[#E8F5E0] border border-[#6DBE45]/20 rounded-2xl p-5 md:p-8">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          🎯 Alex&apos;s Next Actions
        </h2>
        <ul className="space-y-3 text-[#2D2D2D]">
          <li className="flex items-start gap-2">
            <span className="text-lg">1.</span>
            <div>
              <strong>Record the demo video</strong> — Script is ready. Open Loom, follow the script, 3 minutes max. This unblocks Felix/ClawMart AND outreach.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">2.</span>
            <div>
              <strong>Railway: hit Redeploy</strong> — One click in the Railway dashboard. Config is fixed. I&apos;ll test hooks the moment it&apos;s up.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">3.</span>
            <div>
              <strong>Review outreach templates</strong> — 5 Tier 1 prospects ready to contact. Templates in ES+EN. You send, I draft the follow-ups.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">4.</span>
            <div>
              <strong>Check Stripe verification</strong> — dashboard.stripe.com/account/status
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
