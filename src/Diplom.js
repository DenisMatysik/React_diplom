import React from 'react'
import "./MainStyle.css"
import Title from './components/title/Title'
import Header from './components/header/Header'
import Content from './components/content/Content'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'
import { Toaster } from 'react-hot-toast'
import Validation from './components/validation/Validation'


export default function Diplom() {
  return (
    <Provider store={store}>
      <div className="container">
      <Title>Todo List</Title>
      <Header>
      </Header>
      <Content></Content>
      <Toaster
        position="bottom-left"
        reverseOrder={false}/>
    </div>
      <Validation/>
    </Provider>
  )
}
