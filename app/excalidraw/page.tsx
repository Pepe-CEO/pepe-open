'use client'

import dynamic from 'next/dynamic'
import '@excalidraw/excalidraw/index.css'
import { Component, useEffect, useRef, useState, type ChangeEvent, type ReactNode } from 'react'

const Excalidraw = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Excalidraw,
  { ssr: false },
)

const STORAGE_KEY_MERMAID = 'pepe-excalidraw-mermaid'
const STORAGE_KEY_SCENE = 'pepe-excalidraw-scene'

const SAMPLE = `flowchart TD
  A[User asks for diagram] --> B[Pepe writes Mermaid]
  B --> C[Excalidraw renders the graph]
  C --> D[Alex edits the drawing]
  D --> E{Needs changes?}
  E -- Yes --> B
  E -- No --> F[Diagram ready]`

const EMPTY_SCENE = {
  elements: [],
  appState: {
    theme: 'dark' as const,
    viewBackgroundColor: '#0f172a',
  },
  files: {},
}

function safeParse(value: string | null) {
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function download(filename: string, content: string, type = 'application/json') {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

function normalizeScene(input: any) {
  return {
    elements: Array.isArray(input?.elements) ? input.elements : [],
    appState: {
      theme: 'dark' as const,
      viewBackgroundColor: '#0f172a',
      ...(input?.appState || {}),
    },
    files: input?.files || {},
  }
}

class NativeExcalidrawBoundary extends Component<
  { children: ReactNode; onError: (message: string) => void },
  { error: string | null }
> {
  state = { error: null }

  static getDerivedStateFromError(error: any) {
    return { error: String(error?.message || error || 'Unknown Excalidraw error') }
  }

  componentDidCatch(error: any) {
    const message = String(error?.message || error || 'Unknown Excalidraw error')
    console.error('Native Excalidraw crashed:', error)
    this.props.onError(message)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex h-full min-h-[60vh] flex-col bg-slate-950">
          <div className="border-b border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
            Native Excalidraw crashed on this stack. Falling back to the raw app so the page stays usable.
            <div className="mt-1 break-all font-mono text-xs text-amber-200/90">{this.state.error}</div>
          </div>
          <iframe
            src="/excalidraw-app.html"
            title="Pepe Excalidraw fallback"
            className="min-h-0 w-full flex-1 border-0"
          />
        </div>
      )
    }

    return this.props.children
  }
}

