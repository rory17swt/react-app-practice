import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { editActivity, getSingleActivity } from "../../services/activities";


export default function ActivityEdit() {
    // * States
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        duration: '',
    })

    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    // * Varibles
    const { activityId } = useParams()
    const navigate = useNavigate()


    // * Form function
    const handleInputChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            await editActivity(activityId, formData)
            navigate(`/activities/${activityId}`)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    // * useEffect
    useEffect(() => {
        async function getActivityData() {
            try {
                const { data } = await getSingleActivity(activityId)
                setFormData(data)
            } catch (error) {
                console.log(error)
                throw error
            }
        }
        getActivityData()
    }, [activityId])


    // * Form
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Edit an Activity!</h1>

                {/* Title */}
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        onChange={handleInputChange}
                        value={formData.title}
                        required
                    />
                    {error.title && <p>{error.title}</p>}
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description">Description: </label>
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Tell us about your activity"
                        onChange={handleInputChange}
                        value={formData.description}>
                    </textarea>
                    {error.description && <p>{error.description}</p>}
                </div>

                {/* Location */}
                <div>
                    <label htmlFor="location">Location: </label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Edinburgh, Scotland"
                        onChange={handleInputChange}
                        value={formData.location}
                    />
                    {error.location && <p>{error.location}</p>}
                </div>

                {/* Duration */}
                <div>
                    <label htmlFor="duration">Duration(mins): </label>
                    <input
                        type="number"
                        name="duration"
                        id="duration"
                        placeholder="60"
                        onChange={handleInputChange}
                        value={formData.duration}
                    />
                    {error.duration && <p>{error.duration}</p>}
                </div>

                {/* Submit */}
                <button type="submit">Update Activity</button>
            </form>
        </>
    )

}