'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthRedirect() {
  const router = useRouter()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    // Parse hash fragment: #access_token=...&type=signup
    const params = new URLSearchParams(hash.substring(1))
    const type = params.get('type')

    if (type === 'signup') {
      router.replace('/email-confirmed')
    } else if (type === 'recovery') {
      // Pass hash fragment so password-reset page can restore the session
      router.replace('/password-reset' + hash)
    }
  }, [router])

  return null
}
