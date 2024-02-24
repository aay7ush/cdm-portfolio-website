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
          <li className="px-3 py-0.5 border-2 transition duration-300 border-stone-800 hover:bg-stone-800 hover:text-white rounded-md font-medium">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
