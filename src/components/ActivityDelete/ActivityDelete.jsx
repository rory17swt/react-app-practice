import { useState } from "react"
import { deleteActivity } from "../../services/activities"
import { useNavigate, useParams } from "react-router"

// ** Look at **

export default function ActivityDelete() {
    // * State
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    // * Varibles
    const { activityId } = useParams()
    const navigate = useNavigate()

    // * Funtions
    async function handleDelete() {
        setIsLoading(true)
        try {
            await deleteActivity(activityId)
            navigate('/activities')
        } catch (error) {
            setError(error.response.data.message)
        } finally {
            setIsLoading(false)
        }
    }

    // * UI
    return (
        <>
            {error && <p>{error}</p>}
            <button onClick={handleDelete}>
                {isLoading ? 'Loading...' : 'Delete'}
            </button>
        </>
    )
}