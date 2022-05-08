import React from "react";


let AuthContext = React.createContext({user : undefined});

export default function useAuth() {
    
    return React.useContext(AuthContext);
  }


  






  