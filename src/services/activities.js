import axios from 'axios'

// * Base API import
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAllActivites = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/activities`)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getSingleActivity = async (activityId) => {
  try {
    const response = await axios.get(`${BASE_URL}/activities/${activityId}`)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}