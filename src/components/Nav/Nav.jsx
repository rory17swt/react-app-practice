import { NavLink } from "react-router"


export default function Navbar() {
  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <nav>
        <a href="/activities">Activities</a>
      </nav>
    </header>
  )
}