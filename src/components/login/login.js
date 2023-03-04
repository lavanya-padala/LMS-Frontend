import React,{useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./login.css"
function Login({setLoginUser}) {
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
      axios.post("http://localhost:9002/login",user)
       .then(response=>{
        alert(response.data.message)
        setLoginUser(response.data.user)
        navigate("/")
      })
    }
  return (
    <div>
    <div style={{width:'150px',height:'150px'}}></div>
   <div className='App'>
    <div className='login'>
    <h1>Login</h1>
    <input type="text" placeholder='Enter Your Email' name="email" value={user.email} onChange={handleChange}></input>
    <input type="password" placeholder='Enter Your Password' name="password" value={user.password} onChange={handleChange}></input>
    <div>
      <br/>
    </div>
    <div>
    <p style={{textAlign:'left',color:'blue',cursor:"pointer",display:"inline-block"}} onClick={()=>navigate("/forgotpassword")}>Forgotten Password?</p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <p style={{textAlign:'right',color:'blue',cursor:"pointer",display:"inline-block"}} onClick={()=>navigate("/librarian-login")}>Librarin Login</p>
    </div>
    <div className="button" onClick={login}>Log in</div>
    <div>or</div>
    <div className="button" onClick={()=>navigate("/register")}>Create New Account</div>
    </div>
    </div>
    </div>
  )
}
export default Login;