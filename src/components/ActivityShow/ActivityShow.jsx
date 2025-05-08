import { Link, useParams } from 'react-router'
import { getSingleActivity } from '../../services/activities.js'
import useFetch from '../../hooks/useFetch.js'
import { UserContext } from '../../contexts/UserContext.jsx'
import { useContext } from 'react'

// * Components
import ActivityDelete from '../ActivityDelete/ActivityDelete.jsx'

export default function ActivityShow() {
  // * useParams
  const { activityId } = useParams()

  // * States
 const { data: activity, isLoading, error} = useFetch(
  () => getSingleActivity(activityId), // service function
  {} // initial data value
 )

  
  // * Render to UI
  return (
    <>
      {error
        ? <p>{error}</p>
        : isLoading
          ? <p>Loading...</p>
          : (
            <section>
              <h1>{activity.title}</h1>
              <h2>{activity.location}</h2>
              <p>{activity.description}</p>
              <p>{activity.duration} minutes</p>
              <Link to={`/activities/${activityId}/edit`}>Edit</Link>
              <ActivityDelete />
            </section>
          )
      }
    </>
  )
}