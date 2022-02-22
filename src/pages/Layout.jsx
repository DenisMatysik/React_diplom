import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logout from './login_logout/Logout'

const navStyle = {
    display: "flex",
    alignItems: "center",
    height: "60px",
    margin: "0 auto",
    width: "100%",
    backgroundColor: "#646681",
    justifyContent: "space-evenly"
  }
  
const setActive = ({isActive}) => ({color: isActive ? "black" : "white"})

const Layout=()=> {
  return (
      <>
      <div style={navStyle}>
        <NavLink style={setActive} className="link" to="/">Main</NavLink>
        <NavLink style={setActive} className="link" to="/news">News</NavLink>
        <NavLink style={setActive} className="link" to="/login">Login</NavLink>
        <Logout/>
    </div>
        <Outlet/>
      </>
  )
}

export {Layout}