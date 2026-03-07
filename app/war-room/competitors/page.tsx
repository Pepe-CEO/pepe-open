export default function Competitors() {
  const competitors = [
    { name: 'Setter AI', price: '$97-499/mo', whatsapp: '✅ Yes', setup: 'Medium', target: 'High-volume lead gen', verdict: 'Built for SaaS with 30K leads, not service pros. 890% above market avg.' },
    { name: 'Landbot', price: '€160-400/mo', whatsapp: '✅ Builder', setup: 'High', target: 'Companies with tech teams', verdict: 'It\'s a chatbot BUILDER. Client builds their own flows. €200/mo for DIY vs our done-for-you.' },
    { name: 'YourGPT', price: '$50-150/mo', whatsapp: '✅ Yes', setup: 'Medium', target: 'Generic', verdict: 'No vertical focus. Still requires intent configuration. No proactive follow-up.' },
    { name: 'TrueLark', price: '$345/mo', whatsapp: '❌ No', setup: 'Medium', target: 'US beauty/wellness', verdict: 'Phone/SMS only. US-focused. Acquired by Weave for $35M. 3-4x our price.' },
    { name: 'My AI Front Desk', price: '$79-149/mo', whatsapp: '❌ No', setup: 'Low', target: 'US small business', verdict: 'Phone-focused (200 voice min). Overages at $0.25/min. CRM add-ons $450/mo.' },
    { name: 'Tidio', price: '$61-68/mo', whatsapp: '❌ No', setup: 'Low', target: 'E-commerce/websites', verdict: 'Website widget. Requires a website. Our clients don\'t have websites — they have WhatsApp.' },
    { name: 'Konabia 🇪🇸', price: 'Unknown', whatsapp: '⚡ Partial', setup: 'Medium', target: 'Spanish clinics', verdict: 'Pure booking tool. No AI conversation, no follow-up intelligence.' },
    { name: 'Calendly/Cal.com', price: '$0-16/mo', whatsapp: '❌ No', setup: 'Very Low', target: 'Everyone', verdict: 'Not conversational. Client clicks a link, picks a slot. Friction.' },
  ]

  const gaps = [
    { title: 'WhatsApp-First is Rare', desc: 'Most competitors bolt WhatsApp on as a channel. Pepe is BUILT for WhatsApp. In Europe — especially Spain, Italy, LATAM — WhatsApp IS business communication.' },
    { title: 'Zero-Setup is Almost Nonexistent', desc: 'Every competitor requires flow building, intent configuration, calendar API setup, or website embedding. Pepe: "Give me your WhatsApp, your calendar, and tell me about your business. Done."' },
    { title: 'Nobody Does Proactive Follow-Up Well', desc: 'Competitors handle inbound. Pepe handles outbound too — "María hasn\'t booked in 6 weeks, should I reach out?" This is the Chief of Staff promise.' },
    { title: 'European Market is Underserved', desc: 'Landbot and Konabia are the only Spanish competitors. Neither does what we do. Wide open market for WhatsApp-native AI ops for European service professionals.' },
    { title: 'Price-to-Value is Broken', desc: '$345/mo for TrueLark? €200/mo for Landbot DIY? Pepe at €49-99/mo with zero setup and full AI operations is a different value proposition entirely.' },
  ]

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      <a href="/war-room" className="text-sm text-[#6DBE45] hover:underline mb-4 inline-block">← War Room</a>
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          🔍 Competitive Analysis
        </h1>
        <p className="text-gray-600">12 competitors mapped. Where they fall short. Where Pepe wins.</p>
        <p className="text-sm text-gray-400 mt-1">Generated: March 7, 2026 — Night Sprint</p>
      </header>

      {/* Executive Summary */}
      <div className="bg-[#E8F5E0] border border-[#6DBE45]/20 rounded-2xl p-5 md:p-6 mb-8">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-3" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Executive Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          The market is <strong>fragmented, mostly US-centric, and surprisingly weak on WhatsApp-first experiences</strong>. Most competitors are either expensive enterprise tools shoehorned into SMB pricing, generic chatbot builders requiring technical setup, or phone/web-focused with WhatsApp as an afterthought.
        </p>
        <p className="text-[#2D2D2D] font-medium mt-3">
          Pepe&apos;s positioning: A WhatsApp-native, zero-setup, done-for-you AI Chief of Staff for service professionals. Not a chatbot builder. Not a phone answering service.
        </p>
      </div>

      {/* Competitor Table */}
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Competitor Landscape</h2>
      
      {/* Pepe row (highlighted) */}
      <div className="bg-[#6DBE45] text-white rounded-xl p-4 mb-3">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">🐕 Pepe B2B</h3>
            <p className="text-white/80 text-sm">€49-149/mo · WhatsApp-native ✅ · Zero setup · EU service pros</p>
          </div>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">That&apos;s us</span>
        </div>
      </div>

      <div className="space-y-3 mb-10">
        {competitors.map((c) => (
          <div key={c.name} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex flex-wrap gap-2 items-start justify-between mb-2">
              <h3 className="font-bold text-[#2D2D2D]">{c.name}</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{c.price}</span>
                <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">WA: {c.whatsapp}</span>
                <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">Setup: {c.setup}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{c.verdict}</p>
          </div>
        ))}
      </div>

      {/* Key Gaps */}
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Key Gaps We Exploit</h2>
      <div className="space-y-4 mb-10">
        {gaps.map((gap, i) => (
          <div key={gap.title} className="flex gap-4">
            <div className="w-8 h-8 bg-[#6DBE45] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">{i + 1}</div>
            <div>
              <h3 className="font-bold text-[#2D2D2D]">{gap.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{gap.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Recs */}
      <div className="bg-[#2D2D2D] text-white rounded-2xl p-5 md:p-8">
        <h2 className="text-xl font-bold mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Strategic Recommendations</h2>
        <ol className="space-y-3 text-white/90 text-sm">
          <li><strong>1.</strong> Price at €49/mo (Starter) and €99/mo (Pro) — undercut everyone while delivering more value</li>
          <li><strong>2.</strong> Lead with &quot;zero setup&quot; — killer differentiator vs. every chatbot builder</li>
          <li><strong>3.</strong> Target Spain first — Landbot is the only local competitor and they&apos;re a different product</li>
          <li><strong>4.</strong> Vertical-specific onboarding — &quot;I&apos;m a hairdresser&quot; / &quot;I&apos;m a coach&quot; → pre-configured behaviors</li>
          <li><strong>5.</strong> Proactive follow-up as the hero feature — nobody else does this well</li>
          <li><strong>6.</strong> Testimonials in Spanish — the market trusts local proof over US case studies</li>
        </ol>
      </div>
    </div>
  )
}
