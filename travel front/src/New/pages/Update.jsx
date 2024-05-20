    import axios from 'axios';
    import React, { useEffect, useState } from 'react';
    import './data.css'

    const Update = () => {
        const [cat, setCat] = useState('');
        const [data, setData] = useState([]);
        const [popup,setpopup]=useState(false)
        const[place,Setplace]=useState('')
        const[des,setDes]=useState('')
        const[img,setImg]=useState('')
        const[ids,setIds]=useState('')


        useEffect(() => {
            if (cat) {
                axios.get(`http://localhost:4001/${cat}`)
                    .then(res => {
                        setData(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }, [cat]); 

    const  handledelete=(id)=>{
            axios.delete(`http://localhost:4001/${cat}/${id}`)
            .then(res=>(res.data))
            .catch(err=>err)
            const updateddata =data.filter((x)=> x.id !== id)
            setData(updateddata)
        }

        const handlepopup=(data)=>{
    setpopup(true)
    setImg(data.image)
    Setplace(data.place)
    setDes(data.description)
    setIds(data.id)
        }

        const handleUpdate =(e)=>{
    
            e.preventDefault()
            axios.put(`http://localhost:4001/${cat}/${ids}`,{
                place:place,
                description:des,
                image:img
            }).then(res=>res).catch(err=>err)
            setImg('')
            setDes('')
            Setplace('')
            setpopup(false)
        }

        return (
            <div>
            <div className='cat-main'>
               
                <label htmlFor="category">Select category:</label>
                <select id="category" value={cat} onChange={(e) => setCat(e.target.value)}>
                    <option value="">Select a category</option>
                    <option value="friends">Friends</option>
                    <option value="family">Family</option>
                    <option value="couples">Couples</option>
                </select>

                {cat && (
                    
                    <table>
                 
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Update / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((x) => (
                                <tr key={x.id}>
                                    <td>{x.place}</td>
                                    <td>{x.description}</td>
                                    <td><img src={x.image} alt="" width="50px" /></td>
                                    <td>
                                    <button onClick={()=>handlepopup(x)}>update</button>
                                    <button onClick={()=>handledelete(x.id)}>delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )} 
      </div>
                <div className='update-form'>
                 
                {popup&&  <form onSubmit={handleUpdate} >
                <h1>UPDATE FORM</h1>
                        <label htmlFor="">place:</label>
                        <br />
                        <input type="text" name=""  value={place} onChange={(e)=>Setplace(e.target.value)} id=""  required/>
                        <br />
                        <label htmlFor="">Description:</label>
                        <br />
                        <input type="text" name=""  value={des} onChange={(e)=>setDes(e.target.value)} id="" required/>
                        <br />
                        <label htmlFor="">image:</label>
                        <br />
                        <input type="text" name=""  value={img} onChange={(e)=>setImg(e.target.value)} id="" required    />
                        <br />
                        <button type='submit' className='bt-update'>sumbit</button>
                        <button type='submit' onClick={()=>setpopup(false)} className='bt-update'>close</button>

                    </form>}
                </div>



      
            </div>
            
        );
    };

    export default Update;
