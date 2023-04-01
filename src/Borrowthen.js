import React from 'react'
import { Base_URL } from './helper';
import "./components/login/login.css"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
function Issue() {
    const params=useParams()
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`${Base_URL}/borrow/${params.data}`)
        .then(response=>{
            setData(response.data.message)
        })
    },[])
  return (
    <div>
        <div style={{width:"50px",height:"50px"}}></div>
        <center>
        <div style={{backgroundColor:"white",borderRadius:"10px",width:"70%",height:"70%"}}><br/><br/><h2 style={{color:"black"}}>{data}</h2><br/><br/><br/>
        </div>
        </center>
    </div>   
  )
}

export default Issue;

// import "./components/login/login.css"
// import React,{useState} from 'react'
// import { useEffect } from 'react';
// import axios from "axios"
// import {useNavigate,useParams} from "react-router-dom"

// function issue() {
//     const params=useParams()
//     const[data,setData]=useState([]);
//     useEffect(()=>{
//         axios.get(`http://localhost:9002/issue/${params.data}`)
//         .then(response=>{
//             setData(response.data.message)
//         })
//     })
//   return (
//     <div>
//         <div className="login">
//             <h3>{data}</h3>
//         </div>
//     </div>
//   )
// }

// export default issue
