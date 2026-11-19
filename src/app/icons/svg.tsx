// react-native-svg の代わり。アプリ（kosodate-nikki-expo/components）のアイコンを
// ほぼそのまま Web で使うための薄い置き換え。アイコンは飾りなので読み上げから外す。
import type { SVGProps } from 'react'

export default function Svg(p: SVGProps<SVGSVGElement>) {
  return <svg aria-hidden="true" focusable="false" {...p} />
}
export const Path = (p: SVGProps<SVGPathElement>) => <path {...p} />
export const Circle = (p: SVGProps<SVGCircleElement>) => <circle {...p} />
export const Rect = (p: SVGProps<SVGRectElement>) => <rect {...p} />
export const Line = (p: SVGProps<SVGLineElement>) => <line {...p} />
export const Polyline = (p: SVGProps<SVGPolylineElement>) => <polyline {...p} />
