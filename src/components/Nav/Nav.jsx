import { NavLink } from "react-router"


export default function Navbar() {
  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <nav>
      <NavLink to="/activities/new">Create activity</NavLink>
      <NavLink to="/activities">Activities</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/Login">Login</NavLink>
      </nav>
    </header>
  )
}