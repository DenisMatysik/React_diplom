import React from 'react'
import Main from './pages/Main'
import {Routes, Route, Link} from "react-router-dom"
import News from './pages/news/News'
import Notfoundpage from './pages/Notfoundpage'
import { Layout } from './pages/Layout'
import Singlenews from './pages/news/Singlenews'
import Login from './pages/login/Login'
import RequireAuth from './components/authorization/RequireAuth'
import AuthProvider from './components/authorization/AuthProvider'

// страница news/:uuid должна быть приватной( после регистрации)
export default function Diplom() {
  return (
    <AuthProvider>
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
    </AuthProvider>    
  )
}
