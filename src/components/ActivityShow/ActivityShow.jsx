
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getSingleActivity } from '../../services/activities'

export default function ActivityShow(){
  // * State
  const [activity, setActivity] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // * Params
  const { activityId } = useParams()

  // * Effects
  useEffect(() => {
    async function getActivity(){
      try {
        const { data } = await getSingleActivity(activityId)
        setActivity(data)
      } catch (error){
        if (error.status === 404) {
          setError('Activity not found!')
        } else {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }
    getActivity()
  }, [activityId])

  return (
    <>
      {error
        ? <p className='error-message'>{error}</p>
        : loading
          ? <p>Loading...</p>
          : (
            <section className="single-activity">
              <h1>{activity.title}</h1>
            </section>
          )
      }
    </>
  )
}