import { useState, useContext } from "react"
import { Navigate, useNavigate } from "react-router"
import { login } from "../../services/auth.js"
import { setToken, getUserFromToken } from "../../utils/auth.js"
import { UserContext } from '../../contexts/UserContext.jsx'


export default function Login() {
    // * Context
    const { user, setUser } = useContext(UserContext)

    // * States
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    // * Varibles
    const navigate = useNavigate()


    // * Functions 
     async function handleInputChange(event) {
            setFormData({ ...formData, [event.target.name]: event.target.value })
        }
    
        async function handleSubmit(event) {
            event.preventDefault()
            setIsLoading(true)
            try {
                const { data } = await login(formData)
                // Set token from the respones to storage
                setToken(data.token)
                // Set the user object inside thye token to the user
                setUser(getUserFromToken())
                navigate('/activities')
            } catch (error) {
                setError(error.response.data)
            } finally {
                setIsLoading(false)
            }
        }

        if(user) {
            return <Navigate to="/" />
        }


    // * Form
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            {/* Email */}
            <div>
                <label htmlFor="email">Email adress </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@123.com"
                    onChange={handleInputChange}
                    value={formData.email}
                    required
                />
                {error.email && <p>{error.email}</p>}
            </div>

            {/* Password */}
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={formData.password}
                    required
                />
                {error.password && <p>{error.password}</p>}
            </div>

            {/* Submit */}
            <button type="submit">
            {isLoading ? 'Loading...' : 'Login'}
            </button>
        </form>
    )
}