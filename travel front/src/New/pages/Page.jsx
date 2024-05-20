import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Update from './Update'
import './data.css'

const Page = () => {
    const[cat,setCat]=useState('')
    const [place,setplace]=useState('')
    const[description, setDescription]=useState('')
    const[image,setImage]=useState('')





    const handlepost=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:4001/${cat}`,{
            place:place,
            image:image,
            description:description})
            .then(res=>(res)).catch(err=>err)
            setCat('')
            setDescription('')
            setImage('')
            setplace('')
    }
  return (
    <div >
      <h1>Admin Use</h1>
      <form onSubmit={handlepost} className='main-page'>
        <label htmlFor="">select category</label>
        <br></br>
        <select name="" id="" value={cat} onChange={(e)=>{setCat(e.target.value)}}>
            <option value="#">select a category</option>
            <option value="friends">friends</option>
            <option value="family">family</option>
            <option value="couples">couples</option>
        </select>
        <br />
        <label htmlFor="">place:</label>
        <br></br>
        <input type="text" name="" id="" value={place} onChange={(e)=>{setplace(e.target.value)}} required /> <br />
        <label htmlFor="">Description:</label>
        <br></br>
        <input type="text" name="" id="" value={description} onChange={(e)=>{setDescription(e.target.value)}}  required/> <br />
        <label htmlFor="">Image Url:</label>
        <br/>
        <input type="url" value={image} onChange={(e)=>{setImage(e.target.value)}}  required/>
        <br />
        <button type='submit' className='bt-ad'>Add trip plan</button>
      </form>
      <Update/>


    </div>

    
  )
}

export default Page
