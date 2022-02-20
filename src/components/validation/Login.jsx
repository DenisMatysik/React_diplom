import React, { Component } from 'react'

const url1 = "https://jsonplaceholder.typicode.com/users" // тут доджне быть запро на токен
const url2 = "https://jsonplaceholder.typicode.com/users" // тут доджне быть запроc po токен

export default class Login extends Component {
    sendPromise = ()=>{
        fetch(url1)
        .then(response=> response.json())
        .then(data=>{console.log(data);
            fetch(url2,{
                method:"POST",
                mode:"cors",
                headers:{
                "Content-type":"application/json"   
                },
                body: JSON.stringify({
                    username:"denismatysik",
                    password:"password",
                    // request_token: data.request_token
                })
            }).then(response => response.json())
            .then(data=>{
                console.log(data)
            })
        })
    }
  render() {
    return (
      <div>
        <button
        className='btn-valid'
        onClick={this.sendPromise}>Login</button>
      </div>
    )
  }
}
