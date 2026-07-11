import type {
  SkillCategory,
  Tool,
  Certification,
  Engagement,
  ProfileInfo,
} from '../types'

export const profile: ProfileInfo = {
  name: 'Sandys Msagha',
  role: 'Information Security Engineer',
  phone: '0745030087',
  email: 'sandymsagha123@gmail.com',
  location: 'Kenya',
  yearsExperience: 3,
  summary:
    'Information Security Engineer with 3 years of experience in offensive security, web application testing, and vulnerability research. Active bug bounty hunter on HackerOne and Intigriti, focused on identifying and responsibly disclosing web vulnerabilities to organizations.',
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'websec',
    title: 'Web Application Security',
    items: [
      'Cross-Site Scripting (XSS)',
      'SQL Injection',
      'Cross-Site Request Forgery (CSRF)',
      'Server-Side Request Forgery (SSRF)',
      'Insecure Direct Object References (IDOR)',
      'Authentication & session management flaws',
    ],
  },
  {
    id: 'pentest',
    title: 'Penetration Testing',
    items: [
      'Web application penetration testing',
      'Network penetration testing',
      'Manual exploitation & post-exploitation',
      'Privilege escalation techniques',
    ],
  },
  {
    id: 'vuln',
    title: 'Vulnerability Assessment',
    items: [
      'Automated & manual vulnerability scanning',
      'Risk scoring and CVSS analysis',
      'Remediation guidance & reporting',
    ],
  },
  {
    id: 'netsec',
    title: 'Network Security',
    items: [
      'Network reconnaissance & mapping',
      'Traffic analysis',
      'Firewall & access control review',
    ],
  },
]

export const tools: Tool[] = [
  { name: 'Burp Suite', command: 'burpsuite', description: 'Web proxy for intercepting, testing, and exploiting web application traffic.' },
  { name: 'Metasploit', command: 'msfconsole', description: 'Exploitation framework for developing and executing attack payloads.' },
  { name: 'Kali Linux', command: 'uname -a', description: 'Primary penetration testing operating system and toolset.' },
  { name: 'Nmap', command: 'nmap -sV', description: 'Network scanning and service enumeration.' },
  { name: 'Wireshark', command: 'wireshark', description: 'Packet capture and network traffic analysis.' },
  { name: 'OWASP ZAP', command: 'zap.sh', description: 'Automated web application vulnerability scanning.' },
  { name: 'Nessus', command: 'nessusd', description: 'Vulnerability scanning and infrastructure assessment.' },
  { name: 'John the Ripper', command: 'john', description: 'Password strength testing and hash cracking.' },
]

export const certifications: Certification[] = [
  { name: 'CompTIA Security+', issuer: 'CompTIA', code: 'SEC+' },
  { name: 'CompTIA Network+', issuer: 'CompTIA', code: 'NET+' },
  { name: 'CompTIA PenTest+', issuer: 'CompTIA', code: 'PT+' },
]

// Bug bounty programs engaged with — max 10 companies, as supplied.
export const engagements: Engagement[] = [
  { company: 'Kohls', platform: 'HackerOne', scope: 'Web Application', status: 'Resolved' },
  { company: 'Khealth', platform: 'HackerOne', scope: 'Web Application', status: 'Resolved' },
  { company: 'NBA', platform: 'HackerOne', scope: 'Web Application', status: 'Triaged' },
  { company: 'Intigriti', platform: 'Intigriti', scope: 'Web Application', status: 'Resolved' },
  { company: 'Mobile Vikings', platform: 'HackerOne', scope: 'Web Application', status: 'Resolved' },
  { company: 'Argenta', platform: 'HackerOne', scope: 'Web Application', status: 'Disclosed' },
  { company: 'Class Dojo', platform: 'HackerOne', scope: 'Web Application', status: 'Resolved' },
]
