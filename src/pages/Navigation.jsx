import Button from 'react-bootstrap/Button';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div style={navContainer}>
      <div style={navStyle}>
     <Button variant="outline-dark">Main page</Button>
     <Button variant="outline-dark">News page</Button>
     <Button variant="outline-dark">Login</Button>
    </div>
  </div>
  )
}
