import type { Tool } from '../types'

interface ToolsProps {
  tools: Tool[]
}

export default function Tools({ tools }: ToolsProps) {
  return (
    <section id="tools">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num mono">03</span>
          <h2 className="display">Tools</h2>
        </div>
        <div className="tools-list">
          {tools.map((tool) => (
            <div className="tool-row" key={tool.name}>
              <span className="tool-cmd mono">$ which {tool.command}</span>
              <span className="tool-name">{tool.name}</span>
              <span className="tool-desc">{tool.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
