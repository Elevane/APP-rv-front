import React from "react";
import "../App.css";
import loginUser from "../Service/Helper/ApiCallhelper";
import  { useState } from 'react';
import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import authService from "../Services/authService";


export default function Login(){
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    let response = await loginUser(
      username,
      password
  );
    if (response.isSuccess) {
      new swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        
        //window.location.href = "/home";
      });
      authService.AddUserToContext(response.result)
      console.log(authService.getCurrentUserToken())
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