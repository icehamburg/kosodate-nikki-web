'use client'

import { useEffect } from 'react'

// LPの動き（入場・ヘッダーの縮み）をまとめて受け持つ。表示内容は持たない。
// JSが動かない／reduced-motion のときは何もしない＝最初から全部見えている。
export default function LpMotion() {
  useEffect(() => {
    const root = document.documentElement
    const header = document.querySelector<HTMLElement>('[data-header]')

    // スクロールでヘッダーを小さく・すりガラスに
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        header?.toggleAttribute('data-scrolled', window.scrollY > 8)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let io: IntersectionObserver | undefined
    if (!reduce && 'IntersectionObserver' in window) {
      const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
      // 最初から画面内にあるものは隠さない（ちらつき防止）
      const vh = window.innerHeight
      targets.forEach((el) => {
        if (el.getBoundingClientRect().top > vh * 0.92) el.setAttribute('data-hidden', '')
      })
      root.classList.add('motion-ready')
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.removeAttribute('data-hidden')
              io?.unobserve(e.target)
            }
          })
        },
        { rootMargin: '0px 0px -8% 0px' }
      )
      targets.forEach((el) => el.hasAttribute('data-hidden') && io?.observe(el))
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      io?.disconnect()
    }
  }, [])

  return null
}
