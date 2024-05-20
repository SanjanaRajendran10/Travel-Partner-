// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import{Routes,Route} from "react-router-dom"
import Home from './components/Home'
// import About from './components/About'
import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import Services from './components/Services'
import Order from './components/Order'
import Nomatch from './components/Nomatch'
import New from './components/New'
import Old from './components/Old'
import User from './components/User'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import  { AuthProvider } from './components/Auth'
import Login from './components/Login'
// import Auth from './components/Auth'

const LazyAbout = React.lazy(()=> import ('./components/About'))
function App() {
  
  return (
  <AuthProvider>
  <Navbar/>

  <Routes>
    
<Route path='/' element={<Home/>}/> 
<Route path='/about' element={ <React.Suspense fallback='...loading'> <LazyAbout/></React.Suspense>}/>
<Route path='/contacts' element={<Contacts/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/login' element={<Login/>}/>


<Route path='/order-place' element={<Order/>}> 
<Route path='new'  element={<New/>}/>
<Route path='old' element={<Old/>}/>
</Route>

<Route path='/users' element={<User/>}>
  <Route path=':userID' element={<UserDetails/>}/>
  <Route path='admin' element={<Admin/>}/>
   </Route>

<Route path='/' element={<Home/>}/>
<Route path='*' element={<Nomatch/>}/>

</Routes>
</AuthProvider>

  )
}

export default App
