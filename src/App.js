
import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from './Components/Login';
import RequireAuth from './Components/Auth/RequireAuth';
import useAuth from './Hooks/useAuth';
import Logout from './Components/Logout';
function App() {
  return (
    <Router>
    {/*<div>
      <nav>
        <ul>
          <li>
            <Link to="/">NFTS</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>*/}

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes >
        <Route path="/home" element={<RequireAuth><ItemList/></RequireAuth>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/logout" element={<Logout/>}>
        </Route>
      </Routes >
    {/*</div>*/}
  </Router>
  );
}


function ItemList(){
  const user = useAuth();
  return(
    <ul>
      <li>
        <h1>Home</h1>
        <p></p>
        <img alt='dzqdzqz'></img>
      </li>
    </ul>
  );
}









export default App;
