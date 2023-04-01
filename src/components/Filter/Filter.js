import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Base_URL } from '../../helper'
// class PostForm extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         searchkey:"",
//         data:[]
//       }
//     }
//     changeHandler=(e)=>{
//         this.setState({[e.target.name]:e.target.value})
//     }
//     changeMargin=(e)=>{
//       e.target.style.cursor="pointer";
//       //console.log(e.target)
//       // document.getElementsByClassName("d1").style.backgroundColor="grey";
//       // document.getElementsByClassName("d1").style.border="1px solid black"
//     }
//     changeMargin1=(e)=>{
//       e.target.style.cursor=null;
//       // document.getElementsByClassName("d1").style.backgroundColor="white";
//       // document.getElementsByClassName("d1").style.border="none"
//     }
//     bookings=(d)=>{
      
//     }
//     submitHandler=(e)=>{
//       e.preventDefault()
//       console.log(this.state)
//       axios.post("http://localhost:9002/booksdata",this.state)
//       .then(response=>{
//         this.setState({data:response.data.message})
//       })
//       .catch(error=>{
//         console.log(error)
//       })
//     } 
//   render() {
//     const {searchkey,data}=this.state
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//             <div>
//             <center><input type="text" name="searchkey" value={searchkey} onChange={this.changeHandler} placeholder="Search book" style={{width:'70%',background:'#fff',border:'2px solid #dddfe2',borderRadius: '8px',padding: ' 0.5rem 0.75rem',margin:'0.5rem 0',fontSize:'1rem',outline:'none',color:'#1d2129'}}/>&nbsp;&nbsp;
//             <button type='submit' style={{background:'grey',border:'1px solid black',color:'#fff',fontSize:'1.1rem',padding: '0.3rem',margin: '0.5rem 0',borderRadius:'8px',outline:'none',cursor:'pointer'}}>Search</button></center>
//             </div>
//         </form>
//         <br></br>
//         <br></br>
//         <div>
//         {
//             data.length? 
//             data.map(post=><div><div className="d1" key={post.book_id} onMouseOver={this.changeMargin} onMouseLeave={this.changeMargin1} onClick={()=>this.bookings(post.book_id)} style={{backgroundColor:"white",borderRadius:"20px",margin:"10px",border:"2px solid green"}}><br></br><p style={{color:"green"}}>&nbsp;&nbsp;<b>  Title : </b><span style={{color:"black"}}>{post.title},</span></p><br></br><p style={{color:"green"}}>&nbsp;&nbsp;&nbsp;<b>Author : </b><span style={{color:"black"}}>{post.author},</span></p><br></br><p style={{color:"green"}}>&nbsp;&nbsp;<b>  Publisher : </b><span style={{color:"black"}}>{post.publisher},</span></p><br></br><p style={{color:"green"}}>&nbsp;&nbsp;&nbsp;<b>Available copies : </b><span style={{color:"black"}}>{post.available_copies}.</span></p><br></br></div><br></br></div>):null//<div style={{backgroundColor:"white"}}><p style={{color:"green"}}><b>Nothing Found!</b></p></div>
//         }
//         </div>
//       </div>
//     )
//   }
// }

// export function Filter(props){
//   const navigate=useNavigate()
//   return(<PostForm navigate={navigate}></PostForm>)
// }

// export default PostForm

function Filter() {
  const navigate=useNavigate()
    const [ user, setUser] = useState({
        searchkey:""
    })
    const[data,setData]=useState([])
    const handleChange = e => {
      const { name, value } = e.target
      //console.log(name,value)
      setUser({
          ...user,
          [name]: value
      })
  }
  const changeMargin=(e)=>{
          e.target.style.cursor="pointer";
          //console.log(e.target)
          // document.getElementsByClassName("d1").style.backgroundColor="grey";
          // document.getElementsByClassName("d1").style.border="1px solid black"
        }
  const  changeMargin1=(e)=>{
          e.target.style.cursor=null;
          // document.getElementsByClassName("d1").style.backgroundColor="white";
          // document.getElementsByClassName("d1").style.border="none"
        }
  const bookings=(data)=>{
    navigate(`/bookings/${data}`)
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.post(`${Base_URL}/booksdata`,user)
    .then(response=>{
        setData(response.data.message)
        console.log(data)
    })
  }
  return (
    <div>
         <form onSubmit={submitHandler}>
             <div>
             <center><input type="text" name="searchkey" onChange={handleChange} value={user.searchkey} placeholder="Search book" style={{width:'70%',background:'#fff',border:'2px solid #dddfe2',borderRadius: '8px',padding: ' 0.5rem 0.75rem',margin:'0.5rem 0',fontSize:'1rem',outline:'none',color:'#1d2129'}}/>&nbsp;&nbsp;
             <button type='submit' style={{background:'grey',border:'1px solid black',color:'#fff',fontSize:'1.1rem',padding: '0.3rem',margin: '0.5rem 0',borderRadius:'8px',outline:'none',cursor:'pointer'}}>Search</button></center>
             </div>
         </form>
         <br></br>
         <br></br>
          <div>
              { data.length?data.map(post=><div><div key={post.book_id} onMouseOver={changeMargin} onClick={()=>bookings(post.book_id)} onMouseDown={changeMargin1} style={{backgroundColor:"white",borderRadius:"20px",margin:"10px",border:"2px solid green"}}><br></br><p style={{color:"green"}}>&nbsp;&nbsp;<b>  Title : </b><span style={{color:"black"}}>{post.title},</span></p><br></br><p style={{color:"green"}}>&nbsp;&nbsp;&nbsp;<b>Author : </b><span style={{color:"black"}}>{post.author},</span></p><br></br><p style={{color:"green"}}>&nbsp;&nbsp;<b>  Publisher : </b><span style={{color:"black"}}>{post.publisher},</span></p><br></br><p style={{color:"green"}}>&nbsp;&nbsp;&nbsp;<b>Available copies : </b><span style={{color:"black"}}>{post.available_copies}.</span></p><br></br></div><br></br></div>):null         }
         </div>
    </div>
  )
}
export default Filter