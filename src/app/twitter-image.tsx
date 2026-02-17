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
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FFF9F7 0%, #FFE8DD 50%, #FFF9F7 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(217, 119, 87, 0.08)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -40,
            width: 250,
            height: 250,
            borderRadius: '50%',
            background: 'rgba(217, 119, 87, 0.06)',
            display: 'flex',
          }}
        />

        {/* App icon */}
        <div
          style={{
            width: 120,
            height: 120,
            background: 'linear-gradient(135deg, #D97757 0%, #FFB088 100%)',
            borderRadius: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 64,
            boxShadow: '0 8px 24px rgba(217, 119, 87, 0.3)',
            marginBottom: 32,
          }}
        >
          📔
        </div>

        {/* App name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#2D3436',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          子育て日記
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#636E72',
            marginBottom: 40,
            display: 'flex',
          }}
        >
          赤ちゃんの成長をかんたん記録
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: 'flex',
            gap: 16,
          }}
        >
          {['🍼 授乳記録', '⏱️ タイマー', '📅 タイムライン', '📊 まとめ', '📝 日記'].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: '#fff',
                  border: '2px solid #D97757',
                  color: '#D97757',
                  padding: '12px 24px',
                  borderRadius: 50,
                  fontSize: 20,
                  fontWeight: 600,
                  display: 'flex',
                  boxShadow: '0 2px 8px rgba(217, 119, 87, 0.1)',
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
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
