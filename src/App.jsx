import { Routes, Route } from 'react-router'

// * Global components
import Navbar from './components/Nav/Nav.jsx'

// * Page component
import ActivityIndex from './components/ActivityIndex/ActivityIndex'
import ActivityShow from './components/ActivityShow/ActivityShow'
import ActivityCreate from './components/ActivityCreate/ActivityCreate.jsx'
import ActivityEdit from './components/ActivityUpdate/ActivityEdit.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'


// * Context
import { use, useContext } from 'react'
import { UserContext } from './contexts/UserContext.jsx'


// * App function
export default function App() {

  const { user } = useContext

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/activities" element={<ActivityIndex />} />
        <Route path="/activities/:activityId" element={<ActivityShow />} />
        <Route path="/activities/new" element={<ActivityCreate />} />
        <Route path="/activities/:activityId/edit" element={<ActivityEdit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )


}

