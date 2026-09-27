'use client'

import { useRef, useState } from 'react'

// 標準のコントロール（シークバー等）は出さず、動画全面を再生/一時停止のボタンにする。
// 停止中だけ中央に ▶ を出す
export function ShowcaseClip({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
    } else {
      video.pause()
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        className="showcase-play"
        data-playing={playing}
        aria-label={playing ? '一時停止' : '再生'}
        onClick={toggle}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </>
  )
}
