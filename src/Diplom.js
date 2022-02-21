import React from 'react'
import Main from './pages/Main'
import {BrowserRouter,Routes, Route, Link} from "react-router-dom"
import News from './pages/news/News'
import Notfoundpage from './pages/Notfoundpage'




export default function Diplom() {
  return (
    <>
    <header>
      <Link to="/">Main</Link>
      <Link to="/news">News</Link>
    </header>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='*' element={<Notfoundpage/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}
