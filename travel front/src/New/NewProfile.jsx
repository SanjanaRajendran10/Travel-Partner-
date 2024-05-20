import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const NewProfile = () => {
    const auth=useAuth()
    const navigate =useNavigate()
    const handleLogout=()=>{
         auth.adlogout()
        auth.logout()
        navigate('/')
    }
  return (
    <div>
      Wellcome {auth.user} {auth.admin}
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default NewProfile
