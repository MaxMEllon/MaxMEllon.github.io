import type { Metadata } from 'next'

import { ShowcaseClip } from '@/components/ShowcaseClip'

// 動画は X から落として public/showcase/<tweet id>.mp4 に置いている。
// ポスターは同名の .jpg（1 秒目のフレーム）
const CLIPS = [
  // 4 本付いたツイートの 4 本目
  { id: '2100261718899503347', caption: '#CULT_VRC' },
  { id: '2086865145930895432', caption: '#ZEN_0809' },
  { id: '2039007323805663696', caption: '' },
  // 元動画の 16 秒目から切り出している
  { id: '2035041081654747224', caption: '#rainymagic_vr' },
  // 4 本付いたツイートの 1 本目
  { id: '2055834793011814488', caption: '' },
  { id: '2033370883876860058', caption: '#syncspin1st' },
] as const

// DJ は YouTube のミックスを埋め込む。タイトルは埋め込み側に出るのでラベルは付けない
const MIXES = ['yrTBP5Cll3U', '3ns0kCG2rrY', 'jEUl_V7wmaI', 'RtLrj8bJBGk'] as const

export const metadata: Metadata = {
  title: 'showcase — melocil.de',
  description: 'めろちだ の VJ 映像と DJ ミックス',
  alternates: { canonical: '/showcase/' },
}

export default function ShowcasePage() {
  return (
    <main className="page page-wide">
      <header className="page-header">
        <h1>showcase</h1>
        <p className="tagline">
          <a href="/">melocil.de</a> — VJ / DJ
        </p>
      </header>

      <h2 className="showcase-title">VJ</h2>
      <ul className="showcase">
        {CLIPS.map((clip) => (
          <li key={clip.id}>
            <ShowcaseClip
              src={`/showcase/${clip.id}.mp4`}
              poster={`/showcase/${clip.id}.jpg`}
            />
            {clip.caption && (
              <a
                className="showcase-source"
                href={`https://x.com/zyzyzy_vl/status/${clip.id}`}
                target="_blank"
                rel="noreferrer"
              >
                {clip.caption}
              </a>
            )}
          </li>
        ))}
      </ul>

      <h2 className="showcase-title">DJ</h2>
      <ul className="showcase">
        {MIXES.map((id) => (
          <li key={id}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}`}
              title="YouTube"
              loading="lazy"
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
