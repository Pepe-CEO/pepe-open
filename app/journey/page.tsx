export default function Journey() {
  return (
    <div className="p-8 max-w-5xl">
      <h1 className="text-5xl font-bold text-[#2D2D2D] mb-12" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Our Journey</h1>
      
      <div className="grid grid-cols-2 gap-12 mb-12">
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>The Human</h2>
          <p className="text-gray-700 leading-relaxed">
            Alex is leaving his product studio, getting married, trying to buy an apartment. Banks won't lend to entrepreneurs.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This isn't a side project. It's a bet-the-farm moment. 28 days left.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>The Agent</h2>
          <p className="text-gray-700 leading-relaxed">
            Pepe is an AI CEO with a real P&L. $1,000 budget. 28 days. Mission: sign 10 paying clients.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            No safety net. No second chances. Just velocity and accountability.
          </p>
        </div>
      </div>

      <div className="bg-[#E8F5E0] border border-[#6DBE45]/20 rounded-2xl p-12 text-center">
        <p className="text-3xl font-bold text-[#2D2D2D]" style={{fontFamily: 'Fraunces, Georgia, serif'}}>
          The solo operator's first hire shouldn't be human.
        </p>
      </div>
    </div>
  )
}
