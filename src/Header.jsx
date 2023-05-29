import"./Header.css";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import useStorage from "./hooks/storage.hook";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function Header() {
  // const theme =useTheme();
  const {removeItem, getItem} = useStorage()
  const navigate = useNavigate();
  const profile = getItem("profile")
  
   async function logout(){
    await signOut(auth)
    removeItem("profile")
    navigate("/login")
  };

  return (
    <div>
      <ul>
        <li> <Link to="/home"> Home </Link></li>
        <li> <Link to="/about"> About</Link></li>
        <li> <Link to="/State">  Cereer </Link></li>
        <li> <Link to="/con">  contact </Link> </li>
        {profile && (
        <li>
          <div onClick={logout}>Logout</div>
        </li>
        )}        
        {/* <li onClick={() => theme.UpdateTheme()}>
          {theme.mode ? (
            <i className="fas fa-moon"></i>
            ):(
              <i className="fas fa-sun"></i>
            )}
        </li> */}
      </ul>
    </div>
  )
      }

export default Header
