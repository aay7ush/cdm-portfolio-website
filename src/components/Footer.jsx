import { Github, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="container flex justify-between">
      <p>&copy; Copyright {new Date().getFullYear()}. All Rights Reserved.</p>

      <div className="flex gap-5">
        <a href="/">
          <Github size={'1.7rem'} />
        </a>
        <a href="/">
          <Twitter size={'1.7rem'} />
        </a>
        <a href="/">
          <Instagram size={'1.7rem'} />
        </a>
      </div>
    </footer>
  )
}
export default Footer
