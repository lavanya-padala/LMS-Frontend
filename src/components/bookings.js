import React,{useState} from 'react'
import axios from "axios"
import {useNavigate,useParams} from "react-router-dom"
import "./login/login.css"
function Booking() {
    const navigate=useNavigate()
    const [ user, setUser] = useState({
        email:"",
        password:""
    })
    const params=useParams()
    const handleChange = e => {
        const { name, value } = e.target
        //console.log(name,value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const login=()=>{
      axios.post(`http://localhost:9002/booking/${params.id}`,user)
       .then(response=>{
        alert(response.data.message)
      })
    }
  return (
    <div>
    <div style={{width:'150px',height:'150px'}}></div>
   <div className='App'>
    <div className='login'>
    <h1>Confirm Your account to place a book request</h1>
    <input type="text" placeholder='Enter Your Email' name="email" value={user.email} onChange={handleChange}></input>
    <input type="password" placeholder='Enter Your Password' name="password" value={user.password} onChange={handleChange}></input>
    <div>
      <br/>
    </div>
    <div className="button" onClick={login}>Confirm Request</div>
    <div>or</div>
    <div className="button" onClick={()=>navigate("/")}>Go Back</div>
    </div>
    </div>
    </div>
  )
}
export default Booking;
// import React from 'react'
// import { useParams } from 'react-router-dom';
// function bookings() {
//   const params=useParams();
//   return (
//     <div>
//     <h1>Bookings</h1>
//     <h1>{params.id}</h1>
//     </div>
//   )
// }
// export default bookings;