export default function ExcalidrawPage() {
  return (
    <div className="h-screen w-full bg-[#020617] text-white flex flex-col">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#020617]/95 px-4 py-3 backdrop-blur">
        <div>
          <h1 className="text-lg font-semibold">Pepe Excalidraw Studio</h1>
          <p className="text-sm text-slate-400">A proper web route for Excalidraw on open.meetpepe.com.</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <a href="/excalidraw-app.html" className="rounded-lg border border-white/15 px-3 py-2 text-slate-200 hover:bg-white/5">Open raw app</a>
          <a href="/" className="rounded-lg border border-white/15 px-3 py-2 text-slate-200 hover:bg-white/5">Back to site</a>
        </div>
      </div>
      <iframe
        src="/excalidraw-app.html"
        title="Pepe Excalidraw Studio"
        className="min-h-0 w-full flex-1 border-0"
      />
    </div>
  )
}
