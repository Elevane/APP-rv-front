import { useLocation, Navigate } from "react-router-dom";
import React from "react";



export default function IfAuthed({ children }) {
    const location = useLocation();
    const user = localStorage.getItem("user");
    
    const parsed = JSON.parse(user);
    if (parsed.auth === true  && parsed.user !== undefined && parsed.user !== null)
        return <Navigate to = "/items" state = {{ from: location } } replace />;

    return children;
}