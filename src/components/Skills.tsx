import type { SkillCategory } from '../types'

interface SkillsProps {
  categories: SkillCategory[]
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num mono">02</span>
          <h2 className="display">Skills</h2>
        </div>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-card" key={cat.id}>
              <h3 className="mono">{cat.title}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
