import React from 'react'
import "../MainStyle.css"
import Header from '../components/header/Header'
import Content from '../components/content/Content'
import { Provider } from 'react-redux'
import { store } from '../components/redux/store'
import { Toaster } from 'react-hot-toast'
import Title from '../components/title/Title'
import Navigation from './Navigation'
import ModalValidation from '../components/modal/ModalValidation'

export default function Main() {
  return (
    <>
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
    </Provider>
    <ModalValidation/>
    </>
  )
}
