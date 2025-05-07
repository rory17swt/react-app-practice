
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getSingleActivity } from '../../services/activities.js'

import useFetch from '../../hooks/useFetch.js'

export default function ActivityShow() {
  // * useParams
  const { activityId } = useParams()

  // * States
 const { data: activity, isLoading, error} = useFetch(
  () => getSingleActivity(activityId),
  {}
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
            </section>
          )
      }
    </>
  )
}