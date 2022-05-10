import { useLocation, Navigate } from "react-router-dom"
import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import Logout from './Components/Logout';
import React from "react";
import  { useState } from 'react';
import swal from 'sweetalert2';

function RequireAuth({ children }) {
  const {currentUser} = useAuth();
  const location = useLocation();
  console.log("current user : ",currentUser)
  if (currentUser === null) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

const AuthContext = React.createContext(null);
const AuthProvider = ({ children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  return(
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
    </AuthContext.Provider>)
}
const useAuth = () => React.useContext(AuthContext);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes >
          <Route path="/home" element={<RequireAuth><ItemList/></RequireAuth>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/logout" element={<Logout/>}>
          </Route>
        </Routes >
    </Router>
  </AuthProvider>
  );
}

async function authenticate(username, password) {
  const user ={
    username : username,
    password : password
  }
  return fetch("https://localhost:7139/api/Users/authenticate" ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      "Accept" : "*/*"
    },
    body: JSON.stringify(user)
  })
    .then(data => data.json())
 }
function Login(){
  const {currentUser, setCurrentUser} = useAuth();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    let response = await authenticate(
      username,
      password
  );
    if (response.isSuccess) {
      setCurrentUser(response.result)
      
      new swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        window.location.href = "/home";
      });
     
    } else {
      new swal("Failed connection Error", response.errorMessage, "error");
    }
  }
    return(
    <div id="login-form-wrap">
        <h2>Login</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <p>
          <input type="text" id="username" onChange={e => setUserName(e.target.value)} name="username" placeholder="Username" required/>
          </p>
          <p>
          <input type="password" id="password" onChange={e => setPassword(e.target.value)}  name="password" placeholder="password" required/>
          </p>
          <p>
          <input type="submit" id="login" value="Login"/>
          </p>
        </form>
        <div id="create-account-wrap">
          <p>Not a member? <a href="#">Create Account</a></p>
        </div>
    </div>
    );
  }

function ItemList(){
  return(
    <ul>
      <li>
        <h1>Home</h1>
        <p></p>
        <img alt='dzqdzqz'></img>
      </li>
    </ul>
  );
}


export default App;
