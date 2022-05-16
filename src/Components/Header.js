import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getUser from "../Hooks/UserService";
import { Navigate } from "react-router-dom";
export default function Header(){
    let user = getUser();
    let location = useLocation();
    const navigate = useNavigate();
    let button = "";
    let nav = "";
     const btnstyle = {
        border: "none",
        backgroundColor : "transparent"
     }

    if (user != undefined) {
        button = <button className="btn btn-outline-primary" onClick={() => {navigate("/logout");}}>Log out</button>
        nav = <nav className="my-2 my-md-0 mr-md-3">
        <button style={btnstyle} className="p-2 text-dark text-decoration-none"onClick={() =>navigate("/profile")}>Profile</button>
        <button  style={btnstyle} className="p-2 text-dark text-decoration-none"onClick={() => navigate("/items")}>Nfts</button>
        <button  style={btnstyle} className="p-2 text-dark text-decoration-none" onClick={() => navigate("/create")}>Create</button>
      </nav>
      } else {
        button = <a className="btn btn-outline-primary justify-content-end" onClick={() => <Navigate to="/login" state={{ from: location }} replace />}>Log in</a>
      }
    


    return(
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-bold">RandomeVerse</h5>
        {nav}
        {button}
      </div>
    );
}