import React from 'react'
import Main from './pages/Main'
import {Routes, Route, Link, useLocation} from "react-router-dom"
import News from './pages/news/News'
import Notfoundpage from './pages/Notfoundpage'
import { Layout } from './pages/Layout'
import Singlenews from './pages/news/Singlenews'
import Login from './pages/login_logout/Login'
import RequireAuth from './components/authorization/RequireAuth'
import AuthProvider from './components/authorization/AuthProvider'
import { useTransition, animated } from 'react-spring'

// страница news/:uuid должна быть приватной( доступна регистрации)

export default function Diplom() {
  const location = useLocation();
  const transitions = useTransition(location, {
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    from: { 
       opacity: 0, 
       transform: "translateX(100%)" },
  })

  return transitions((props, item)=> (
    <animated.div style={props}>
      <div style={{position:"relative"}}>
      <AuthProvider>
        <div style={{position:"absolute", width:"100%"}}>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}></Route>
          <Route path='news' element={<News/>}></Route>
          <Route path='news/:uuid' element={
            <RequireAuth>
              <Singlenews/>
            </RequireAuth>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='*' element={<Notfoundpage/>}></Route>
        </Route>
        </Routes>
        </div>
    </AuthProvider>  
      </div>
    </animated.div>
  ) ) 
}
