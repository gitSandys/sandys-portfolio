interface FooterProps {
  name: string
}

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner mono">
        <span>© {new Date().getFullYear()} {name}</span>
        <span>status: available for engagements</span>
      </div>
    </footer>
  )
}
