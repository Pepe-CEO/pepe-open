'use client'

import { useMemo, useState } from 'react'

type Drop = {
  label: string
  count: number
  tone?: 'red' | 'amber' | 'green'
}

type TrackData = {
  label: string
  total: number
  yes: number
  no: number
  e1: number
  e2: number
  e3: number
  tail: number
  e4: number
  tech: number
  drop1: Drop[]
  drop2: Drop[]
  drop3: Drop[]
}

const TRACKS: Record<string, TrackData> = {
  all: {
    label: 'All tracks',
    total: 147,
    yes: 3,
    no: 9,
    e1: 147,
    e2: 142,
    e3: 134,
    tail: 130,
    e4: 5,
    tech: 5,
    drop1: [
      { label: 'Bounced', count: 3, tone: 'amber' },
      { label: 'Delivery issue', count: 1, tone: 'amber' },
      { label: 'Email updated', count: 1, tone: 'amber' },
    ],
    drop2: [{ label: 'Replied no', count: 8, tone: 'red' }],
    drop3: [
      { label: 'Replied yes', count: 3, tone: 'green' },
      { label: 'Replied no', count: 1, tone: 'red' },
    ],
  },
  coffee: {
    label: 'Coffee',
    total: 66,
    yes: 2,
    no: 5,
    e1: 66,
    e2: 65,
    e3: 60,
    tail: 58,
    e4: 1,
    tech: 1,
    drop1: [{ label: 'Bounced', count: 1, tone: 'amber' }],
    drop2: [{ label: 'Replied no', count: 5, tone: 'red' }],
    drop3: [{ label: 'Replied yes', count: 2, tone: 'green' }],
  },
  gym: {
    label: 'Gym',
    total: 81,
    yes: 1,
    no: 4,
    e1: 81,
    e2: 77,
    e3: 74,
    tail: 72,
    e4: 4,
    tech: 4,
    drop1: [
      { label: 'Bounced', count: 2, tone: 'amber' },
      { label: 'Delivery issue', count: 1, tone: 'amber' },
      { label: 'Email updated', count: 1, tone: 'amber' },
    ],
    drop2: [{ label: 'Replied no', count: 3, tone: 'red' }],
    drop3: [
      { label: 'Replied yes', count: 1, tone: 'green' },
      { label: 'Replied no', count: 1, tone: 'red' },
    ],
  },
}

function pct(value: number, total: number) {
  return `${((value / total) * 100).toFixed(1)}%`
}

function toneClasses(tone: Drop['tone']) {
  if (tone === 'green') {
    return 'border-[#6DBE45]/30 bg-[#E8F5E0] text-[#2D2D2D]'
  }
  if (tone === 'amber') {
    return 'border-amber-200 bg-amber-50 text-amber-900'
  }
  return 'border-rose-200 bg-rose-50 text-rose-900'
}

