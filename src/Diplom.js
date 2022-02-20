import React from 'react'
import "./diplom/MainStyle.css"
import Title from './diplom/components/title/Title'
import Header from './diplom/components/header/Header'
import Content from './diplom/components/content/Content'
import { Provider } from 'react-redux'
import { store } from './diplom/components/redux/store'
import { Toaster } from 'react-hot-toast'
import Validation from './diplom/components/validation/Validation'


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
