import React from 'react'
import "./Button.css"


export default function Button({children,typeButton, variant, ...rest}) {
  return (
    <button type={typeButton === "submit" ? "submit" : "button"} 
    className={"button" +" "+ variant}
    {...rest}>
    {children}
    </button>
  )
}
