
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Notfoundpage() {
  return (
    <div>
        This page doesn't exist. Go <NavLink to='/'>main</NavLink>
    </div>
  )
}
