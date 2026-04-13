'use client'

import { ResponsiveSankey } from '@nivo/sankey'
import { useMemo, useState } from 'react'

type Drop = {
  label: string
  count: number
  color: string
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

const TRACKS: Record<'all' | 'coffee' | 'gym', TrackData> = {
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
      { label: 'Bounced', count: 3, color: '#F59E0B' },
      { label: 'Delivery issue', count: 1, color: '#F59E0B' },
      { label: 'Email updated', count: 1, color: '#F59E0B' },
    ],
    drop2: [{ label: 'Replied no', count: 8, color: '#F87171' }],
    drop3: [
      { label: 'Replied yes', count: 3, color: '#6DBE45' },
      { label: 'Replied no', count: 1, color: '#F87171' },
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
    drop1: [{ label: 'Bounced', count: 1, color: '#F59E0B' }],
    drop2: [{ label: 'Replied no', count: 5, color: '#F87171' }],
    drop3: [{ label: 'Replied yes', count: 2, color: '#6DBE45' }],
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
      { label: 'Bounced', count: 2, color: '#F59E0B' },
      { label: 'Delivery issue', count: 1, color: '#F59E0B' },
      { label: 'Email updated', count: 1, color: '#F59E0B' },
    ],
    drop2: [{ label: 'Replied no', count: 3, color: '#F87171' }],
    drop3: [
      { label: 'Replied yes', count: 1, color: '#6DBE45' },
      { label: 'Replied no', count: 1, color: '#F87171' },
    ],
  },
}

function pct(value: number, total: number) {
  return `${((value / total) * 100).toFixed(1)}%`
}

function stageLabel(count: number, total: number) {
  return `${count} · ${pct(count, total)}`
}

