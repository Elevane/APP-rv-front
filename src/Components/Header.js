import React, { useState } from "react";
import getUser from "../Hooks/UserService";

export default function Header(){
    let user = getUser();
    let button = "";
    if (user !== undefined) {
        button = <a className="btn btn-outline-primary" href="/logout" >Log out</a>
      } else {
        button = <a className="btn btn-outline-primary justify-content-end" href="/login" >Sign up</a>
      }


    return(
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-bold">RandomeVerse</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark text-decoration-none" href="/home">User Profile</a>
          <a className="p-2 text-dark text-decoration-none" href="/items">Item list</a>
          <a className="p-2 text-dark text-decoration-none" href="/Create">Create</a>
        </nav>
        {button}
      </div>
    );
}