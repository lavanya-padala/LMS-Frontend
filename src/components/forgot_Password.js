import React,{useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./login/login.css"
function Forgot_Password() {
    const navigate=useNavigate()
    const [ user, setUser] = useState({
        email:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        //console.log(name,value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const forgot_password=()=>{
        axios.post("http://localhost:9002/forgotpassword",user)
        .then(response=>{
        alert(response.data.message)
        })

    }
  return (
    <div>
    <div style={{width:'200px',height:'200px'}}></div>
    <div className='login'>
    <h1>Forgot Password</h1>
    <input type="text" placeholder='Enter Your Email' name="email" value={user.email} onChange={handleChange}></input>
    <div style={{width:'10px',height:'10px'}}></div>
    <div className='button' onClick={forgot_password}>Send Reset Password Mail</div>
    <div style={{width:'10px',height:'10px'}}></div>
    <div><p style={{textAlign:'left',color:'blue',cursor:'pointer'}} onClick={()=>navigate("/login")}>Go Back</p></div>
    </div>
    </div>
  )
}
export default Forgot_Password