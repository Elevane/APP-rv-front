import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import React from "react";
import AuthContext from "../../AuhtContext";


export default function RequireAuth({ children }) {
    const {currentUser} = useContext(AuthContext);

    React.useEffect(() => {
      console.log(currentUser)
    }, [currentUser])

    const location = useLocation();
    console.log("current requiered user : ", currentUser)

    if (currentUser.auth === false) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
  }