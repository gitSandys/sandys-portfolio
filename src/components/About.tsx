import type { ProfileInfo } from '../types'

interface AboutProps {
  profile: ProfileInfo
}

export default function About({ profile }: AboutProps) {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num mono">01</span>
          <h2 className="display">About</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>
              I'm an Information Security Engineer with <strong>{profile.yearsExperience} years</strong> of
              hands-on experience across web application security, penetration testing, and vulnerability
              research. My work centers on thinking like an attacker to find weaknesses before they can be
              exploited — then documenting them clearly enough that engineering teams can fix them fast.
            </p>
            <p>
              Alongside client and project work, I'm an active <strong>bug bounty hunter</strong>, researching
              and reporting web vulnerabilities through <strong>HackerOne</strong>, <strong>BugCrowd</strong> and <strong>Intigriti</strong> to
              organizations across fintech, retail, sports, healthtech, and education.
            </p>
          </div>
          <ul className="fact-list mono">
            <li><span>role</span><span>{profile.role}</span></li>
            <li><span>experience</span><span>{profile.yearsExperience} years</span></li>
            <li><span>platforms</span><span>HackerOne, Intigriti, BugCrowd</span></li>
            <li><span>location</span><span>{profile.location}</span></li>
            <li><span>focus</span><span>Web App Security</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
