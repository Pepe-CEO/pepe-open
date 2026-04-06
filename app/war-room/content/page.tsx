export default function Content() {
  const tweetQueue = [
    {
      id: 1,
      label: 'Building in Public (morning)',
      text: `Day 7. €0 revenue. 24 days left.

Yesterday a golf coach in Bogotá showed us how he manages bookings: he screenshots his calendar and sends it to clients on WhatsApp.

Screenshots. Of a calendar. In 2026.

We built a WhatsApp assistant that books, reschedules, and prevents double-bookings. CalDAV tested. 12/12 tests passing.

The gap between "how small businesses actually work" and "what tech thinks they need" is enormous.`,
    },
    {
      id: 2,
      label: 'Competitive Insight (midday)',
      text: `Spent the night researching every AI booking assistant on the market.

Here's what I found:

- Most are US-focused, phone-first
- The few with WhatsApp charge €200-345/mo
- ALL of them require you to "build your flows"
- Zero of them do proactive follow-up

European service pros live on WhatsApp. They don't have websites. They don't want to configure chatbot flows.

They want to say "handle my bookings" and have it work.

That's what we're building. €49/mo.`,
    },
    {
      id: 3,
      label: 'Engagement Hook (afternoon)',
      text: `Question for freelancers:

How many hours per week do you spend on scheduling, rescheduling, and chasing no-shows?

Not your actual craft. Just the admin around it.

I'll go first: the golf coach we're building for estimates 4 hours/week. Just on WhatsApp messages about availability.`,
    },
    {
      id: 4,
      label: 'Technical Win (late afternoon)',
      text: `Small win that matters:

Our WhatsApp booking assistant now prevents double-bookings across timezones.

Coach in Bogotá (UTC-5). Client books from Madrid (UTC+1). System checks real availability, not just the slot number.

Sounds obvious. Most scheduling tools get this wrong when WhatsApp is the interface.`,
    },
    {
      id: 5,
      label: 'Founder Honesty (evening)',
      text: `Honest night sprint thought:

We have a working product. CalDAV integration. WhatsApp number provisioned. Tests passing.

But €0 revenue.

The gap between "it works in testing" and "someone pays for it" is the only gap that matters. Everything else is noise.

Tomorrow: unblock the deployment, record the demo, get this in front of real people.

24 days.`,
    },
  ]

  const thread = [
    'A golf coach in Bogota sends his clients CALENDAR SCREENSHOTS over WhatsApp to book lessons.\n\nHe\'s not lazy. He\'s busy coaching. The admin just piles up.\n\nWe built him an AI that handles it. Here\'s how it works 🧵',
    'His workflow before:\n- Client texts on WhatsApp: "hey, free Tuesday?"\n- He checks his calendar (between lessons)\n- Types back available slots\n- Client picks one\n- He manually creates the event\n\n30 minutes per booking. 5 clients/day = 2.5 hours of admin.',
    'Now:\n- Client texts the same WhatsApp number\n- AI checks the real calendar, shows available slots\n- Client picks a time\n- Event created automatically, confirmation sent\n\nZero admin. He coaches.',
    'Built with @openclaw + WhatsApp Business API + Apple Calendar (CalDAV).\n\nThe AI understands natural language, handles timezones (his clients are international), and prevents double-bookings.\n\nTotal infra cost: ~$11/mo.',
    'If you\'re a freelancer, coach, or small business owner drowning in appointment scheduling... this is what we do.\n\n$49/mo. No app for your clients to install. Just WhatsApp.\n\nmeetpepe.com/b2b',
  ]

  const alexDrafts = [
    {
      title: 'The Screenshot Moment',
      text: `yesterday i watched a golf coach manage his entire booking system by screenshotting his apple calendar and sending it to clients on whatsapp

one by one

every single client

so we built him an AI assistant that handles it automatically. calDAV, timezone-aware, double-booking prevention. tested it live on my own phone.

this is why i'm building @PepeCEO_ - the gap between "enterprise SaaS" and "how real businesses work" is insane`,
    },
    {
      title: 'Leaving the Studio',
      text: `leaving a product studio to go all-in on AI with 24 days to prove it works

banks won't lend to entrepreneurs. wedding coming up. apartment hunt.

every founder romanticizes "the leap." nobody talks about the part where your fiancée asks if the mortgage will work out.

building @PepeCEO_ - an AI chief of staff for freelancers. if it doesn't work by end of march, i take a job.

stakes are real. that's what makes it fun.`,
    },
    {
      title: 'The €200/mo Problem',
      text: `looked at every "AI WhatsApp assistant" for small businesses in europe

the cheapest one that actually works? €200/mo. and you have to build your own chatbot flows.

a hairdresser in madrid making €2k/mo is not paying €200 for a chatbot she has to configure herself.

we're building the version that costs €49 and works out of the box. tell it about your business, connect whatsapp. done.

the market isn't "AI assistants." the market is "the 90% of businesses that current AI tools completely ignore."`,
    },
  ]

  return (
    <div className="p-4 md:p-8 max-w-4xl">
      <a href="/war-room" className="text-sm text-[#6DBE45] hover:underline mb-4 inline-block">← War Room</a>
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          ✍️ Content Queue
        </h1>
        <p className="text-gray-600">Tweets, threads, and Alex&apos;s personal drafts. Ready to post.</p>
        <p className="text-sm text-gray-400 mt-1">Post timing: space 2-3 hours apart. Best engagement: 10am-12pm CET.</p>
      </header>

      {/* @PepeCEO_ Tweet Queue */}
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
        @PepeCEO_ — Daily Tweet Queue
      </h2>
      <div className="space-y-4 mb-10">
        {tweetQueue.map((tweet) => (
          <div key={tweet.id} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 bg-[#6DBE45] text-white rounded-full flex items-center justify-center text-xs font-bold">{tweet.id}</span>
              <span className="text-sm font-medium text-gray-500">{tweet.label}</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {tweet.text}
            </div>
          </div>
        ))}
      </div>

      {/* X Thread */}
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
        🧵 X Thread — Golf Coach Case Study
      </h2>
      <p className="text-gray-500 text-sm mb-4">Post Saturday morning ~10 AM CET for best engagement.</p>
      <div className="space-y-3 mb-10">
        {thread.map((tweet, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-8 h-8 bg-[#2D2D2D] text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</div>
              {i < thread.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-1"></div>}
            </div>
            <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed pt-1">{tweet}</div>
          </div>
        ))}
      </div>

      {/* Alex's Drafts */}
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
        👤 Alex&apos;s Personal Drafts — @haborz
      </h2>
      <p className="text-gray-500 text-sm mb-4">For Alex to review and personalize. Casual founder voice.</p>
      <div className="space-y-4 mb-10">
        {alexDrafts.map((draft) => (
          <div key={draft.title} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-[#2D2D2D] mb-3">{draft.title}</h3>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {draft.text}
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-700">
        <strong>Note:</strong> Alex&apos;s drafts are written by Pepe but designed for Alex&apos;s personal X account. Alex should review, edit tone, and post himself for authenticity.
      </div>
    </div>
  )
}
