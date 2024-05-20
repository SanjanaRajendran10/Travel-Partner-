import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../AdminSingup/admin.css'

const Signup = () => {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const navigate=useNavigate()

    
    function handleSignUp(){
        axios.post('http://localhost:6005/admin/post',
        {name:name
        ,email:email, 
        password:password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate('/login')
    }
    const handleLogin=()=>{
        navigate('/login')
    }
  return (
    <div>
        <form onSubmit={handleSignUp} className='login-form'>
            <h1>Sign Up</h1>
        <label>Name:</label>
        <br />
        <div>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} required></input>
        </div>
        <br />
        <label>Email:</label>
        <br />
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
        <br />
        <label>Password</label>
        <br />
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
        <br />
        <button type='submit'>SignUp</button>
        <p>if you have account please Login :
        <button onClick={handleLogin}>Login</button> </p>   
        <br />
        </form>
      
    </div>
  )
}

export default Signup