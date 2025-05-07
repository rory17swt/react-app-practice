import axios from 'axios'

// * Base API import
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAllActivites = async () => {
  try {
    return await axios.get(`${BASE_URL}/activities`)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getSingleActivity = async (activityId) => {
  try {
    return await axios.get(`${BASE_URL}/activities/${activityId}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const createActivity = async (formData) => {
  try {
    return await axios.post(`${BASE_URL}/activities`, formData)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const editActivity = async (activityId, formData) => {
  try {
    return await axios.put(`${BASE_URL}/activities/${activityId}`, formData)
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Delete
export const deleteActivity = async (activityId) => {
  try {
    return await axios.delete(`${BASE_URL}/activities/${activityId}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}