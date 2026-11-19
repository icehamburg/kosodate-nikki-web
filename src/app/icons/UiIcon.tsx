// アプリと同じアイコン。kosodate-nikki-expo/components/UiIcon.tsx（cad6d61, growth/2026-11）から写した。
// 直すときはアプリ側を正とし、ここへ写し直す。import 行だけ Web 用に変えている。
import type { ReactNode } from 'react'
import Svg, { Path, Circle, Rect } from './svg'

export type UiIconName =
  | 'search'
  | 'settings'
  | 'bell'
  | 'cloud'
  | 'mic'
  | 'camera'
  | 'image'
  | 'moon'
  | 'sun'
  | 'theme-auto'
  | 'trash'
  | 'bookmark'
  | 'tag'
  | 'chart'
  | 'stopwatch'
  | 'edit'
  | 'baby'
  | 'family'
  | 'book'
  | 'bulb'
  | 'star'

type Props = {
  name: UiIconName
  size?: number
  color: string
}

// Hand-drawn UI icons in the same line weight as the Streamline record icons
// (stroke 1.5 on a 24 grid). Kept simple/geometric so they read as one family.
const SW = 1.5

export function UiIcon({ name, size = 24, color }: Props) {
  const s = { stroke: color, strokeWidth: SW, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' as const }
  const Wrap = (children: ReactNode) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">{children}</Svg>
  )

  switch (name) {
    case 'search':
      return Wrap(<>
        <Circle cx={10} cy={10} r={6.5} {...s} />
        <Path d="M15 15 L20.5 20.5" {...s} />
      </>)
    case 'settings':
      return Wrap(<>
        <Path d="M3.5 7 H20.5" {...s} />
        <Path d="M3.5 12 H20.5" {...s} />
        <Path d="M3.5 17 H20.5" {...s} />
        <Circle cx={15.5} cy={7} r={2.3} fill={color} />
        <Circle cx={8.5} cy={12} r={2.3} fill={color} />
        <Circle cx={15.5} cy={17} r={2.3} fill={color} />
      </>)
    case 'bell':
      return Wrap(<>
        <Path d="M5.5 17 C5.5 16 7 15.5 7 11 A5 5 0 0 1 17 11 C17 15.5 18.5 16 18.5 17 Z" {...s} />
        <Path d="M12 3.5 V6" {...s} />
        <Path d="M10 20 A2 2 0 0 0 14 20" {...s} />
      </>)
    case 'cloud':
      return Wrap(
        <Path d="M7 18 A4 4 0 0 1 6.8 10.1 A5.2 5.2 0 0 1 16.6 9 A3.6 3.6 0 1 1 16.5 18 Z" {...s} />
      )
    case 'mic':
      return Wrap(<>
        <Rect x={9} y={2.5} width={6} height={11} rx={3} {...s} />
        <Path d="M6 11 A6 6 0 0 0 18 11" {...s} />
        <Path d="M12 17 V20.5" {...s} />
        <Path d="M8.5 20.5 H15.5" {...s} />
      </>)
    case 'camera':
      return Wrap(<>
        <Rect x={3} y={7} width={18} height={13} rx={2.5} {...s} />
        <Circle cx={12} cy={13.5} r={3.3} {...s} />
        <Path d="M8.5 7 L9.7 4.8 H14.3 L15.5 7" {...s} />
      </>)
    case 'image':
      return Wrap(<>
        <Rect x={3} y={4} width={18} height={16} rx={2.5} {...s} />
        <Circle cx={8.5} cy={9.5} r={1.8} {...s} />
        <Path d="M4 18 L9 12 L13 16 L16 13 L20 17" {...s} />
      </>)
    case 'moon':
      return Wrap(
        <Path d="M20.5 14.5 A8.5 8.5 0 1 1 9.5 3.5 A6.5 6.5 0 0 0 20.5 14.5 Z" {...s} />
      )
    case 'sun':
      return Wrap(<>
        <Circle cx={12} cy={12} r={4.3} {...s} />
        <Path d="M12 2.5 V4.5 M12 19.5 V21.5 M2.5 12 H4.5 M19.5 12 H21.5 M5.2 5.2 L6.6 6.6 M17.4 17.4 L18.8 18.8 M18.8 5.2 L17.4 6.6 M6.6 17.4 L5.2 18.8" {...s} />
      </>)
    case 'theme-auto':
      return Wrap(<>
        <Circle cx={12} cy={12} r={8.5} {...s} />
        <Path d="M12 3.5 A8.5 8.5 0 0 1 12 20.5 Z" fill={color} />
      </>)
    case 'trash':
      return Wrap(<>
        <Path d="M4.5 7 H19.5" {...s} />
        <Path d="M9 7 V5.5 A1.2 1.2 0 0 1 10.2 4.3 H13.8 A1.2 1.2 0 0 1 15 5.5 V7" {...s} />
        <Path d="M6.5 7 L7.4 18.8 A1.6 1.6 0 0 0 9 20.3 H15 A1.6 1.6 0 0 0 16.6 18.8 L17.5 7" {...s} />
        <Path d="M10 10.5 V16.8 M14 10.5 V16.8" {...s} />
      </>)
    case 'bookmark':
      return Wrap(
        <Path d="M6.5 4.5 A1.5 1.5 0 0 1 8 3 H16 A1.5 1.5 0 0 1 17.5 4.5 V20.5 L12 16.5 L6.5 20.5 Z" {...s} />
      )
    case 'tag':
      return Wrap(<>
        <Path d="M3 12.2 V5 A2 2 0 0 1 5 3 H12.2 A2 2 0 0 1 13.6 3.6 L20.4 10.4 A2 2 0 0 1 20.4 13.2 L13.2 20.4 A2 2 0 0 1 10.4 20.4 L3.6 13.6 A2 2 0 0 1 3 12.2 Z" {...s} />
        <Circle cx={7.5} cy={7.5} r={1.4} {...s} />
      </>)
    case 'chart':
      return Wrap(<>
        <Path d="M4 20.5 H20" {...s} />
        <Rect x={5.5} y={12} width={3.2} height={7} rx={0.6} {...s} />
        <Rect x={10.4} y={8} width={3.2} height={11} rx={0.6} {...s} />
        <Rect x={15.3} y={14.5} width={3.2} height={4.5} rx={0.6} {...s} />
      </>)
    case 'stopwatch':
      return Wrap(<>
        <Circle cx={12} cy={13.5} r={7.5} {...s} />
        <Path d="M9.5 3 H14.5" {...s} />
        <Path d="M12 3 V6" {...s} />
        <Path d="M18.6 6.6 L20 5.2" {...s} />
        <Path d="M12 13.5 V9.5" {...s} />
      </>)
    case 'edit':
      return Wrap(<>
        <Path d="M4 20 L4.8 16.2 L16 5 A1.6 1.6 0 0 1 18.3 5 L19 5.7 A1.6 1.6 0 0 1 19 8 L7.8 19.2 Z" {...s} />
        <Path d="M14.5 6.5 L17.5 9.5" {...s} />
      </>)
    case 'baby':
      return Wrap(<>
        <Circle cx={12} cy={12.5} r={7.5} {...s} />
        <Path d="M12 5 A2 2 0 0 1 14 7" {...s} />
        <Circle cx={9.5} cy={11.5} r={0.9} fill={color} />
        <Circle cx={14.5} cy={11.5} r={0.9} fill={color} />
        <Path d="M9.5 15 A3 3 0 0 0 14.5 15" {...s} />
      </>)
    case 'family':
      return Wrap(<>
        <Circle cx={8.5} cy={8} r={3} {...s} />
        <Path d="M3.5 19.5 C3.5 14.8 13.5 14.8 13.5 19.5" {...s} />
        <Circle cx={16.5} cy={9.5} r={2.4} {...s} />
        <Path d="M13 19.5 C13 15.8 20.5 15.8 20.5 19.5" {...s} />
      </>)
    case 'book':
      return Wrap(<>
        <Path d="M6 3.5 H17.5 A1.5 1.5 0 0 1 19 5 V19 A1.5 1.5 0 0 1 17.5 20.5 H6 A2 2 0 0 1 4 18.5 V5.5 A2 2 0 0 1 6 3.5 Z" {...s} />
        <Path d="M8.5 3.5 V20.5" {...s} />
        <Path d="M13 3.5 V9.5 L14.75 8.1 L16.5 9.5 V3.5" {...s} />
      </>)
    case 'bulb':
      return Wrap(<>
        <Path d="M8 13.8 A6 6 0 1 1 16 13.8 C15 14.8 14.7 15.6 14.5 17 H9.5 C9.3 15.6 9 14.8 8 13.8 Z" {...s} />
        <Path d="M9.7 19.5 H14.3" {...s} />
        <Path d="M10.7 21.5 H13.3" {...s} />
      </>)
    case 'star':
      return Wrap(
        <Path d="M12 3 L14.6 8.6 L20.5 9.4 L16.2 13.6 L17.3 19.5 L12 16.6 L6.7 19.5 L7.8 13.6 L3.5 9.4 L9.4 8.6 Z" {...s} />
      )
    default:
      return null
  }
}
