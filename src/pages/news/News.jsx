import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const url = "https://jsonplaceholder.typicode.com/comments" // тут должен быть запрос на API с новостями, но там где я зареган был уже закончен ресурс

export default function News() {
  const [news, setNews]= useState([]);

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(data => setNews(data))
  },[])

  return (
      <div>
        <h1 className='newsTitle'>News</h1>
        <div className='newsContainer'>
          {news.map(item =>  (
          <Link key={item.id} to={`/news/${item.id}`}>
            <h3 style={{color:"#585858"}}>{item.name}</h3>
          </Link>)
            )
          }
        </div>
        
      </div>
  )
}
