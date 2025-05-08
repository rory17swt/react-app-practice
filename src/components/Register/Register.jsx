import { useState } from "react";
import { register } from "../../services/auth.js";
import { useNavigate } from "react-router";


export default function Register() {
    // * States
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
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
            const { data } = await register(formData)
            navigate('/login')
        } catch (error) {
            setError(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }


    // * Form
    return (
        <form onSubmit={handleSubmit}>
            <h1>Create an account</h1>

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

            {/* Username */}
            <div>
                <label htmlFor="username">Username </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="My username"
                    onChange={handleInputChange}
                    value={formData.username}
                    required
                />
                {error.username && <p>{error.username}</p>}
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

            {/* Password Confirmation */}
            <div>
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <input
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    placeholder="Confirm Password"
                    onChange={handleInputChange}
                    value={formData.passwordConfirmation}
                    required
                />
                {error.passwordConfirmation && <p>{error.passwordConfirmation}</p>}
            </div>

            {/* Submit */}
            <button type="submit">
            {isLoading ? 'Loading...' : 'Register'}
            </button>
        </form>
    )
}