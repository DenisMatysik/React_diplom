import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const navStyle = {
    display: "flex",
    alignItems: "center",
    height: "60px",
    margin: "0 auto",
    width: "100%",
    backgroundColor: "#646681",
    justifyContent: "space-evenly"
  }
  
const linkStyle={
    textDecoration: "none",
    color:"white"
}

const Layout=()=> {
  return (
      <>
      <div style={navStyle}>
        <Link style={linkStyle} to="/">Main</Link>
        <Link style={linkStyle} to="/news">News</Link>
    </div>
            <Outlet/>
      </>
  )
}

export {Layout}