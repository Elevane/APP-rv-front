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
import { useContext } from "react";
import AuthContext from "./AuhtContext";
import RequireAuth from "./Components/Auth/RequireAuth";



function App() {
  
  const [currentUser, setCurrentUser] = useState({user :" qdqzdzq", auth : false});
  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      <Router>
        <Routes >
        <Route path="/" element={<Navigate to="/home" />}>
        </Route>
          <Route path="/home" element={<RequireAuth><ItemList/></RequireAuth>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/logout" element={<Logout/>}>
          </Route>
        </Routes >
    </Router>
  </AuthContext.Provider>
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
  const {currentUser, setCurrentUser} = useContext(AuthContext);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const location = useLocation();


  React.useEffect( (value) => {
    setCurrentUser(value);
  }, [setCurrentUser])

  React.useEffect(() => {
  }, [currentUser])


  const handleSubmit = async e => {
    e.preventDefault();
    console.log(currentUser)
    let response = await authenticate(
      username,
      password
    ).then();
    if(response.isSuccess) {
      
      if(response.result === undefined)
        new swal("Failed connection Error","", "error")
      const returnedUser = response.result;
       setCurrentUser({user : returnedUser, auth: true})
     
     
        if(currentUser === undefined)
          new swal("Failed connection Error","Error while authtification to the app", "error")
        else{
          new swal("Success", response.message, "success", {
            buttons: false,
            timer: 2000,
          })
        }
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

  const {currentUser} = useContext(AuthContext);

    React.useEffect(() => {
    }, [currentUser])

    //console.log("current user : ", currentUser)
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