export default function ExcalidrawPage() {
  const apiRef = useRef<any>(null)
  const [mounted, setMounted] = useState(false)
  const [mermaid, setMermaid] = useState(SAMPLE)
  const [scene, setScene] = useState<any>(EMPTY_SCENE)
  const [status, setStatus] = useState('Ready')
  const [error, setError] = useState('')
  const [nativeCrash, setNativeCrash] = useState('')

  useEffect(() => {
    setMounted(true)
    const savedMermaid = window.localStorage.getItem(STORAGE_KEY_MERMAID)
    const savedScene = safeParse(window.localStorage.getItem(STORAGE_KEY_SCENE))

    if (savedMermaid) {
      setMermaid(savedMermaid)
    }

    if (savedScene) {
      const normalized = normalizeScene(savedScene)
      setScene(normalized)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    window.localStorage.setItem(STORAGE_KEY_MERMAID, mermaid)
  }, [mounted, mermaid])

  useEffect(() => {
    if (!mounted) return
    window.localStorage.setItem(STORAGE_KEY_SCENE, JSON.stringify(scene))
  }, [mounted, scene])

  async function renderDiagram() {
    setStatus('Rendering Mermaid into Excalidraw...')
    setError('')

    try {
      const [{ parseMermaidToExcalidraw }, { convertToExcalidrawElements }] = await Promise.all([
        import('@excalidraw/mermaid-to-excalidraw'),
        import('@excalidraw/excalidraw'),
      ])

      const { elements, files } = await parseMermaidToExcalidraw(mermaid, {
        flowchart: { curve: 'linear' },
      })

      const nextScene = normalizeScene({
        elements: convertToExcalidrawElements(elements),
        files,
        appState: {
          theme: 'dark',
          viewBackgroundColor: '#0f172a',
          currentItemEndArrowhead: 'arrow',
        },
      })

      setScene(nextScene)
      apiRef.current?.updateScene(nextScene)
      apiRef.current?.scrollToContent(nextScene.elements, { fitToContent: true })
      setStatus(`Rendered ${nextScene.elements.length} elements.`)
    } catch (err: any) {
      console.error(err)
      setError(String(err?.message || err))
      setStatus('Render failed')
    }
  }

  function blankScene() {
    setError('')
    setStatus('Blank scene loaded')
    setScene(EMPTY_SCENE)
    apiRef.current?.updateScene(EMPTY_SCENE)
  }

  function loadSample() {
    setMermaid(SAMPLE)
    setStatus('Sample restored')
    setError('')
  }

  function exportScene() {
    const payload = {
      type: 'excalidraw',
      version: 2,
      source: 'https://open.meetpepe.com/excalidraw',
      elements: scene.elements || [],
      appState: scene.appState || {},
      files: scene.files || {},
    }

    download('diagram.excalidraw.json', JSON.stringify(payload, null, 2))
    setStatus('Downloaded .excalidraw.json')
  }

  async function importScene(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const raw = await file.text()
      const parsed = JSON.parse(raw)

      if (parsed?.type !== 'excalidraw' || !Array.isArray(parsed?.elements)) {
        throw new Error('This file does not look like an Excalidraw scene.')
      }

      const nextScene = normalizeScene(parsed)
      setScene(nextScene)
      apiRef.current?.updateScene(nextScene)
      apiRef.current?.scrollToContent(nextScene.elements, { fitToContent: true })
      setStatus(`Imported ${file.name}`)
      setError('')
    } catch (err: any) {
      console.error(err)
      setError(String(err?.message || err))
      setStatus('Import failed')
    } finally {
      event.target.value = ''
    }
  }

  useEffect(() => {
    if (!mounted) return
    if (scene.elements.length > 0) return
    renderDiagram()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted])

  return (
    <div className="flex h-screen w-full flex-col bg-[#020617] text-white">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#020617] px-4 py-3">
        <div>
          <h1 className="text-lg font-semibold">Pepe Excalidraw Studio</h1>
          <p className="text-sm text-slate-400">
            Real Excalidraw embedded in the site, not a canvas wrapper.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="rounded-lg border border-white/15 px-3 py-2 text-slate-200 hover:bg-white/5">
            Back to site
          </a>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[380px_1fr]">
        <div className="flex min-h-0 flex-col border-b border-white/10 bg-slate-950/70 lg:border-b-0 lg:border-r lg:border-white/10">
          <div className="flex flex-wrap gap-2 border-b border-white/10 p-4">
            <button onClick={renderDiagram} className="rounded-lg bg-sky-500 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-400">
              Render Mermaid
            </button>
            <button onClick={loadSample} className="rounded-lg border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/5">
              Load sample
            </button>
            <button onClick={blankScene} className="rounded-lg border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/5">
              Blank scene
            </button>
            <button onClick={exportScene} className="rounded-lg border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/5">
              Download .excalidraw
            </button>
            <label className="cursor-pointer rounded-lg border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/5">
              Import .excalidraw
              <input type="file" accept=".json,.excalidraw,.excalidraw.json,application/json" className="hidden" onChange={importScene} />
            </label>
          </div>

          <textarea
            value={mermaid}
            onChange={(e) => setMermaid(e.target.value)}
            spellCheck={false}
            placeholder="Paste Mermaid here..."
            className="min-h-[240px] flex-1 resize-none bg-transparent p-4 font-mono text-sm text-slate-100 outline-none"
          />

          <div className="border-t border-white/10 px-4 py-3 text-sm text-slate-400">
            Export PNG/SVG directly from the Excalidraw UI on the right.
          </div>

          <div className="border-t border-white/10 px-4 py-3 text-sm text-slate-400">
            <strong className={error || nativeCrash ? 'text-red-400' : 'text-emerald-400'}>
              {error || nativeCrash ? 'Error' : 'Status'}
            </strong>{' '}
            {error || nativeCrash || status}
          </div>
        </div>

        <div className="min-h-0">
          <div className="h-full w-full [&_.excalidraw]:h-full [&_.excalidraw]:w-full">
            {mounted ? (
              <NativeExcalidrawBoundary
                onError={(message) => {
                  setNativeCrash(message)
                  setStatus('Native embed failed, fallback loaded')
                }}
              >
                <Excalidraw
                  excalidrawAPI={(api) => {
                    apiRef.current = api
                    if (scene.elements.length > 0) {
                      api.updateScene(scene)
                    }
                  }}
                  initialData={scene as any}
                  theme="dark"
                  onChange={(elements: readonly any[], appState: any, files: any) => {
                    setScene({ elements: [...elements], appState, files })
                  }}
                />
              </NativeExcalidrawBoundary>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
