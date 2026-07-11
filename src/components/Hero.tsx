import { useEffect, useRef, useState } from 'react'
import type { ProfileInfo } from '../types'
import TerminalWindow from './TerminalWindow'

interface HeroProps {
  profile: ProfileInfo
}

const LINES: Array<{ prompt: string; output: string[] }> = [
  { prompt: 'whoami', output: ['Sandys Msagha'] },
  { prompt: 'cat role.txt', output: ['Information Security Engineer'] },
  {
    prompt: 'cat contact.txt',
    output: ['phone: 0745030087', 'email: sandymsagha123@gmail.com'],
  },
  {
    prompt: 'cat experience.log | tail -1',
    output: ['3 years — web app security, pentesting & bug bounty (HackerOne, Intigriti)'],
  },
]

export default function Hero({ profile }: HeroProps) {
  const [visibleLines, setVisibleLines] = useState(0)
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (prefersReducedMotion.current) {
      setVisibleLines(LINES.length)
      return
    }
    if (visibleLines >= LINES.length) return
    const timeout = setTimeout(() => {
      setVisibleLines((v) => v + 1)
    }, 550)
    return () => clearTimeout(timeout)
  }, [visibleLines])

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow mono">Information Security Engineer</div>
          <h1 className="display">
            Breaking web apps professionally, so companies can fix them first.
          </h1>
          <p className="lede">
            {profile.summary}
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#experience">View bug bounty work</a>
            <a className="btn btn-ghost" href="#contact">Contact me</a>
          </div>
        </div>

        <TerminalWindow filename="whoami.sh" className="hero-terminal">
          <div className="terminal-lines" role="status" aria-live="polite">
            {LINES.slice(0, visibleLines).map((line, i) => (
              <div className="terminal-line" key={i}>
                <div className="terminal-prompt mono">
                  <span className="prompt-user">sandys@infosec</span>
                  <span className="prompt-sep">:~$</span> {line.prompt}
                </div>
                {line.output.map((out, j) => (
                  <div className="terminal-output mono" key={j}>{out}</div>
                ))}
              </div>
            ))}
            {visibleLines < LINES.length && (
              <span className="terminal-cursor" aria-hidden="true" />
            )}
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}
