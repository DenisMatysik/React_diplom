import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Login from './Login';
import "./Validation.css"

export default function Validation() {
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [emailDirty, setEmailDirty]= useState(false);
    const [passwordDirty, ssetPasswordDirty]= useState(false);
    const [emailEror, setEmailEror]= useState("Email can't be empty");
    const [passwordEror, setPasswordEror] = useState("Password can't be empty");
    const [formValid, setFormValid]= useState(false);

    useEffect(()=>{
        if( emailEror|| passwordEror){
            setFormValid(false)
        } else{
            setFormValid(true)
        }
    },[emailEror,passwordEror])

    const blurHandler =(e)=>{
        switch(e.target.name){
            case "email":
                setEmailDirty(true)
                break
            case "password":
                ssetPasswordDirty(true)
                break
        }
    }

    const emailHandler =(e)=>{
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLocaleLowerCase())){
            setEmailEror("Incorrect email")
            if (!e.target.value){
                setEmailEror("Email can't be empty")
                toast.error("Email can't be empty")
            }
        } else {
            setEmailEror("")
        }
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value)
        if (e.target.value.length <4 || e.target.value.length>10){
            setPasswordEror("The password must be longer than 4 characters and no more than 10")
            if( !e.target.value){
                setPasswordEror("Password can't be empty")
            }
        } else {
            setPasswordEror("")
        }
    }

  return (
    <div className='validation'>
        <form className="validationForm">
            <h1>Registration</h1>
            {(emailDirty && emailEror) && <div style={{color:"red"}}>{emailEror}</div>}
            <input onChange={e=>emailHandler(e)} value={email} name='email' className='email' onBlur={e=>blurHandler(e)} type="text" placeholder='Enter you email...'></input>
            {(passwordDirty && passwordEror) && <div style={{color:"red"}}>{passwordEror}</div>}
            <input onChange={e=> passwordHandler(e)} value={password} name='password' className='password' onBlur={e=>blurHandler(e)} type="password" placeholder='Enter you password...'></input>
            <button disabled={!formValid} className='buttonValidation'>Registration</button>
        </form>
        <Login/>
    </div>
  )
}