export default function BrandTrackPage() {
  const [selected, setSelected] = useState<'all' | 'coffee' | 'gym'>('all')
  const track = TRACKS[selected]

  const stages = useMemo(
    () => [
      {
        key: 'pool',
        step: 'Pool',
        label: `${track.label} leads`,
        count: track.total,
        percent: pct(track.total, track.total),
        accent: 'from-[#E8F5E0] to-[#F4F8EF]',
        bar: 'bg-[#6DBE45]',
        drops: [] as Drop[],
      },
      {
        key: 'e1',
        step: 'Step 1',
        label: 'Email 1 sent',
        count: track.e1,
        percent: pct(track.e1, track.total),
        accent: 'from-[#EEF7FC] to-[#F7FBFD]',
        bar: 'bg-sky-400',
        drops: track.drop1,
      },
      {
        key: 'e2',
        step: 'Step 2',
        label: 'Email 2 sent',
        count: track.e2,
        percent: pct(track.e2, track.total),
        accent: 'from-[#EEF7FC] to-[#F7FBFD]',
        bar: 'bg-sky-400',
        drops: track.drop2,
      },
      {
        key: 'e3',
        step: 'Step 3',
        label: 'Email 3 sent',
        count: track.e3,
        percent: pct(track.e3, track.total),
        accent: 'from-[#EEF7FC] to-[#F7FBFD]',
        bar: 'bg-sky-400',
        drops: track.drop3,
      },
      {
        key: 'tail',
        step: 'Tail',
        label: 'Reached last sequence with no answer',
        count: track.tail,
        percent: pct(track.tail, track.total),
        accent: 'from-[#E8F5E0] to-[#F4F8EF]',
        bar: 'bg-[#6DBE45]',
        drops: [] as Drop[],
      },
    ],
    [track]
  )

  return (
    <div className="p-4 md:p-8 max-w-7xl">
      <header className="mb-8 md:mb-10">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#6DBE45] mb-2">BrandTrack · outreach flow</p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Clean flow, finally
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
              Proper responsive version of the campaign flow. This is the same BrandTrack dataset, but laid out like a clean product page instead of a cramped prototype.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['all', 'coffee', 'gym'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selected === key
                    ? 'border-[#6DBE45] bg-[#E8F5E0] text-[#2D2D2D]'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-[#6DBE45]/40 hover:text-[#2D2D2D]'
                }`}
              >
                {TRACKS[key].label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="grid gap-3 md:gap-4 md:grid-cols-2 xl:grid-cols-5 mb-8">
        {[
          { label: 'Leads', value: track.total, note: 'Active tracked leads' },
          { label: 'Yes', value: track.yes, note: pct(track.yes, track.total) + ' of leads' },
          { label: 'No', value: track.no, note: pct(track.no, track.total) + ' of leads' },
          { label: 'No answer after E3', value: track.tail, note: pct(track.tail, track.total) + ' of leads' },
          { label: 'Manual E4', value: track.e4, note: 'Outside the main flow' },
        ].map((item) => (
          <div key={item.label} className="bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500 mb-2">{item.label}</p>
            <p className="text-4xl font-bold text-[#2D2D2D]">{item.value}</p>
            <p className="text-xs text-gray-500 mt-2">{item.note}</p>
          </div>
        ))}
      </section>

      <section className="bg-white border border-gray-200 rounded-[28px] p-4 md:p-6 xl:p-8 shadow-sm mb-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              {track.label} flow
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              Blue cards are the main sequence. Drop-offs sit underneath the step where they happened.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 bg-[#F7FBFD]">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-400" /> Main path
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 bg-[#FFF7F7]">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" /> Drop-off
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 bg-[#F4F8EF]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#6DBE45]" /> Final tail
            </span>
          </div>
        </div>

        <div className="hidden xl:grid xl:grid-cols-5 gap-4 items-start">
          {stages.map((stage, index) => {
            const height = Math.max(26, (stage.count / track.total) * 220)
            return (
              <div key={stage.key} className="relative">
                {index < stages.length - 1 && (
                  <div className="absolute top-[110px] left-[calc(100%-8px)] w-8 h-2 rounded-full bg-gradient-to-r from-sky-200 to-sky-300" />
                )}
                <div className={`rounded-[24px] border border-gray-200 bg-gradient-to-b ${stage.accent} p-5 min-h-[340px] flex flex-col`}>
                  <div className="mb-4">
                    <p className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">{stage.step}</p>
                    <h3 className="text-lg font-bold text-[#2D2D2D] mt-2 leading-tight">{stage.label}</h3>
                  </div>

                  <div className="mt-auto">
                    <div className="h-56 rounded-[20px] bg-white/80 border border-white shadow-inner p-4 flex items-end">
                      <div className="w-full rounded-[16px] relative overflow-hidden" style={{ height }}>
                        <div className={`absolute inset-0 ${stage.bar}`} />
                        <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-black/8 to-transparent" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-4xl font-bold text-[#2D2D2D]">{stage.count}</p>
                        <p className="text-xs text-gray-500 mt-1">{stage.percent} of this view</p>
                      </div>
                    </div>
                  </div>
                </div>

                {stage.drops.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {stage.drops.map((drop) => (
                      <div key={drop.label} className={`rounded-2xl border p-4 ${toneClasses(drop.tone)}`}>
                        <div className="flex items-end justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold">{drop.label}</p>
                            <p className="text-xs opacity-70 mt-1">{pct(drop.count, track.total)} of leads</p>
                          </div>
                          <p className="text-2xl font-bold">{drop.count}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="xl:hidden space-y-4">
          {stages.map((stage, index) => {
            const height = Math.max(18, (stage.count / track.total) * 100)
            return (
              <div key={stage.key} className="rounded-[24px] border border-gray-200 bg-white p-4 md:p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase">{stage.step}</p>
                    <h3 className="text-lg md:text-xl font-bold text-[#2D2D2D] mt-2 leading-tight">{stage.label}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#2D2D2D]">{stage.count}</p>
                    <p className="text-xs text-gray-500 mt-1">{stage.percent}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-100 h-4 overflow-hidden mb-4">
                  <div className={`${stage.bar} h-full rounded-2xl`} style={{ width: `${height}%` }} />
                </div>

                {index < stages.length - 1 && (
                  <div className="flex justify-center py-1 text-gray-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                {stage.drops.length > 0 && (
                  <div className="mt-2 grid gap-2 md:grid-cols-2">
                    {stage.drops.map((drop) => (
                      <div key={drop.label} className={`rounded-2xl border p-4 ${toneClasses(drop.tone)}`}>
                        <p className="text-sm font-semibold">{drop.label}</p>
                        <div className="mt-2 flex items-end justify-between gap-3">
                          <p className="text-xs opacity-70">{pct(drop.count, track.total)} of leads</p>
                          <p className="text-2xl font-bold">{drop.count}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-2">Sequence depth</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">{track.e3}</p>
          <p className="text-sm text-gray-600 mt-2">
            Leads that reached Email 3. That is {pct(track.e3, track.total)} of this view.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500 mb-2">Positive signal</p>
          <p className="text-4xl font-bold text-[#2D2D2D]">{track.yes}</p>
          <p className="text-sm text-gray-600 mt-2">
            Human yes replies. Not vanity opens. Actual interested responses.
          </p>
        </div>

        <div className="bg-[#E8F5E0] border border-[#6DBE45]/20 rounded-3xl p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-600 mb-2">What this page should become</p>
          <p className="text-lg font-semibold text-[#2D2D2D] leading-relaxed">
            This is now clean enough to ship. Next step is wiring it to live data so the flow updates automatically instead of being hand-fed.
          </p>
        </div>
      </section>
    </div>
  )
}
