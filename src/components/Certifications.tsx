import type { Certification } from '../types'

interface CertificationsProps {
  certifications: Certification[]
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications">
      <div className="wrap">
        <div className="section-head">
          <span className="section-num mono">04</span>
          <h2 className="display">Certifications</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.code}>
              <span className="cert-badge mono">{cert.code}</span>
              <h3>{cert.name}</h3>
              <p className="mono">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
