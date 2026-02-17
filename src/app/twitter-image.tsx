import { ImageResponse } from 'next/og'

export const alt = '子育て日記 - 赤ちゃんの成長をかんたん記録'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(180deg, #FFF9F7 0%, #fff 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #D97757 0%, #FFB088 100%)',
            opacity: 0.08,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFB088 0%, #D97757 100%)',
            opacity: 0.06,
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 80px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: '#fff',
              border: '2px solid #D97757',
              color: '#D97757',
              padding: '10px 24px',
              borderRadius: 50,
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 32,
            }}
          >
            ✨ 無料の育児記録アプリ
          </div>

          {/* App icon + title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                background: 'linear-gradient(135deg, #D97757 0%, #FFB088 100%)',
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 40,
                boxShadow: '0 4px 12px rgba(217, 119, 87, 0.25)',
              }}
            >
              📔
            </div>
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: '#D97757',
                display: 'flex',
              }}
            >
              子育て日記
            </div>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#2D3436',
              lineHeight: 1.3,
              textAlign: 'center',
              marginBottom: 24,
              display: 'flex',
            }}
          >
            毎日の成長をかんたん記録
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: '#636E72',
              textAlign: 'center',
              marginBottom: 40,
              display: 'flex',
            }}
          >
            授乳・おむつ・睡眠をワンタップで記録。忙しい育児中でもサッと使えます。
          </div>

          {/* Feature icons row */}
          <div
            style={{
              display: 'flex',
              gap: 20,
            }}
          >
            {[
              { icon: '🍼', label: 'ワンタップ記録' },
              { icon: '⏱️', label: '授乳タイマー' },
              { icon: '📅', label: 'タイムライン' },
              { icon: '📊', label: 'まとめ' },
              { icon: '📝', label: '日記' },
              { icon: '🌙', label: 'ダークモード' },
            ].map((f) => (
              <div
                key={f.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    background: '#FFF9F7',
                    borderRadius: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                >
                  {f.icon}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: '#636E72',
                    fontWeight: 500,
                    display: 'flex',
                  }}
                >
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            background: 'linear-gradient(90deg, #D97757 0%, #FFB088 100%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
