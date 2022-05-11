import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Navigate } from "react-router-dom";
import AuthContext from "../AuhtContext";
    export default function Logout(){
        let location = useLocation();

        const {currentUser, setCurrentUser} = React.useContext(AuthContext);
        React.useEffect((value) => {
            setCurrentUser(value);
        }, [setCurrentUser])

        setCurrentUser({user : null, auth:false})

    return <Navigate to="/login" state={{ from: location }} replace />;

  }