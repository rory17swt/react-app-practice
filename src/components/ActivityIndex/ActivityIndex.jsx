
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

// * Function imports
import { getAllActivites } from '../../services/activities.js'
import useFetch from '../../hooks/useFetch.js'

export default function ActivityIndex() {
  // * States
  const { data: activities, isLoading, error } = useFetch(getAllActivites, [])
  

// * Render to UI
  return (
    <>
      <h1>Activities</h1>
      <section>
        {error 
          ? <p>{error}</p>
          : isLoading
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