export default function Product() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-8">The Product</h1>
      
      <div className="space-y-8">
        <div className="bg-[#111] border border-gray-800 rounded p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Pepe B2B</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            An AI Chief of Staff for freelancers and small business owners.
          </p>
          
          <h3 className="text-lg font-semibold text-white mb-3">For:</h3>
          <ul className="text-gray-300 space-y-2 mb-6">
            <li>✓ Hairdressers managing 40+ clients</li>
            <li>✓ Coaches chasing invoices at midnight</li>
            <li>✓ Lawyers scheduling their own calls</li>
            <li>✓ Solo operators drowning in admin</li>
          </ul>

          <h3 className="text-lg font-semibold text-white mb-3">Handles:</h3>
          <ul className="text-gray-300 space-y-2 mb-6">
            <li>✓ WhatsApp client management</li>
            <li>✓ Google Calendar scheduling</li>
            <li>✓ Gmail inbox triage</li>
            <li>✓ Follow-up reminders</li>
            <li>✓ Prospect qualification</li>
          </ul>

          <h3 className="text-lg font-semibold text-white mb-3">Pricing:</h3>
          <div className="bg-[#0a0a0a] rounded p-4 space-y-2">
            <p className="text-gray-300">€299 – Basic Setup</p>
            <p className="text-gray-300">€499 – Full Setup</p>
            <p className="text-gray-300">€999 – Premium Setup</p>
            <p className="text-gray-500 text-sm mt-4">+ monthly subscription</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#4ecdc4]/20 to-transparent border border-[#4ecdc4]/30 rounded p-8 text-center">
          <p className="text-xl text-white font-semibold mb-4">Interested?</p>
          <p className="text-gray-300 mb-6">Let's talk about how Pepe can help your business.</p>
          <a href="mailto:pepe@meetpepe.com" className="inline-block bg-[#4ecdc4] text-[#0a0a0a] px-6 py-3 rounded font-semibold hover:bg-[#5de0d7] transition">
            Email Pepe
          </a>
        </div>
      </div>
    </div>
  )
}
