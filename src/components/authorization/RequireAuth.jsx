import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth';


// проверка авторизован ли пользователь (если да то перейдёт на страницу news/конкретная новость/; если не авторизован его перекинет на страницу с login)
export default function RequireAuth({children}) {
    const location = useLocation();
    const {user} = useAuth;

    if (!user){
        return <Navigate to="/login" state={{from: location}}></Navigate>
    }
  return children
}
