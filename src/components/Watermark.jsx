import { useEffect, useMemo, useState } from 'react'
import './Watermark.css'

function drawWatermarkDataUrl({
  text = 'WATERMARK',
  fontSize = 16,
  fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, "Apple Color Emoji", "Segoe UI Emoji"',
  color = '0,0,0',
  opacity = 0.08,
  angle = -22,
  gap = 140
}) {
  const radians = (angle * Math.PI) / 180
  const tileWidth = gap * 2
  const tileHeight = gap * 1.5
  const canvas = document.createElement('canvas')
  canvas.width = tileWidth
  canvas.height = tileHeight
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''

  ctx.clearRect(0, 0, tileWidth, tileHeight)

  ctx.save()
  ctx.translate(tileWidth / 2, tileHeight / 2)
  ctx.rotate(radians)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = `${fontSize}px ${fontFamily}`
  ctx.fillStyle = `rgba(${color}, ${opacity})`
  ctx.fillText(text, 0, 0)
  ctx.restore()

  return canvas.toDataURL('image/png')
}

export default function Watermark({
  text = 'For Internal Use Only',
  opacity = 0.08,
  angle = -22,
  gap = 140,
  size = 16,
  color = '0,0,0',
  className = ''
}) {
  const [dataUrl, setDataUrl] = useState('')

  const options = useMemo(
    () => ({
      text,
      opacity,
      angle,
      gap,
      fontSize: size,
      color
    }),
    [text, opacity, angle, gap, size, color]
  )

  useEffect(() => {
    const url = drawWatermarkDataUrl(options)
    setDataUrl(url)
  }, [options])

  return (
    <div
      className={`wm-overlay ${className}`}
      style={{
        backgroundImage: dataUrl ? `url(${dataUrl})` : 'none'
      }}
      aria-hidden="true"
    />
  )
}


