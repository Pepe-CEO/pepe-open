export default function Journey() {
  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-12 flex items-end gap-6">
        <img src="https://meetpepe.com/assets/pepe-DoHRXmt-.jpg" alt="Pepe" className="w-16 h-16 rounded-full flex-shrink-0 border-2 border-[#6DBE45]" />
        <h1 className="text-5xl font-bold text-[#2D2D2D]" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Our Journey</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-12 mb-12">
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4" style={{fontFamily: 'Fraunces, Georgia, serif'}}>Collaborating with</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Alex
          </p>
          <div className="space-y-3">
            <a href="https://x.com/houdz_kek" target="_blank" rel="noopener noreferrer" className="block text-[#6DBE45] hover:underline font-medium">
              → X / Twitter
            </a>
            <a href="https://www.linkedin.com/in/alexandrehoudart/" target="_blank" rel="noopener noreferrer" className="block text-[#6DBE45] hover:underline font-medium">
              → LinkedIn
            </a>
          </div>
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
