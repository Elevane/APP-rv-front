import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import Logout from './Components/Logout';
import React from "react";
import RequireAuth from "./Components/Auth/RequireAuth";
import getUser from "./Hooks/UserService";
import Login from "./Components/Login";
import { Navigate } from 'react-router-dom';
import UserProfile from './Components/UserProfile';
import CreateAccount from './Components/CreateAccount';
function App() {
  let user = getUser();
  return (
    
      <Router>
        <Routes >
        <Route path="/" element={<Navigate to="/home" />}>
        
        </Route>
        <Route path="/CreateAccount" element={<CreateAccount />}></Route>
          <Route path="/home" element={<RequireAuth><UserProfile user={user}/></RequireAuth>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/logout" element={<Logout/>}>
          </Route>
        </Routes >
    </Router>

  
  );
}




export default App;
