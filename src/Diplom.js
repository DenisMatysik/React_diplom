import React from 'react'
import Main from './pages/Main'
import {BrowserRouter,Routes, Route, Link} from "react-router-dom"
import News from './pages/news/News'
import Notfoundpage from './pages/Notfoundpage'
import { Layout } from './pages/Layout'
import Singlenews from './pages/news/Singlenews'

export default function Diplom() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}></Route>
          <Route path='news' element={<News/>}></Route>
          <Route path='news/:id' element={<Singlenews/>}></Route>
          <Route path='*' element={<Notfoundpage/>}></Route>
        </Route>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}
