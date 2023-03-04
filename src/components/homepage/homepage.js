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
const Navbar = ({setLoginUser}) => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <h3 style={{color:"black"}}>LMS</h3>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/search_book"
                  activeStyle={{ color:'black' }}
                >
                    Search Book
                </NavLink>
                <NavLink 
                  to="/about"
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
                <NavLink
                  activeStyle={{ color: 'black' }} onClick={()=>setLoginUser({})}
                >
                    Logout
                </NavLink>
                
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;
// // import React from 'react'
// // import "./homepage.css"

// // function Homepage({setLoginUser}) {
// //   return (
// //     <div>
// //     <div style={{width:'75px',height:'100px'}}></div>
// //     <div className='homepage'>
// //     <h1>Hello User</h1>
// //     <div className='button' onClick={()=>setLoginUser({})}>Logout</div>
// //     </div>
// //     </div>
// //   )
// // }


// // export default Homepage