import type { ProfileInfo } from '../types'

interface ContactProps {
  profile: ProfileInfo
}

export default function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-inner">
        <h2 className="display">Found a vulnerability worth reporting?<br />Let's talk.</h2>
        <ul className="contact-links">
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
