import React from 'react'
import './Title.css'


export default function Title({children, ...rest}) {
  return (
    <h1 className='title' {...rest}>{children}</h1>
  )
}