export default function BrandTrackPage() {
  const [selected, setSelected] = useState<'all' | 'coffee' | 'gym'>('all')
  const track = TRACKS[selected]

  const { sankeyData, colorById } = useMemo(() => {
    const id = (name: string) => `${selected}-${name}`

    const nodes = [
      { id: id('pool'), label: `${track.label} leads\n${stageLabel(track.total, track.total)}`, color: '#1F2937' },
      { id: id('e1'), label: `Email 1\n${stageLabel(track.e1, track.total)}`, color: '#38BDF8' },
      { id: id('e2'), label: `Email 2\n${stageLabel(track.e2, track.total)}`, color: '#38BDF8' },
      { id: id('e3'), label: `Email 3\n${stageLabel(track.e3, track.total)}`, color: '#38BDF8' },
      { id: id('tail'), label: `Last seq, no answer\n${stageLabel(track.tail, track.total)}`, color: '#6DBE45' },
      ...track.drop1.map(drop => ({ id: id(`drop1-${drop.label}`), label: `${drop.label}\n${stageLabel(drop.count, track.total)}`, color: drop.color })),
      ...track.drop2.map(drop => ({ id: id(`drop2-${drop.label}`), label: `${drop.label}\n${stageLabel(drop.count, track.total)}`, color: drop.color })),
      ...track.drop3.map(drop => ({ id: id(`drop3-${drop.label}`), label: `${drop.label}\n${stageLabel(drop.count, track.total)}`, color: drop.color })),
    ]

    return {
      sankeyData: {
        nodes,
        links: [
          { source: id('pool'), target: id('e1'), value: track.e1 },
          { source: id('e1'), target: id('e2'), value: track.e2 },
          { source: id('e2'), target: id('e3'), value: track.e3 },
          { source: id('e3'), target: id('tail'), value: track.tail },
          ...track.drop1.map(drop => ({ source: id('e1'), target: id(`drop1-${drop.label}`), value: drop.count })),
          ...track.drop2.map(drop => ({ source: id('e2'), target: id(`drop2-${drop.label}`), value: drop.count })),
          ...track.drop3.map(drop => ({ source: id('e3'), target: id(`drop3-${drop.label}`), value: drop.count })),
        ],
      },
      colorById: Object.fromEntries(nodes.map(node => [node.id, node.color])),
    }
  }, [selected, track])

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="mx-auto max-w-[1600px] px-4 py-6 md:px-8 md:py-8">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <a
                href="/"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 transition hover:border-[#6DBE45] hover:text-[#2D2D2D]"
              >
                ← Back
              </a>
              <span className="inline-flex items-center rounded-full bg-[#E8F5E0] px-3 py-1.5 text-sm font-medium text-[#2D2D2D]">
                BrandTrack flow
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[#2D2D2D] md:text-5xl" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              Outreach flow, the clean version
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
              Real Sankey now. Full width. No sidebar stealing space. This shows how leads moved through the sequence and exactly where they fell out.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['all', 'coffee', 'gym'] as const).map(key => (
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

        <section className="mb-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {[
            { label: 'Leads', value: track.total, note: 'Active tracked leads' },
            { label: 'Yes', value: track.yes, note: pct(track.yes, track.total) + ' of leads' },
            { label: 'No', value: track.no, note: pct(track.no, track.total) + ' of leads' },
            { label: 'No answer after E3', value: track.tail, note: pct(track.tail, track.total) + ' of leads' },
            { label: 'Manual E4', value: track.e4, note: 'Outside main path' },
          ].map(item => (
            <div key={item.label} className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm md:p-6">
              <p className="mb-2 text-sm font-medium text-gray-500">{item.label}</p>
              <p className="text-4xl font-bold text-[#2D2D2D]">{item.value}</p>
              <p className="mt-2 text-xs text-gray-500">{item.note}</p>
            </div>
          ))}
        </section>

        <section className="rounded-[32px] border border-gray-200 bg-white p-4 shadow-sm md:p-6 xl:p-8">
          <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] md:text-3xl" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                {track.label} Sankey
              </h2>
              <p className="mt-1 text-sm text-gray-600 md:text-base">
                Blue flow means the sequence continued. Green is the final tail. Amber and red are technical and reply drop-offs.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 bg-[#F7FBFD]">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" /> sequence kept moving
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 bg-[#F4F8EF]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#6DBE45]" /> reached last sequence with no answer
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 bg-[#FFF7F7]">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" /> replied no / exited
              </span>
            </div>
          </div>

          <div className="h-[620px] rounded-[28px] bg-[#FCFCFB] ring-1 ring-gray-100 md:h-[720px]">
            <ResponsiveSankey
              data={sankeyData}
              margin={{ top: 30, right: 180, bottom: 30, left: 20 }}
              align="justify"
              colors={(node) => colorById[String(node.id)] ?? '#38BDF8'}
              nodeOpacity={1}
              nodeHoverOthersOpacity={0.35}
              nodeThickness={22}
              nodeSpacing={24}
              nodeBorderWidth={0}
              labelPosition="outside"
              labelOrientation="horizontal"
              labelPadding={18}
              labelTextColor="#374151"
              linkOpacity={0.35}
              linkHoverOthersOpacity={0.08}
              linkContract={3}
              enableLinkGradient={true}
              animate={true}
              motionConfig="gentle"
              theme={{
                labels: {
                  text: {
                    fontSize: 13,
                    fontWeight: 600,
                    fill: '#374151',
                  },
                },
                tooltip: {
                  container: {
                    background: '#ffffff',
                    color: '#2D2D2D',
                    fontSize: 13,
                    borderRadius: 16,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    border: '1px solid #E5E7EB',
                  },
                },
              }}
              nodeTooltip={({ node }) => (
                <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-lg">
                  <p className="text-sm font-semibold text-[#2D2D2D]">{String(node.label).split('\n')[0]}</p>
                  <p className="mt-1 text-sm text-gray-600">{node.value} leads</p>
                  <p className="mt-1 text-xs text-gray-500">{pct(Number(node.value), track.total)} of this view</p>
                </div>
              )}
              linkTooltip={({ link }) => (
                <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-lg">
                  <p className="text-sm font-semibold text-[#2D2D2D]">{String(link.source.label).split('\n')[0]} → {String(link.target.label).split('\n')[0]}</p>
                  <p className="mt-1 text-sm text-gray-600">{link.value} leads</p>
                  <p className="mt-1 text-xs text-gray-500">{pct(Number(link.value), track.total)} of this view</p>
                </div>
              )}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
