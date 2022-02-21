import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function Singlenews() {
    const [oneNews, setOneNews]= useState(null)
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // тут должен быть запрос на сервак с новостями
          .then(res => res.json())
          .then(data => setOneNews(data))
      },[id])

  return (
    <div>{
        oneNews && ( 
            <div className='singleNews'>
            <h1 className='singleNewsTitle'>{oneNews.title}</h1>
            <h3 className='singleNewsBody'>{oneNews.body}</h3>
            </div>
        )
        }</div>
  )
}
