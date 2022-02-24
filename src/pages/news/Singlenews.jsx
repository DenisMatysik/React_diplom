import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdOutlineDoorBack } from 'react-icons/md'


export default function Singlenews() {
    const [oneNews, setOneNews]= useState(null)
    const {id} = useParams();
    const navigate = useNavigate();
    const url = `https://jsonplaceholder.typicode.com/comments/${id}` // тут должен быть адресс конкретной новости
    const goBack = ()=> navigate(-1);
    useEffect(()=>{
        fetch(url)
          .then(res => res.json())
          .then(data => setOneNews(data))
      },[id])

  return (
      <>
      <div>{
        oneNews && ( 
            <div className='singleNews'>
            <h1 className='singleNewsTitle'>{oneNews.name}</h1>
            <h3 className='singleNewsBody'>{oneNews.body}</h3>
            <div>
                <h4>Published from: {oneNews.email}</h4>
            </div>
            <h2 onClick={goBack} style={{marginTop:"3rem", cursor:"pointer" , display:"flex", alignItems:"center"}}>Back to all news <MdOutlineDoorBack style={{fontSize:"3rem"}} className='icon' /></h2>
            </div>
        )
        }</div>
        
      </>
  )
}
