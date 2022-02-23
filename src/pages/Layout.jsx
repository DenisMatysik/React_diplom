import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logout from './login_logout/Logout'
import "../MainStyle.css"
import { useState } from 'react'
import { useAuth } from '../components/authorization/useAuth'

const navStyle = {
    display: "flex",
    alignItems: "center",
    height: "60px",
    margin: "0 auto",
    width: "100%",
    backgroundColor: "#646681",
    justifyContent: "space-around",
  }
  
const logInOut = {
  display: "flex",
  alignItems: "center",
  justifyСontent: "space-evenly",
  width: "100px",
}

const setActive = ({isActive}) => ({color: isActive ? "black" : "white"})

const Layout=()=> {
  const [disabledLink, setDisabledLink] = useState("link");
  const {user} = useAuth();
  const [userName, setUserName]= useState("No user")

  const checkUser =()=>{
    if (!user){
      setDisabledLink("link");
    } else {
      setDisabledLink("disabled-link");
      setUserName(user.email);

    }
  }
  return (
      <>
      <div style={navStyle}>
        <NavLink style={setActive} className="link" to="/">Main</NavLink>
        <NavLink style={setActive} className="link" to="/news">News</NavLink>
        <div style={logInOut}>
          <NavLink style={setActive} onClick={checkUser} className={disabledLink} to="/login">Login</NavLink>
          <Logout/>
        </div>
        {user && (<div style={{color:"white"}}>User:{user.email}</div>)}
          
    </div>
        <Outlet/>
      </>
  )
}

export {Layout}