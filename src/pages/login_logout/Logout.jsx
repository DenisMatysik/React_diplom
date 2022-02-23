import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/authorization/useAuth';
import { MdLogout } from 'react-icons/md'



export default function Logout() {
    const {singout} = useAuth();
    const navigate = useNavigate();
  return (
    <MdLogout className='icon' onClick={()=> singout(()=>navigate("/", {replace:true}))}/>
  )
}
