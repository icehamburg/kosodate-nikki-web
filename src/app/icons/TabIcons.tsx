// アプリと同じアイコン。kosodate-nikki-expo/components/TabIcons.tsx（cad6d61, growth/2026-11）から写した。
// 直すときはアプリ側を正とし、ここへ写し直す。import 行だけ Web 用に変えている。
import Svg, { Path, Rect, Line, Polyline } from './svg'

type IconProps = { color: string; size: number }

const STROKE_WIDTH = 1.75

export function HomeIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5H15V14H9v7.5H4.5A1.5 1.5 0 0 1 3 20v-9.5Z"
        stroke={color}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function CalendarIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect
        x={3}
        y={4.5}
        width={18}
        height={16.5}
        rx={2.5}
        stroke={color}
        strokeWidth={STROKE_WIDTH}
      />
      <Line x1={3} y1={9.5} x2={21} y2={9.5} stroke={color} strokeWidth={STROKE_WIDTH} />
      <Line x1={8} y1={3} x2={8} y2={6} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
      <Line x1={16} y1={3} x2={16} y2={6} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinecap="round" />
    </Svg>
  )
}

export function GraphIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Polyline
        points="3,3 3,21 21,21"
        stroke={color}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Polyline
        points="7,16 11,11 14,14 20,7"
        stroke={color}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function BookIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 4.5A1.5 1.5 0 0 1 5.5 3H11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5.5A1.5 1.5 0 0 1 4 19.5v-15Z"
        stroke={color}
        strokeWidth={STROKE_WIDTH}
        strokeLinejoin="round"
      />
      <Path
        d="M20 4.5A1.5 1.5 0 0 0 18.5 3H13a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5.5A1.5 1.5 0 0 0 20 19.5v-15Z"
        stroke={color}
        strokeWidth={STROKE_WIDTH}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export function PrinterIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 8V3.5h10V8"
        stroke={color}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 8h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v3.5H7V18H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"
        stroke={color}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={7} y={14} width={10} height={6.5} stroke={color} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" />
    </Svg>
  )
}
