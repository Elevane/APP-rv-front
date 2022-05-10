import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Navigate } from "react-router-dom";
    export default function Logout(){
        let location = useLocation();

    return <Navigate to="/login" state={{ from: location }} replace />;

  }