import { NavLink } from "react-router"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext.jsx"
import { removeToken } from "../../utils/auth"



export default function Navbar() {
  // * Context
  const { user, setUser } = useContext(UserContext)

  // * Sign out function
  const handleSignedOut = () => {
    removeToken()
    setUser(null)
  }

  // * Navbar
  return (
    <header>
      <nav>
        <NavLink to="/activities">Activities</NavLink>
        {user
          ? (
            <>
              {/* Singed in routes */}
              <NavLink to="/activities/new">Create activity</NavLink>
              <NavLink onClick={handleSignedOut} to="/login">Sign out</NavLink>
            </>
          )
          : (
            <>
              {/* Singed out routes */}
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )
        }
      </nav>
    </header>
  )
}