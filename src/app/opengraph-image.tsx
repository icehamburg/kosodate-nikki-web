import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = '子育て日記 - 話すだけで、記録になる育児日記アプリ'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OGImage() {
  const iconData = await readFile(join(process.cwd(), 'public/app-icon.png'))
  const iconSrc = `data:image/png;base64,${iconData.toString('base64')}`

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
        {/* Background decoration - same as LP hero */}
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
          {/* Badge - same as LP hero-badge */}
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
              letterSpacing: '0.02em',
            }}
          >
            NEW ・ 話すだけ記録
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
            <img
              src={iconSrc}
              width={72}
              height={72}
              style={{
                borderRadius: 20,
                boxShadow: '0 4px 12px rgba(217, 119, 87, 0.25)',
              }}
            />
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

          {/* Headline - same as LP hero */}
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
            話すだけで、記録になる。
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 22,
              color: '#636E72',
              textAlign: 'center',
              marginBottom: 40,
              display: 'flex',
            }}
          >
            AIが記録を自動で作成。夫婦・家族での共有にも対応。
          </div>

          {/* Feature chips row - like LP feature cards, text only (no emoji) */}
          <div
            style={{
              display: 'flex',
              gap: 16,
            }}
          >
            {[
              '話すだけ記録',
              '夫婦・家族共有',
              'Watch単体記録',
              'PDF出力',
            ].map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#FFF9F7',
                  borderRadius: 50,
                  padding: '10px 20px',
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#D97757',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar - same as LP */}
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
