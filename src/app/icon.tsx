import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const iconData = await readFile(join(process.cwd(), 'public/app-icon.png'))
  const iconSrc = `data:image/png;base64,${iconData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        <img src={iconSrc} width={32} height={32} />
      </div>
    ),
    {
      ...size,
    }
  )
}
