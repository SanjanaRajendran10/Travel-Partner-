import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Family = () => {
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:4001/family`)
        .then(res=>{setData(res.data)})
        .catch(err=>err)
    })

  return (
    <div>
        <div className='user-whole'>
        <h1>FAMILY TRIP</h1>
        <div className='user-main d-flex'>
        {data.map((x)=>(
            <div key={x.id} className='main'> 
            <img src={x.image} alt=""  className='user-image' />
            <h3>{x.place}:</h3>
            <p> <i>"{x.description}"</i></p>
            
            </div>
        ))}
        </div>
      
    </div>
      
    </div>
  )
}

export default Family
