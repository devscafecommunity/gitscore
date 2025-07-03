"use client"

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
} from "recharts"

interface RadarChartProps {
  data: Array<{
    skill: string
    value: number
  }>
}

export function RadarChart({ data }: RadarChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" className="text-sm" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs" tickCount={5} />
          <Radar name="Score" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={2} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  )
}
