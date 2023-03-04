import React,{useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./login.css"
function Login({setLoginLibrarian}) {
    const navigate=useNavigate()
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        //console.log(name,value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const login=()=>{
      axios.post("http://localhost:9002/librarian-login",user)
       .then(response=>{
        alert(response.data.message)
        setLoginLibrarian(response.data.librarian)
        navigate("/librarian-homepage")
      })
    }
  return (
    <div>
    <div style={{width:'150px',height:'150px'}}></div>
    <div className='login'>
    <h1>Login</h1>
    <input type="text" placeholder='Enter Your Email' name="email" value={user.email} onChange={handleChange}></input>
    <input type="password" placeholder='Enter Your Password' name="password" value={user.password} onChange={handleChange}></input>
    <div className='button' onClick={login}>Login</div>
    <div>or</div>
    <div className='button' onClick={()=>navigate("/login")}>Go Back</div>
    </div>
    </div>
  )
}
export default Login;