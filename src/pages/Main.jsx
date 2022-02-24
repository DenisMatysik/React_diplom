import React from 'react'
import "../MainStyle.css"
import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { Toaster } from 'react-hot-toast'
import Title from '../components/Title/Title'

export default function Main() {
  return (
    <>
    <Provider store={store}>
      <div className="container">
        <Title>Todo List</Title>
        <Header/>
        <Content/>
        <Toaster
          position="bottom-left"
          reverseOrder={false}/>
      </div>
      </Provider>
    </>
  )
}
