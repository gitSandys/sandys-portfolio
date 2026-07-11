import type { Engagement, EngagementStatus } from '../types'

interface ExperienceProps {
  engagements: Engagement[]
  yearsExperience: number
}

const statusClass: Record<EngagementStatus, string> = {
  Resolved: 'status-resolved',
  Triaged: 'status-triaged',
  Disclosed: 'status-disclosed',
}

export default function Experience({ engagements, yearsExperience }: ExperienceProps) {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num mono">05</span>
          <h2 className="display">Bug Bounty Experience</h2>
        </div>
        <p className="section-intro">
          {yearsExperience} years of independent security research, finding and responsibly disclosing web
          vulnerabilities to the following programs.
        </p>
        <div className="engagement-list">
          {engagements.map((eng) => (
            <div className="engagement-card" key={eng.company}>
              <div className="engagement-top">
                <h3>{eng.company}</h3>
                <span className={`status-chip mono ${statusClass[eng.status]}`}>{eng.status}</span>
              </div>
              <div className="engagement-meta mono">
                
                <span>scope: {eng.scope}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
