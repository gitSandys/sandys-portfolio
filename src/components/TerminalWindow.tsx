import type { ReactNode } from 'react'

interface TerminalWindowProps {
  filename: string
  children: ReactNode
  className?: string
}

export default function TerminalWindow({ filename, children, className }: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className ?? ''}`}>
      <div className="terminal-titlebar">
        <div className="terminal-dots" aria-hidden="true">
          <span className="dot dot-a" />
          <span className="dot dot-b" />
          <span className="dot dot-c" />
        </div>
        <span className="terminal-filename mono">{filename}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  )
}
