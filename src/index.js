import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  useNavigate
  
} from "react-router-dom";
import Logout from './Components/Logout';
import RequireAuth from "./Components/Auth/RequireAuth";

import Login from "./Components/Login";
import { Navigate } from 'react-router-dom';
import UserProfile from './Components/UserProfile';
import CreateAccount from './Components/CreateAccount';
import ItemList from './Components/ItemList';
import NotFound from './Components/NotFound';
import CreateNft from './Components/CreateNft';
import Item from './Components/Item';
import IfAuthed from './Components/Auth/IfAuthed';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    
          <Routes >
          <Route path="/" element={<Navigate to="/items" />}>
          </Route>
            <Route path="/createAccount" element={<App children={<CreateAccount></CreateAccount>} />}></Route>
            <Route path="/items" element={<RequireAuth><App children={<ItemList />}></App></RequireAuth>}></Route>
            <Route path="/create" element={<RequireAuth><App children={<CreateNft />}></App></RequireAuth>}></Route>
            <Route path="/profile" element={<RequireAuth><App children={<UserProfile />}></App></RequireAuth>}></Route>
            <Route path="/item/:id" element={<RequireAuth><App children={<Item />}></App></RequireAuth>}></Route>
              
            <Route element={<Login></Login>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
          </Routes >
          
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
