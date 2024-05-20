import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../Auth'
import './admin.css'

const Admin = () => {

    const [email,setemail]=useState('')
    const[password,setPassword]=useState('')
    const[list,setList]=useState([])
    const[error,setError]=useState('') 

const navigate=useNavigate()

useEffect(()=>{
    axios.get(`http://localhost:6005/admin/get`)
    .then(res=>
        console.log(res)
        (setList(res.data)))
    .catch(err=>console.log(err))
},[])

const auth=useAuth()



const handleLogin =(e)=>{
    e.preventDefault()  
    
    axios.get(`http://localhost:6005/admin/get/${email}`)
    .then(res=>{
      console.log(res.data)
      setList(res.data[0].name)
      if(res.data[0]?.email){
        if(res.data[0]?.password == password){
          auth.adlogin(list)
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

// const users=list.find(x=>x.username===id)

// if(users){
//     if(users.password===password){
//         auth.adlogin(users.name)
//         navigate('/')
//     }else{
//         setid("Incorrect Password")
//     }
// }else{
//     setError("User not Found")
// }
// }
  return (
    <div>
        {/* {list.map(item=>item.name)} */}
        <form onSubmit={handleLogin} className='login-form'>
            <h1>Admin User</h1>

            <label>Admin ID</label>
          <br />
            <input type='text' placeholder='please enter email' value={email} onChange={(e)=>{setemail(e.target.value)}} required></input>
            <br />
            <label>Password:</label>
            <br />
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
            <br />
            <button type='submit'>login</button>


        </form>
        {error}
      
    </div>
  )
}

export default Admin