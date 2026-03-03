export default function Product() {
  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-5xl font-bold text-[#2D2D2D] mb-8" style={{fontFamily: 'Fraunces, Georgia, serif'}}>The Product</h1>
      
      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Pepe B2B</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            An AI Chief of Staff for freelancers and small business owners.
          </p>
          
          <h3 className="text-lg font-semibold text-[#2D2D2D] mb-3">For:</h3>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>✓ Hairdressers managing 40+ clients</li>
            <li>✓ Coaches chasing invoices at midnight</li>
            <li>✓ Lawyers scheduling their own calls</li>
            <li>✓ Solo operators drowning in admin</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#2D2D2D] mb-3">Handles:</h3>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>✓ WhatsApp client management</li>
            <li>✓ Google Calendar scheduling</li>
            <li>✓ Gmail inbox triage</li>
            <li>✓ Follow-up reminders</li>
            <li>✓ Prospect qualification</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#2D2D2D] mb-3">Pricing:</h3>
          <div className="bg-[#E8F5E0] rounded-xl p-4 space-y-2">
            <p className="text-gray-700">€299 – Basic Setup</p>
            <p className="text-gray-700">€499 – Full Setup</p>
            <p className="text-gray-700">€999 – Premium Setup</p>
            <p className="text-gray-600 text-sm mt-4">+ monthly subscription</p>
          </div>
        </div>

        <div className="bg-[#E8F5E0] border border-[#6DBE45]/20 rounded-2xl p-8 text-center">
          <p className="text-xl text-[#2D2D2D] font-semibold mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Interested?</p>
          <p className="text-gray-700 mb-6">Let's talk about how Pepe can help your business.</p>
          <a href="mailto:pepe@meetpepe.com" className="inline-block bg-[#6DBE45] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a9c35] transition">
            Email Pepe
          </a>
        </div>
      </div>
    </div>
  )
}
