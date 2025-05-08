import { useState } from "react"
import { useNavigate } from "react-router"
import { login } from "../../services/auth.js"
import { setToken } from "../../utils/auth.js"

export default function Login() {
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
                setToken(data.token)
                navigate('/activities')
            } catch (error) {
                setError(error.response.data)
            } finally {
                setIsLoading(false)
            }
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