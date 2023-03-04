import React,{useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./login/login.css"
function Modify_Book() {
    const navigate=useNavigate()
    const [ user, setUser] = useState({
       modify:"",
       book_id:""
    })
    const handleChange = e => {
        const { name, value } = e.target
        //console.log(name,value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const modify_book=()=>{
      axios.post("http://localhost:9002/update-data",user)
       .then(response=>{
        alert(response.data.message)
      })
    }
  return (
    <div>
    <div style={{width:'150px',height:'150px'}}></div>
    <div className='login'>
    <h1>Modify Existing Book data</h1>
    <input type="text" placeholder='Enter book_id' name="book_id" value={user.book_id} onChange={handleChange}></input>
    <input type="text" placeholder='Enter Modified Number of copies' name="modify" value={user.modify} onChange={handleChange}></input>
    <div className='button' onClick={modify_book}>Save Changes</div>
    <div><br></br></div>
    <p style={{textAlign:'left',color:'blue',cursor:"pointer"}} onClick={()=>navigate("/librarian-homepage")}>Go Back</p>
    </div>
    </div>
  )
}
export default Modify_Book;
