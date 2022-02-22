import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { useAuth } from "../../components/authorization/useAuth";
import { useAuth } from '../../components/authorization/useAuth';


export default function Logout() {
    const {singout} = useAuth();
    const navigate = useNavigate();
  return (
    <button onClick={()=> singout(()=>navigate("/", {replace:true}))}>Logout</button>
  )
}
