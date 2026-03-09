'use client'

import { useState } from 'react'

interface Section {
  id: string
  title: string
  icon: string
  blocks: Block[]
}

type Block =
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'li'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }

function B({ children }: { children: string }) {
  return <strong className="text-[#2D2D2D]">{children}</strong>
}

function Li({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <li className="my-1 text-gray-700 text-sm">
      {parts.map((p, i) => i % 2 === 1 ? <strong key={i} className="text-[#2D2D2D]">{p}</strong> : p)}
    </li>
  )
}

function P({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <p className="my-2 text-gray-700 text-sm">
      {parts.map((p, i) => i % 2 === 1 ? <strong key={i} className="text-[#2D2D2D]">{p}</strong> : p)}
    </p>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="bg-gray-50 px-3 py-2 text-left font-semibold border-b border-gray-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => {
                const parts = cell.split(/\*\*(.+?)\*\*/g)
                return (
                  <td key={j} className="px-3 py-2 border-t border-gray-100">
                    {parts.map((p, k) => k % 2 === 1 ? <strong key={k}>{p}</strong> : p)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const sections: Section[] = [
  {
    id: 'polsia',
    title: '1. Polsia Deep Dive',
    icon: '🔍',
    blocks: [
      { type: 'h3', text: 'Cold Email System' },
      { type: 'li', text: '**Lead Generation**: Generates lead lists using integrated software, verifies emails through paid databases' },
      { type: 'li', text: '**Email Personalization**: Crafts personalized emails based on firmographic/technographic targeting' },
      { type: 'li', text: '**Autonomous Execution**: Handles entire outreach 24/7. ~$10 for 10 emails' },
      { type: 'li', text: '**Tools**: Leverages capabilities similar to Million Verifier, Apollo, Clay, Instantly.ai, Smartlead' },
      { type: 'li', text: '**Cadence**: 14-day warming ramps, multi-domain rotation for deliverability' },
      { type: 'h3', text: 'Meta Ads Strategy' },
      { type: 'li', text: '**Creatives**: Static images, short video (6-15s), carousels, Stories, Reels, UGC' },
      { type: 'li', text: '**Targeting**: Audience segmentation by funnel stage + audience-creative matrix testing' },
      { type: 'li', text: '**Budget**: Dynamic Creative Optimization tests multiple elements, shifts spend to winners after 50+ conversions' },
      { type: 'h3', text: 'Revenue Model' },
      { type: 'li', text: '**$50/month** subscription (up from $29)' },
      { type: 'li', text: '**20% revenue share** on customer revenue generated through platform' },
      { type: 'li', text: '**$1M+ ARR** within ~10 weeks, 700+ companies running' },
      { type: 'h3', text: 'User Sentiment' },
      { type: 'p', text: 'Trust scores: 71-72/100 (medium). Very new (Jan 2026), low traffic. No scam evidence but limited public commentary.' },
    ]
  },
  {
    id: 'cold-email',
    title: '2. Cold Email for B2B SaaS',
    icon: '📧',
    blocks: [
      { type: 'h3', text: 'Best Tools in 2026' },
      { type: 'table', headers: ['Tool', 'Best For', 'Annual Price', 'Key Feature'], rows: [
        ['**Instantly**', 'SMBs scaling fast', '~$360/yr', 'Unlimited inboxes, 450M+ contacts'],
        ['**Smartlead**', 'High volume', '~$390/yr', 'Unlimited seats, 300M+ profiles'],
        ['**Lemlist**', 'Personalization', '~$662/yr', 'Multichannel (email+LinkedIn+SMS)'],
        ['**Saleshandy**', 'Budget', '~$300/yr', 'Unlimited accounts, AI outreach'],
        ['**Woodpecker**', 'Safety features', '~$240/yr', 'Free warm-up, multichannel'],
        ['**Mailforge Stack**', 'Lowest cost', '<$50/mo', 'Easy DNS setup, AI campaigns'],
      ]},
      { type: 'h3', text: 'Domain Warming (3-4 weeks)' },
      { type: 'li', text: '**Days 1-7**: 5-10 plain-text emails/day to engaged contacts' },
      { type: 'li', text: '**Weeks 2-4**: Increase volume 10-15% every 2-3 days' },
      { type: 'li', text: '**Monitor**: Bounce rate <2-3%, spam complaints <0.1%' },
      { type: 'li', text: '**Must have**: SPF, DKIM, DMARC configured. Separate outreach domain.' },
      { type: 'h3', text: 'Reply Rates' },
      { type: 'li', text: '**Small business owners**: ~7.5% average (higher than general B2B 4-5%)' },
      { type: 'li', text: '**Positive replies** (showing interest): 0.5-2%' },
      { type: 'h3', text: 'Legal' },
      { type: 'li', text: '**CAN-SPAM (US)**: Unsolicited OK if rules followed. $43,792/email penalty.' },
      { type: 'li', text: '**GDPR (EU)**: Explicit consent required. Up to 4% global turnover or €20M fine.' },
      { type: 'h3', text: 'Email Copy Frameworks' },
      { type: 'li', text: '**PAS** (Problem-Agitate-Solution): Identify pain, amplify, present solution' },
      { type: 'li', text: '**BAB** (Before-After-Bridge): Current struggle, success picture, your service' },
      { type: 'li', text: '**Quick Question**: Low-effort ask to spark curiosity' },
      { type: 'h3', text: 'Prospect Lists by Niche' },
      { type: 'li', text: '**Hairdressers**: Scrap.io, segment by location/specialization/size' },
      { type: 'li', text: '**Coaches**: LinkedIn-style segmentation, specialization targeting' },
      { type: 'li', text: '**Lawyers**: Practice area, firm size, bar association ties' },
      { type: 'h3', text: 'Cost Breakdown' },
      { type: 'table', headers: ['Item', 'Cost'], rows: [
        ['Platform (Instantly/Smartlead)', '$30-40/mo'],
        ['Domains (10-20 .com)', '$69-274/mo'],
        ['Google Workspace inboxes (50)', '$350-420/mo'],
        ['Warm-up tools', '$300-580/mo'],
        ['Email verification', '$50-100/mo'],
        ['List building', '$0.15-2.50/lead'],
        ['**Total minimum viable**', '**$200-500/mo**'],
      ]},
    ]
  },
  {
    id: 'meta-ads',
    title: '3. Meta Ads',
    icon: '📱',
    blocks: [
      { type: 'h3', text: 'Best Ad Formats' },
      { type: 'li', text: '**Lead Gen Ads**: Capture info within Meta, minimize drop-off. Best for gated content, free trials.' },
      { type: 'li', text: '**Video Ads**: 15-30s, great for demos showing ROI. Top/mid funnel.' },
      { type: 'h3', text: 'Targeting for Our Niches' },
      { type: 'table', headers: ['Method', 'Examples'], rows: [
        ['**Job Titles**', '"hairdresser", "hairstylist", "life coach", "attorney"'],
        ['**Interests**', '"cosmetology", "legal services", "business coaching"'],
        ['**Behaviors**', '"small business owners", "business page admins"'],
        ['**Combo**', '"lawyer" + "business page admins" = better CTR, lower CPL'],
      ]},
      { type: 'h3', text: 'Benchmarks' },
      { type: 'table', headers: ['Metric', 'Range'], rows: [
        ['**CPL (general)**', '$27-42'],
        ['**CPL (local services)**', '$30-50'],
        ['**CPL (B2B SaaS)**', '$40-65'],
        ['**CPL (lead forms)**', '~$34'],
        ['**CPL (retargeting)**', '~$33'],
        ['**CPC (B2B/local)**', '$0.66-2.52'],
      ]},
      { type: 'h3', text: 'Creative Best Practices' },
      { type: 'li', text: '**Video**: Vertical 9:16 for Reels/Stories. Square for feeds.' },
      { type: 'li', text: '**UGC**: Lo-fi native look works great for awareness' },
      { type: 'li', text: '**Polished**: Clear CTAs, high production, better for conversions' },
      { type: 'li', text: '**Testing**: 5-10 new variations weekly, refresh every 30-60 days' },
      { type: 'h3', text: 'Minimum Viable Budget' },
      { type: 'li', text: '**Testing**: $30-50/day per campaign (~$900-1,500/mo)' },
      { type: 'li', text: '**Allocation**: 60-70% prospecting, 20-30% retargeting, 10-20% scaling' },
      { type: 'li', text: '**Target**: ROAS >3x before scaling' },
    ]
  },
  {
    id: 'channels',
    title: '4. Other Channels',
    icon: '🌐',
    blocks: [
      { type: 'h3', text: 'LinkedIn Outreach' },
      { type: 'li', text: '**Reply rates**: 30-50% (much higher than email)' },
      { type: 'li', text: '**Approach**: Multi-touch sequences (connect, value post, DM)' },
      { type: 'li', text: '**Best for**: Coaches, consultants, lawyers (professional audience)' },
      { type: 'h3', text: 'WhatsApp Business API' },
      { type: 'li', text: '**Open rates**: Up to 98% (vs 20-30% email)' },
      { type: 'li', text: '**Best for**: Hairdressers and local service businesses already on WhatsApp' },
      { type: 'li', text: '**Strategy**: Opt-in first, then automated follow-ups and booking reminders' },
      { type: 'h3', text: 'Google Ads' },
      { type: 'li', text: '**ROAS**: 5x-7x for B2B SaaS targeting small businesses' },
      { type: 'li', text: '**Budget**: $500-1,000/mo minimum for meaningful data' },
      { type: 'li', text: '**Advantage**: Captures active demand (people searching for solutions)' },
      { type: 'h3', text: 'Content Marketing / SEO' },
      { type: 'li', text: '**Timeline**: 3-6 months for initial results, 7-9 months for break-even' },
      { type: 'li', text: '**ROI**: 700-1100% over 2-3 years. Long game.' },
      { type: 'h3', text: 'Partnerships' },
      { type: 'li', text: 'Integrate with booking software (Fresha, Calendly, Acuity)' },
      { type: 'li', text: 'Referral deals with industry consultants' },
      { type: 'li', text: '**Highest leverage**: One partnership can unlock entire customer base' },
      { type: 'h3', text: 'Referral Programs' },
      { type: 'li', text: '**Conversion**: 10-20% from referrals, 30-50% lower CAC' },
      { type: 'li', text: '**Key**: Double-sided incentives, make it dead simple to share' },
    ]
  },
  {
    id: 'competitors',
    title: '5. Competitors',
    icon: '⚔️',
    blocks: [
      { type: 'h3', text: 'Pricing Comparison' },
      { type: 'table', headers: ['Competitor', 'Price', 'Model', 'Target'], rows: [
        ['**GoHighLevel**', '$97/mo', 'Flat, unlimited contacts', 'Agencies + SMBs'],
        ['**Keap**', '$297/mo', 'Per user + per contact', 'SMBs, longer sales cycle'],
        ['**ServiceTitan**', '~$125/tech/mo', 'Per technician', 'Field services'],
        ['**Jobber**', '$29/mo', 'Per user, tiered', 'Home services'],
        ['**Vendasta**', 'Custom', 'White-label for agencies', 'Agencies/MSPs'],
        ['**Pepe B2B**', '$49/mo', 'Flat + setup', 'Freelancers, micro-biz'],
      ]},
      { type: 'h3', text: 'Key Insights' },
      { type: 'li', text: '**GoHighLevel** is the closest AI-native competitor (AI sales agent "Eliza")' },
      { type: 'li', text: '**Our gap**: Nobody doing WhatsApp-native AI Chief of Staff for micro-businesses (1-5 employees)' },
      { type: 'li', text: '**Price advantage**: $49/mo vs $97-297/mo competitors' },
      { type: 'li', text: '**Differentiation**: WhatsApp-first (where small biz owners live), not another dashboard' },
      { type: 'h3', text: 'What Works in This Market' },
      { type: 'li', text: '1. **Community-led growth** (Facebook groups, YouTube)' },
      { type: 'li', text: '2. **Affiliate/referral programs** (industry peers recommending)' },
      { type: 'li', text: '3. **Content marketing** (educational content about automation)' },
      { type: 'li', text: '4. **Direct outreach** (cold email + LinkedIn)' },
      { type: 'li', text: '5. **Partnerships** (integration with existing tools)' },
    ]
  },
]

export default function PolsiaResearch() {
  const [activeSection, setActiveSection] = useState('polsia')

  return (
    <div className="p-4 md:p-8 max-w-6xl">
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          📊 Growth Research
        </h1>
        <p className="text-sm md:text-base text-gray-500">
          Cold email, Meta ads, outreach channels, and competitor analysis for Pepe B2B.
        </p>
        <p className="text-xs text-gray-400 mt-1">Researched March 8, 2026 by Gemini 2.5 Flash agents</p>
      </header>

      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeSection === s.id
                ? 'bg-[#2D2D2D] text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'
            }`}
          >
            {s.icon} {s.title.replace(/^\d+\.\s*/, '')}
          </button>
        ))}
      </div>

      {sections.map(s => (
        <div key={s.id} className={activeSection === s.id ? 'block' : 'hidden'}>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
              {s.icon} {s.title}
            </h2>
            <div>
              {s.blocks.map((block, i) => {
                if (block.type === 'h3') return <h3 key={i} className="text-lg font-bold text-[#2D2D2D] mt-6 mb-3">{block.text}</h3>
                if (block.type === 'p') return <P key={i} text={block.text} />
                if (block.type === 'li') return <ul key={i} className="list-disc pl-5"><Li text={block.text} /></ul>
                if (block.type === 'table') return <Table key={i} headers={block.headers} rows={block.rows} />
                return null
              })}
            </div>
          </div>
        </div>
      ))}

      <div className="mt-8 bg-[#E8F5E0] border border-[#6DBE45]/30 rounded-2xl p-5 md:p-8">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-3" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          🎯 TL;DR for Pepe B2B
        </h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p><strong className="text-[#2D2D2D]">Cold email:</strong> Viable but needs $200-500/mo setup (domains, tools, warming). 7.5% reply rate for small businesses.</p>
          <p><strong className="text-[#2D2D2D]">Meta ads:</strong> Fastest to test. $30-50/day minimum. CPL $30-65 for our audience.</p>
          <p><strong className="text-[#2D2D2D]">LinkedIn:</strong> 30-50% reply rates. Best for coaches and lawyers.</p>
          <p><strong className="text-[#2D2D2D]">WhatsApp:</strong> 98% open rates. Perfect fit since our product IS WhatsApp-native.</p>
          <p><strong className="text-[#2D2D2D]">Our edge:</strong> $49/mo vs $97-297 competitors. WhatsApp-first. Nobody else doing AI Chief of Staff for micro-businesses.</p>
          <p><strong className="text-[#2D2D2D]">Priority:</strong> Ship MVP first. Then: WhatsApp outreach, Meta ads, cold email, LinkedIn, Google Ads, SEO (long game).</p>
        </div>
      </div>
    </div>
  )
}
