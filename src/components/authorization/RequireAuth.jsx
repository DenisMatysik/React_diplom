import React from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './useAuth';


// проверка авторизован ли пользователь (если да то перейдёт на страницу news/конкретная новость/; если не авторизован его перекинет на страницу с login)
export default function RequireAuth({children}) {
    const location = useLocation();
    const {user} = useAuth();

    if (!user){ // если user нет то будет переадресация
        return (<div>
            <>User not authorized</>
              <Link state={{from: location}} to="/login">Go to authorized</Link>
            {/* <Navigate to="/login" state={{from: location}}/> */}
        </div>
        )
    } else {
  return children}
}
