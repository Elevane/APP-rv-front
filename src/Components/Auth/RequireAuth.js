import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import React from "react";
import AuthContext from "../../AuhtContext";


export default function RequireAuth({ children }) {
    const location = useLocation();
    const user = localStorage.getItem("user");
    if (user === undefined || user === null) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    const parsed = JSON.parse(user); 
    if(parsed.auth === false || parsed.user.token === undefined)
        return <Navigate to="/login" state={{ from: location }} replace />;
   
    
    
    return children;
  }