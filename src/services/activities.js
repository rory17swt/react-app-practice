import axios from 'axios'
import { getToken } from '../utils/auth.js'

// * Base API import
const BASE_URL = import.meta.env.VITE_API_BASE_URL


// Index
export const getAllActivites = async() => {
  try {
    return await axios.get(`${BASE_URL}/activities`)
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Show
export const getSingleActivity = async(activityId) => {
  try {
    return await axios.get(`${BASE_URL}/activities/${activityId}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Create
export const createActivity = async(formData) => {
  try {
    return await axios.post(`${BASE_URL}/activities`, formData, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Edit
export const editActivity = async(activityId, formData) => {
  try {
    return await axios.put(`${BASE_URL}/activities/${activityId}`, formData, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Delete
export const deleteActivity = async(activityId) => {
  try {
    return await axios.delete(`${BASE_URL}/activities/${activityId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}