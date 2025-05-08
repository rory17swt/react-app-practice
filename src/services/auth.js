import axios from 'axios'

// * Base API import
const BASE_URL = import.meta.env.VITE_API_BASE_URL


// Register
export const register = async(formData) => {
    try {
      return await axios.post(`${BASE_URL}/register`, formData)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

// Login
export const login = async(formData) => {
  try {
    return await axios.post(`${BASE_URL}/login`, formData)
  } catch (error) {
    console.log(error)
    throw error
  }
}