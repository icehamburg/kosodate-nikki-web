'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Shot = { src: string; label: string; alt: string }

// 横に送るスクショ。送るボタンと、どこまで見たかのバー（スクロール連動）を付ける。
export default function Gallery({ shots }: { shots: Shot[] }) {
  const track = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const update = () => {
      const max = el.scrollWidth - el.clientWidth
      const p = max > 0 ? el.scrollLeft / max : 1
      setProgress(p)
      setAtStart(el.scrollLeft < 4)
      setAtEnd(el.scrollLeft > max - 4)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const step = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const item = el.querySelector<HTMLElement>('.shot')
    const w = item ? item.offsetWidth + 16 : el.clientWidth * 0.8
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * w, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="gallery">
      <div className="gallery-track" ref={track} tabIndex={0} aria-label={`アプリの画面 ${shots.length}枚（横にスクロールできます）`}>
        {shots.map((s) => (
          <figure key={s.src} className="shot">
            <Image src={s.src} alt={s.alt} width={860} height={1868} sizes="(max-width: 600px) 64vw, 230px" />
            <figcaption>{s.label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="gallery-bar">
        <div className="gallery-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${0.12 + progress * 0.88})` }} />
        </div>
        <div className="gallery-btns">
          <button type="button" className="btn-round" onClick={() => step(-1)} disabled={atStart} aria-label="前の画面へ">←</button>
          <button type="button" className="btn-round" onClick={() => step(1)} disabled={atEnd} aria-label="次の画面へ">→</button>
        </div>
      </div>
    </div>
  )
}
