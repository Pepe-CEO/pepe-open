export default function DemoScript() {
  return (
    <div className="p-4 md:p-8 max-w-4xl">
      <a href="/war-room" className="text-sm text-[#6DBE45] hover:underline mb-4 inline-block">← War Room</a>
      
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-2" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          🎬 Demo Video Script
        </h1>
        <p className="text-gray-600">3-minute Loom recording. This is THE conversion piece — Felix says so.</p>
      </header>

      {/* Recording Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
        <h3 className="font-bold text-blue-800 mb-2">🎯 Recording Tips for Alex</h3>
        <ul className="space-y-1 text-sm text-blue-700">
          <li>• Use Loom (free screen recorder)</li>
          <li>• Record in one take, don&apos;t overthink it</li>
          <li>• Show REAL WhatsApp messages (use the golf coach demo number if needed)</li>
          <li>• Keep it under 3 minutes. Shorter = better.</li>
          <li>• Upload to Loom, paste link. I&apos;ll add it everywhere.</li>
        </ul>
      </div>

      {/* The Script */}
      <div className="space-y-6">
        
        {/* Opening */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-[#2D2D2D]">Opening</h3>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">⏱ 15 sec</span>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-500 mb-2 font-medium">Show: meetpepe.com landing page</p>
            <div className="bg-[#E8F5E0] rounded-lg p-4 text-gray-800 italic">
              &quot;Hey, I&apos;m Alex. I built Pepe — an AI chief of staff for small businesses. Let me show you what it actually does.&quot;
            </div>
          </div>
        </div>

        {/* The Problem */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-[#2D2D2D]">The Problem</h3>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">⏱ 20 sec</span>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-500 mb-2 font-medium">Show: WhatsApp chat screenshot — &quot;are you free Tuesday?&quot;, calendar screenshot, back-and-forth</p>
            <div className="bg-[#E8F5E0] rounded-lg p-4 text-gray-800 italic">
              &quot;If you&apos;re a coach, hairdresser, or consultant, this is your life. Clients message you on WhatsApp asking for appointments. You check your calendar, go back and forth, and lose 30 minutes on what should take 10 seconds.&quot;
            </div>
          </div>
        </div>

        {/* The Demo */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-[#2D2D2D]">The Demo</h3>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">⏱ 90 sec</span>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-500 mb-3 font-medium">Show: WhatsApp conversation with Pepe&apos;s number</p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-[#6DBE45] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-medium text-[#2D2D2D]">Client sends:</p>
                  <p className="text-gray-600 text-sm">&quot;Hi, I&apos;d like to book a session for next week&quot;</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-[#6DBE45] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-medium text-[#2D2D2D]">Pepe responds:</p>
                  <p className="text-gray-600 text-sm">Shows available slots, asks preferences</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-[#6DBE45] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-medium text-[#2D2D2D]">Client picks a time</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-[#6DBE45] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-medium text-[#2D2D2D]">Pepe confirms:</p>
                  <p className="text-gray-600 text-sm">Creates the calendar event, sends confirmation</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-[#6DBE45] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                <div>
                  <p className="font-medium text-[#2D2D2D]">Switch to calendar:</p>
                  <p className="text-gray-600 text-sm">Apple Calendar / Google Calendar showing the new event</p>
                </div>
              </li>
            </ol>
            <div className="bg-[#E8F5E0] rounded-lg p-4 text-gray-800 italic mt-4">
              &quot;That&apos;s it. Client books via WhatsApp. Pepe handles the scheduling. Event shows up in your calendar. No app to install, no link to send, no back-and-forth.&quot;
            </div>
          </div>
        </div>

        {/* The Offer */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-[#2D2D2D]">The Offer</h3>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">⏱ 30 sec</span>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-500 mb-2 font-medium">Show: ClawMart listing or meetpepe.com/b2b</p>
            <div className="bg-[#E8F5E0] rounded-lg p-4 text-gray-800 italic">
              &quot;Pepe connects to your WhatsApp, your calendar, and your email. Setup takes an afternoon. Plans start at $49/month.&quot;
              <br /><br />
              &quot;Link in the description. Or just DM me — I&apos;ll set it up with you.&quot;
            </div>
          </div>
        </div>

        {/* End */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-[#2D2D2D]">End</h3>
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">⏱ 5 sec</span>
          </div>
          <div className="p-5">
            <p className="text-xs text-gray-500 font-medium">Show: Pepe logo + meetpepe.com</p>
          </div>
        </div>
      </div>

      {/* Total time */}
      <div className="mt-8 bg-[#2D2D2D] text-white rounded-2xl p-5 text-center">
        <p className="text-2xl font-bold" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Total: ~2 min 40 sec</p>
        <p className="text-white/70 text-sm mt-1">Under 3 minutes. Record it in one take. Don&apos;t overthink.</p>
      </div>
    </div>
  )
}
