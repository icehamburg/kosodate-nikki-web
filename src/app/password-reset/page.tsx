'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(
  'https://ffoytpupnzpuhaoopobc.supabase.co',
  'sb_publishable_kRfh0DGzBLsHN4MbVls8og_86dpMpt4'
)

export default function PasswordResetPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [sessionReady, setSessionReady] = useState(false)
  const [sessionError, setSessionError] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) {
      setSessionError(true)
      return
    }

    const params = new URLSearchParams(hash.substring(1))
    const accessToken = params.get('access_token')
    const refreshToken = params.get('refresh_token')

    if (accessToken && refreshToken) {
      supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken })
        .then(({ error }) => {
          if (error) {
            setSessionError(true)
          } else {
            setSessionReady(true)
          }
        })
    } else {
      setSessionError(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password.length < 6) {
      setError('パスワードは6文字以上にしてください')
      return
    }
    if (password !== confirmPassword) {
      setError('パスワードが一致しません')
      return
    }

    setLoading(true)
    const { error } = await supabase.auth.updateUser({ password })
    setLoading(false)

    if (error) {
      setError('パスワードの更新に失敗しました。もう一度お試しください。')
    } else {
      setDone(true)
    }
  }

  return (
    <>
      <style>{`
        .page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; background: #FFF9F7; }
        .wrapper { width: 100%; max-width: 420px; text-align: center; }
        .card { background: #fff; border-radius: 24px; padding: 48px 40px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        .icon-box { width: 80px; height: 80px; background: #FFF9F7; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 24px; }
        .card h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; }
        .card .desc { color: #636E72; margin-bottom: 32px; line-height: 1.8; font-size: 0.95rem; }
        .form { display: flex; flex-direction: column; gap: 16px; text-align: left; }
        .form label { font-size: 0.85rem; font-weight: 600; color: #2D3436; margin-bottom: 4px; display: block; }
        .form input { width: 100%; padding: 14px 16px; border: 2px solid #eee; border-radius: 12px; font-size: 1rem; outline: none; transition: border-color 0.2s; box-sizing: border-box; }
        .form input:focus { border-color: #D97757; }
        .btn { width: 100%; padding: 16px; background: #D97757; color: #fff; border: none; border-radius: 14px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 0 #C4684A; margin-top: 8px; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 6px 0 #C4684A; }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: 0 4px 0 #C4684A; }
        .error { background: #FFF5F5; color: #E74C3C; padding: 12px 16px; border-radius: 12px; font-size: 0.9rem; text-align: center; }
        .steps { background: #FFF9F7; border-radius: 16px; padding: 20px; margin-bottom: 32px; text-align: left; }
        .steps p { font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; }
        .steps ol { font-size: 0.9rem; color: #636E72; padding-left: 20px; }
        .steps li { margin-bottom: 6px; }
        .link { color: #D97757; font-weight: 700; font-size: 0.9rem; }
        .link:hover { text-decoration: underline; }
        .copy { margin-top: 24px; font-size: 0.75rem; color: #636E72; }
      `}</style>
      <div className="page">
        <div className="wrapper">
          <div className="card">
            <div className="icon-box">🔐</div>
            <h1>パスワードリセット</h1>

            {sessionError ? (
              <>
                <p className="desc">
                  リンクの有効期限が切れているか、無効なリンクです。<br />
                  アプリからもう一度パスワードリセットをお試しください。
                </p>
                <Link href="/" className="link">トップページへ</Link>
              </>
            ) : !sessionReady ? (
              <p className="desc">読み込み中...</p>
            ) : done ? (
              <>
                <p className="desc">
                  パスワードの更新が完了しました！<br />
                  アプリに戻って新しいパスワードでログインしてください。
                </p>
                <p style={{ color: '#636E72', fontSize: '0.95rem', lineHeight: 1.8 }}>この画面を閉じて、<br />アプリに戻ってログインしてください。</p>
              </>
            ) : (
              <>
                <p className="desc">新しいパスワードを入力してください。</p>
                <form className="form" onSubmit={handleSubmit}>
                  {error && <div className="error">{error}</div>}
                  <div>
                    <label>新しいパスワード</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="6文字以上"
                      autoComplete="new-password"
                    />
                  </div>
                  <div>
                    <label>パスワード（確認）</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="もう一度入力"
                      autoComplete="new-password"
                    />
                  </div>
                  <button type="submit" className="btn" disabled={loading}>
                    {loading ? '更新中...' : 'パスワードを更新'}
                  </button>
                </form>
              </>
            )}
          </div>
          <p className="copy">© 2025 子育て日記</p>
        </div>
      </div>
    </>
  )
}
