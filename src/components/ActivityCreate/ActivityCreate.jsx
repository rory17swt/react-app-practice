import { useState } from "react";
import { createActivity } from "../../services/activities";
import { Navigate, useNavigate } from "react-router";


export default function ActivityCreate() {
    // * States 
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        duration: ''
    })

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // * Varibles
    const navigate = useNavigate()


    // * Form functions
    async function handleInputChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        try {
            const { data } = await createActivity(formData)
            navigate(`/activities/${data._id}`)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    // * Form
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Add an Activity!</h1>

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
                <button type="submit">Add Activity</button>
            </form>
        </>
    )

}