import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="container flex justify-between items-center">
      <Link to="/">
        <h1 className="text-3xl font-medium">Josef.</h1>
      </Link>

      <nav>
        <ul className="flex gap-5 md:gap-7 items-center">
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="contact-btn">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
