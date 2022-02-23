import React from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth';
import { MdLogin, MdDoorBack } from 'react-icons/md'

// проверка авторизован ли пользователь (если да то перейдёт на страницу news/конкретная новость/; если не авторизован его перекинет на страницу с login)
export default function RequireAuth({children}) {
    const location = useLocation();
    const {user} = useAuth();

    const someInf = {
      display:"flex",
      justifyContent:"center",
      marginTop:"3rem",
      alignItems: "center",
      flexDirection: "column"
    }

    if (!user){ // если user нет то будет переадресация
        return (<div style={someInf}>
            <h1>Only authorized users can read full news</h1>
            <div style={{display:"flex",marginTop:"5rem",}}>
              <h2 style={{display:"flex",  alignItems:"center", justifyContent:"center"}}>Log in
              <Link state={{from: location}} to="/login">
                    <MdLogin style={{marginLeft:"1rem", fontSize:"3rem"}} className='icon'/>
                </Link>
              </h2>
              <h2 style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"1rem"}}>Back to news
              <Link state={{from: location}} to="/news">
                <MdDoorBack style={{marginLeft:"1rem", fontSize:"3rem"}} className='icon'/>
              </Link>
              </h2>
            </div>
        </div>
        )
    } else {
  return children}
}
