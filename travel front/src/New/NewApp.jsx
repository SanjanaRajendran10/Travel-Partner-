import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NewNav from './NewNav'
// import Home from '../components/Home'
// import NewHome from './NewHome'
import About from './About'
import NewProfile from './NewProfile'
import { AuthProvider}  from './Auth';
// import Login from '../components/Login'
import NewLogin from './NewLogin'
import {RequNew} from './RequNew'
import Signup from './signup/Signup'
import Page from './pages/Page'
import Error from './pages/Error'
import Couples from './userspage/Couples'
import Family from './userspage/Family'
import Friends from './userspage/Friends'
const LazyHome=React.lazy(()=> import('./NewHome'))

const NewApp = () => {



  return (
    <AuthProvider>
        <NewNav/>
        <Routes>

            <Route path='/' element={<React.Suspense fallback="Loading"> <LazyHome/></React.Suspense>} />
            <Route path='/about' element={<About/>} />
            <Route path='/profile' element={<RequNew><NewProfile/></RequNew>} />
            <Route path='/login' element={<NewLogin/>} />
            <Route path='/singup' element={<Signup/>}/>
            <Route path='/page' element={<Page/>}/>
            <Route path='/couples' element={ <RequNew> <Couples/> </RequNew>}/>
            <Route path='/family' element={ <RequNew><Family/></RequNew>}/>
            <Route path='/friends' element={ <RequNew><Friends/> </RequNew>}/>
            <Route path='*' element={ <Error/>}/>
        </Routes>
      
    </AuthProvider>
  )
}

export default NewApp
