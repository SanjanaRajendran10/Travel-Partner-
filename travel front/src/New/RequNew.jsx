// import React ,  from  'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

export const RequNew = ({children}) => {
    const auth =useAuth()


    if(!auth.user && !auth.admin){
    return  <Navigate to='/singup'/>
    }

  return children 
}


