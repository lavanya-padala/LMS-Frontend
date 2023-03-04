import React, { useState } from "react"
import axios from "axios"
import "./register.css"
import {useNavigate} from "react-router-dom"
const Register = () => {
    const navigate=useNavigate()
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        address:"",
        mobile:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        //console.log(name,value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const register=()=>{
        const {name,email,password,reEnterPassword,mobile,address}=user
        if(name && email && password && mobile && address &&(password===reEnterPassword)){
            axios.post("http://localhost:9002/register",user)
            .then(response=>{
                alert(response.data.message)
                navigate("/login")
            })
        }
        else{
            alert("invalid input")
        }
        
    }
    return (
        <div>
        <div style={{width:'75px',height:'75px'}}></div>
        <div className="register">
            {/* {console.log("User", user)} */}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="text" name="address" value={user.address} placeholder="Your Address" onChange={ handleChange }></input>
            <input type="text" name="mobile" value={user.mobile} placeholder="Your Mobile Number" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="ReEnter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/login")}>Login Here</div>
        </div>
        </div>
    )
}

export default Register