import './App.css';
import Homepage from './components/homepage/homepage.js';
import Login from './components/login/login.js';
import Register from './components/register/register.js';
import {useState} from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomepageLibrarian from "./components/homepage/Homepage_Librarian.js"
import LoginLibrarian from "./components/login/login_Librarian.js"
import ForgotPassword from "./components/forgot_Password"
import AddBook from './components/add_Book';
import UpdateBook from "./components/modify_Books"
import Filter from "./components/Filter/Filter"
import Bookings from './components/bookings';
import AllBookings from './AllBookings';
import Issue from "./issue"
import Borrow from "./borrow"
import Borrowthen from "./Borrowthen"
import Returnthen from "./Returnthen"
import Return from "./return"
function App() {
  const [ user, setLoginUser] = useState({})
  const [ librarian,setLoginLibrarian]=useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user && user._id?(<Homepage setLoginUser={setLoginUser}/>):(<Login setLoginUser={setLoginUser}/>)}> 
          </Route>
          {/* <Route exact path="/" element={librarian && librarian.email?(<HomepageLibrarian setLoginLibrarian={setLoginLibrarian}/>):(<Login setLoginLibrarian={setLoginLibrarian}/>)}>
          </Route> */}
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
          <Route path="/librarian-login" element={<LoginLibrarian setLoginLibrarian={setLoginLibrarian}/>}></Route>
          <Route path="/librarian-homepage" element={librarian && librarian.email?(<HomepageLibrarian setLoginLibrarian={setLoginLibrarian}/>):(<LoginLibrarian setLoginLibrarian={setLoginLibrarian}/>)}>
          </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
          <Route path='/add-book' element={<AddBook/>}></Route>
          <Route path="/update-data" element={<UpdateBook/>}></Route>
          <Route path="/search_book" element={<Filter/>}></Route>
          <Route path="/bookings/:id" element={<Bookings/>}></Route>
         <Route path="/issue" element={<AllBookings/>}></Route> 
         <Route path="/issue/:data" element={<Issue/>}></Route>
         <Route path="/borrow" element={<Borrow/>}></Route>
         <Route path="/borrow/:data" element={<Borrowthen/>}></Route>
         <Route path="/return" element={<Return/>}></Route>
         <Route path="/return/:data" element={<Returnthen/>}></Route>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
