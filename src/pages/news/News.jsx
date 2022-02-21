import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const url = "https://api.thenewsapi.com/v1/news/all?api_token=KXi6VXiltlaVZ3YRpXW8oHX7XbmN10ebwme0bJtM"

export default function News() {
  const [news, setNews]= useState([]);

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(data => setNews(data.data))
  },[])

  return (
      <div>
        <h1 className='newsTitle'>News</h1>
        <div className='newsContainer'>
          {news.map(item =>  (
          <Link key={item.uuid} to={`/news/${item.uuid}`}>
            <h3 style={{color:"#585858"}}>{item.title}</h3>
          </Link>)
            )
          }
        </div>
        
      </div>
  )
}
