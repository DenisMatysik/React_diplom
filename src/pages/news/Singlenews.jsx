import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Singlenews() {
    const [oneNews, setOneNews]= useState(null)
    const {uuid} = useParams();
    const navigate = useNavigate();
    const url = `https://api.thenewsapi.com/v1/news/uuid/${uuid}?api_token=KXi6VXiltlaVZ3YRpXW8oHX7XbmN10ebwme0bJtM`
    const goBack = ()=> navigate(-1);
    useEffect(()=>{
        fetch(url)
          .then(res => res.json())
          .then(data => setOneNews(data))
      },[uuid])

  return (
      <>
      <div>{
        oneNews && ( 
            <div className='singleNews'>
            <h1 className='singleNewsTitle'>{oneNews.title}</h1>
            <h3 className='singleNewsBody'>{oneNews.description}</h3>
            <div>
                <h4>Published at: {oneNews.published_at}</h4>
                <h4>Source: {oneNews.source}</h4>
                <h4>Language: {oneNews.language}</h4>
            </div>
            </div>
        )
        }</div>
        <button onClick={goBack}>Go Back</button>
      </>
  )
}
