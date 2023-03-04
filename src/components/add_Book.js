import React,{useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "./login/login.css"
function Add_Book() {
    const navigate=useNavigate()
    const [ user, setUser] = useState({
        title:"",
        author:"",
        publisher:"",
        total_copies:"",
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
    const add_book=()=>{
      axios.post("http://localhost:9002/add-book",user)
       .then(response=>{
        alert(response.data.message)
      })
    }
  return (
    <div>
    <div style={{width:'150px',height:'150px'}}></div>
    <div className='login'>
    <h1>Add book</h1>
    <input type="text" placeholder='Enter Book id' name="book_id" value={user.book_id} onChange={handleChange}></input>
    <input type="text" placeholder='Enter Book title' name="title" value={user.title} onChange={handleChange}></input>
    <input type="text" placeholder='Enter Author name' name="author" value={user.author} onChange={handleChange}></input>
    <input type="text" placeholder='Enter Publisher name' name="publisher" value={user.publisher} onChange={handleChange}></input>
    <input type="text" placeholder='Enter total number of copies' name="total_copies" value={user.total_copies} onChange={handleChange}></input>
    <div className='button' onClick={add_book}>Add Book</div>
    <div><br></br></div>
    <p style={{textAlign:'left',color:'blue',cursor:"pointer"}} onClick={()=>navigate("/librarian-homepage")}>Go Back</p>
    </div>
    </div>
  )
}
export default Add_Book;
