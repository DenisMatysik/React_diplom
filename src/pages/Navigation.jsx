import Button from 'react-bootstrap/Button';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "60px",
  maxWidth: "1140px",
  margin: "0 auto"
}

export default function Navigation () {
  return (
    <div style={navStyle} className='navigation'>
     <Button variant="outline-dark">Main page</Button>
     <Button variant="outline-dark">News page</Button>
     <Button variant="outline-dark">Login</Button>
    </div>
  )
}
