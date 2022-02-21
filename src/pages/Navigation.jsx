import Button from 'react-bootstrap/Button';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Notfoundpage from './Notfoundpage';
import News from './news/News';


const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "60px",
  maxWidth: "1140px",
  margin: "0 auto",
}

const navContainer = {
  width: "100%",
  backgroundColor: "#b3b3b3",
}

export default function Navigation () {
  return (
    <>
    {/* <div style={navContainer}>
      <div style={navStyle}>
        <a href='/'>Main page</a>
        <a href='/news'>News page</a>
     <Button variant="outline-dark">Login</Button>
    </div>
  </div> */}
  
    </>
  )
}
