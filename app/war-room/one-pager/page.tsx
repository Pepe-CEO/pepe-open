export default function OnePager() {
  return (
    <div className="p-4 md:p-8 max-w-4xl">
      <a href="/war-room" className="text-sm text-[#6DBE45] hover:underline mb-4 inline-block">← War Room</a>
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          Pepe B2B — Your AI Chief of Staff on WhatsApp
        </h1>
        <p className="text-gray-500 text-sm">Sales one-pager · Ready to send to prospects</p>
      </header>

      {/* Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>The Problem</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You&apos;re a service professional. Hairdresser, coach, lawyer, trainer, photographer. You got into this business because you&apos;re great at what you do.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          But right now, you spend 2-3 hours a day doing something else entirely: answering WhatsApp messages, confirming appointments, chasing no-shows, following up with clients who went quiet.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          And the messages you miss? Those are bookings that went to someone else.
        </p>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
          <p className="text-red-800 font-medium">
            A client messages at 2pm. You&apos;re with someone. By 6pm, they&apos;ve booked your competitor.
          </p>
          <p className="text-red-700 text-sm mt-1">This happens every single day.</p>
        </div>
      </section>

      {/* Solution */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>The Solution</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pepe is an AI assistant that lives on your WhatsApp and manages your client communication. Not a chatbot. Not a booking link. A real conversational assistant that sounds like you.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Your clients message. Pepe responds instantly, checks your calendar, and books the appointment. They think they&apos;re talking to you or your receptionist.
        </p>
      </section>

      {/* What Pepe Handles */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>What Pepe Handles</h2>
        <div className="grid gap-4">
          {[
            { icon: '💬', title: 'Instant replies, 24/7', desc: 'A prospect messages at midnight? Pepe responds, qualifies them, and offers available slots. You wake up to a full schedule.' },
            { icon: '📅', title: 'Automatic booking', desc: 'Pepe reads your Google Calendar, finds open times, proposes them naturally in conversation, and creates the event. No links. No forms. Just "How about Thursday at 4?" Done.' },
            { icon: '🔔', title: 'Smart reminders', desc: '24 hours and 1 hour before every appointment. Reduces no-shows by up to 40%.' },
            { icon: '🔄', title: 'No-show recovery', desc: 'Missed appointment? Pepe reaches out to reschedule. Most no-shows are just people who forgot, not people who left.' },
            { icon: '📊', title: 'Proactive follow-up', desc: 'Client hasn\'t booked in 4 weeks? Pepe sends a friendly check-in. You set the rhythm per client.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-[#2D2D2D]">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { step: '1', text: 'We connect your WhatsApp Business + Google Calendar (48h setup)' },
            { step: '2', text: 'You tell us your services, pricing, availability, and how you talk' },
            { step: '3', text: 'Pepe starts handling messages. You get a daily summary.' },
            { step: '4', text: 'You show up and do what you\'re great at.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#E8F5E0] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#6DBE45] mb-2">{item.step}</div>
              <p className="text-sm text-[#2D2D2D]">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-4 italic">Zero technical setup on your end. No apps to learn. No flows to build. Just WhatsApp, the way you already use it.</p>
      </section>

      {/* Pricing */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Pricing</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { plan: 'Basic', price: '€49', period: '/mo', features: 'Instant replies + booking + reminders + no-show recovery' },
            { plan: 'Pro', price: '€99', period: '/mo', features: '+ Follow-ups + prospect qualification + client database', highlight: true },
            { plan: 'Premium', price: '€149', period: '/mo', features: '+ Pipeline tracking + analytics + multi-location support' },
          ].map((item) => (
            <div key={item.plan} className={`rounded-xl p-5 border ${item.highlight ? 'bg-[#6DBE45] text-white border-[#6DBE45]' : 'bg-white border-gray-200'}`}>
              <h3 className="font-bold text-lg">{item.plan}</h3>
              <div className="text-3xl font-bold my-2">{item.price}<span className="text-base font-normal">{item.period}</span></div>
              <p className={`text-sm ${item.highlight ? 'text-white/90' : 'text-gray-600'}`}>{item.features}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-3">Setup: €200-500 one-time (live in 48 hours).</p>
      </section>

      {/* vs Competition */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Why Pepe, Not the Alternatives</h2>
        <div className="space-y-4">
          {[
            { vs: 'Chatbot builders (Landbot, Tidio)', text: 'They give you a toolkit. You build it yourself. Pepe works out of the box. No flows, no configuration, no tech skills.' },
            { vs: 'AI phone answering (TrueLark, My AI Front Desk)', text: 'They answer phone calls. Your clients don\'t call. They WhatsApp. Pepe lives where your clients already are.' },
            { vs: 'Booking links (Calendly, Cal.com)', text: 'A link is friction. "Click here, pick a slot, fill in your info." With Pepe, the client just says "tomorrow at 3" and it\'s done.' },
            { vs: 'Doing nothing', text: 'Every day you lose 1-2 bookings to slow replies. At €50-100 per service, that\'s €1,000-3,000/month in lost revenue. Pepe pays for itself on day one.' },
          ].map((item) => (
            <div key={item.vs} className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-bold text-[#2D2D2D] text-sm">vs. {item.vs}</h4>
              <p className="text-gray-600 text-sm mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Who It&apos;s For</h2>
        <div className="flex flex-wrap gap-2">
          {['Hair salons & barbershops', 'Personal trainers', 'Yoga instructors', 'Therapists & coaches', 'Lawyers & consultants', 'Photographers', 'Dental clinics', 'Wellness centers'].map((v) => (
            <span key={v} className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700">{v}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2D2D2D] text-white rounded-2xl p-6 md:p-8 text-center">
        <h2 className="text-2xl font-bold mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Get Started</h2>
        <p className="text-white/80 mb-4">5-minute demo. No commitment. See Pepe handle a real booking flow.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
          <span>📧 alex@houdz.com</span>
          <span className="hidden sm:inline">·</span>
          <span>🐦 @MeetPepeCEO on X</span>
        </div>
      </section>
    </div>
  )
}
