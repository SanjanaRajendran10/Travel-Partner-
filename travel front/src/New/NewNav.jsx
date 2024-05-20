// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
import './nav.css'

const NewNav = () => {
    const auth=useAuth()
  return (
    <>
        <nav className='d-flex navbar'>
          <h1><Link to='/'>TP</Link></h1>
         <ul>
          <li>  <NavLink to="/"> Home</NavLink></li>
          <li> <NavLink to="/about"> About</NavLink></li>
           <li> <NavLink to="/profile"> Profile</NavLink></li>
        
           <li>    {auth.admin&&
           <NavLink to="/page"> admin use</NavLink>}</li>
           </ul>

<ul>
           <li> {(!auth.user)&&
            <NavLink to='/login'>Login</NavLink>
            }</li>

            <li><NavLink to='singup'>SingUp</NavLink></li>
            </ul>
          
        </nav>
      
    </>
  )
}

export default NewNav
