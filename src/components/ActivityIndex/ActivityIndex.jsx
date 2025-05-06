
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

// Service function
import { getAllActivites } from '../../services/activities'

export default function ActivityIndex(){
  // * State
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // * On component mount (on the first render of the page)
  useEffect(() => {
    async function getActivities(){
      try {
        const { data } = await getAllActivites()
        setActivities(data)
      } catch {
        setError('Failed to fetch activity data. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    getActivities()
  }, [])


  // 1. If there is an error, display it
  // 2. If there is no error, but loading is true, display loading icon
  // 3. If there is no error, loading is false, display data

  return (
    <>
      <h1>Activities</h1>
      <section className="activity-list">
        {error 
          ? <p className='error-message'>{error}</p>
          : loading
            ? <p>Loading...</p>
            : activities.length > 0
              ? activities.map(activity => (
                <Link key={activity._id} to={`/activities/${activity._id}`}>
                  <article>
                    <h2>{activity.title}</h2>
                  </article>
                </Link>
              ))
              : <p>No activities found</p>
        }
      </section>
    </>
  )
}