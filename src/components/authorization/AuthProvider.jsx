import { createContext, useState } from "react";
import React from 'react'

export const AuthContext = createContext(null)
 
export default function AuthProvider({children}) {
    const [user, setUser] = useState({email:"",password:""});

    const singin = (newUser, callback)=>{
        setUser(newUser);
        callback();
    }
    const singout = (callback)=>{
        setUser(null);
        callback();
    }

    const value = {user, singin, singout}

  return <AuthContext.Provider value={value}>
      {children}
  </AuthContext.Provider>
}
