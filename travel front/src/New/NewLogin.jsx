import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './Auth'
import Admin from './AdminSingup/Admin'
import './AdminSingup/admin.css'

const Login = () => {

    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[list,setList]=useState([])
    const[error,setError]=useState('')
    const [admin,setAdmin]=useState(false)
    const[buser,setBuser]=useState(true)

const navigate=useNavigate()

// useEffect(()=>{
//     axios.get(`http://localhost:6005/admin/get/${email}`)
//     .then(res=>setList(res.data))
//     .catch(err=>console.log(err))
// },[])

const auth=useAuth()

const handleLogin =(e)=>{
e.preventDefault()  

axios.get(`http://localhost:6005/admin/get/${email}`)
.then(res=>{
  console.log(res.data)
  setList(res.data[0].name)
  if(res.data[0]?.email){
    if(res.data[0]?.password == password){
      auth.login(list)
              navigate('/')
    }
    else{
      setError('Incorrect Password')
    }
  }else{
    setEmail('email not found')
  }
}
)
.catch(err=>console.log(err))

}





// function handleLogin(e){
// e.preventDefault()

// const users=list.find(x=>x.email===email)

// if(users){
//     if(users.password===password){
//         auth.login(users.name)
//         navigate('/')
//     }else{
//         setEmail("Incorrect Password")
//     }
// }else{
//     setError("User not Found")
// }
// }
const handleAdmin=(e)=>{
  e.preventDefault()
  setAdmin(!admin)
  setBuser(!buser)
}
  return (
  
    <div>
       {buser&&
       
        <form onSubmit={handleLogin} className='login-form'>
          <h1>LogIn User</h1>
            <label>Email:</label>
            <br />
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
            <br />
            <label>Password:</label>
            <br />
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
            <br />
            <button type='submit'>Login </button>

            {error}
        </form>
}
      
        
    

        {admin&&
        <Admin/>
        
        }
            <button onClick={handleAdmin} className='bt-switch'>{buser ? "Admin user" : "traveler"}</button>
      
    </div>
  )
}

export default Login