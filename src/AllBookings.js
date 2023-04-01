import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Base_URL } from './helper';
import { useNavigate } from 'react-router-dom';
function AllBookings() {
    const navigate=useNavigate();
    const[data,setData]=useState([]);
    useEffect(()=>()=>{
        axios.get(`${Base_URL}/issue`)
        .then(response=>{
            setData(response.data.message)
        })
    },[])
  const issued=(data)=>{
    navigate(`/issue/${data}`)
  }
  return (
    <div>
        <div>
         { data.length?data.map(post=><div><div key={post._id} onClick={()=>issued(post._id)} style={{backgroundColor:"white",borderRadius:"20px",margin:"10px",border:"2px solid green"}}><br></br><p style={{color:"green"}}>&nbsp;&nbsp;<b>  Book Id: </b><span style={{color:"black"}}>{post.book_id},</span></p><br></br><p style={{color:"green"}}>&nbsp;&nbsp;<b> Email: </b><span style={{color:"black"}}>{post.email},</span></p><br></br><p style={{color:"green"}}>&nbsp;&nbsp;<b> Requested date :</b><span style={{color:"black"}}>{post.requested_date.toString().slice(0,10)}</span></p><br></br></div><br></br></div>):<div><br/><br/><center><div style={{backgroundColor:"white",borderRadius:"5px",width:"60%",height:"60px"}}><br/><h1 style={{color:"black"}}>No new requests to show</h1></div></center></div> }
    </div>
    </div>   
  )
}

export default AllBookings;
