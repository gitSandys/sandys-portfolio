# Sandys Msagha — Portfolio

A personal portfolio site for Sandys Msagha, Information Security Engineer, built with **React + TypeScript + Vite**.

## Sections

- **Hero** — animated terminal boot sequence with name, role, and contact info
- **About** — summary and quick facts
- **Skills** — categorized cybersecurity skills (web app security, pentesting, vulnerability assessment, network security)
- **Tools** — Burp Suite, Metasploit, Kali Linux, Nmap, Wireshark, OWASP ZAP, Nessus, John the Ripper
- **Certifications** — CompTIA Security+, Network+, PenTest+
- **Bug Bounty Experience** — engagements reported via HackerOne and Intigriti
- **Contact** — phone and email

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/` and can be deployed to any static host
(Vercel, Netlify, GitHub Pages, etc.).

## Editing content

All personal content (name, contact info, skills, tools, certifications, and
bug bounty engagements) lives in a single typed file:

```
src/data/content.ts
```

Update the arrays/objects there — the page re-renders automatically, no need
to touch component files.
