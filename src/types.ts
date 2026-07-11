export interface SkillCategory {
  id: string
  title: string
  items: string[]
}

export interface Tool {
  name: string
  command: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  code: string
}

export type EngagementStatus = 'Resolved' | 'Triaged' | 'Disclosed'

export interface Engagement {
  company: string
  platform: 'HackerOne' | 'Intigriti' | 'BugCrowd'
  scope: string
  status: EngagementStatus
}

export interface ProfileInfo {
  name: string
  role: string
  phone: string
  email: string
  location: string
  yearsExperience: number
  summary: string
}
