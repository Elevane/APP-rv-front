import React from "react";

const UserContext = React.createContext();
export  const AuthProvider = ({user, children}) => {
    const [auth, setAuth] = useState(user);
}

export default useAuth = () => React.useContext(UserContext);