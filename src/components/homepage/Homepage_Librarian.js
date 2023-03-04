import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./index";
const Navbar = ({setLoginLibrarian}) => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <h3 style={{color:"black"}}>LMS</h3>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/add-book"
                  activeStyle={{ color:'black' }}
                >
                    Add book
                </NavLink>
                <NavLink 
                  to="/update-data"
                  activeStyle={{ color: 'black' }}
                >
                    Update existing book data
                </NavLink>
                <NavLink 
                  to="/issue" 
                  activeStyle={{ color: 'black' }}
                >
                    Issuing requests
                </NavLink>
                <NavLink 
                  to="/borrow" 
                  activeStyle={{ color: 'black' }}
                >
                    Borrowing requests
                </NavLink>
                <NavLink 
                  to="/return" 
                  activeStyle={{ color: 'black' }}
                >
                    Returning requests
                </NavLink>
                <NavLink
                  activeStyle={{ color: 'black' }} onClick={()=>setLoginLibrarian({})}
                >
                    Logout
                </NavLink>
                
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;

// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import "./homepage_Librarian.css"

// function Homepage({setLoginLibrarian}) {
//   const navigate=useNavigate()
//   return (
//     <div>
//      <div style={{width:'150px',height:'150px'}}></div>
//     <div className='homepage'>
//     <h1>Hello Librarian</h1>
//     <div className='button' onClick={()=>setLoginLibrarian({})}>Logout</div>
//     <div className='button' onClick={()=>navigate("/add-book")}>Add Book</div>
//     <div className='button' onClick={()=>navigate("/update-data")}>Upadate Existing Book data</div>
//     </div>
//     </div>
//   )
// }


// export default Homepage