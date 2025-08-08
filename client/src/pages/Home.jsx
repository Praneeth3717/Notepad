import React, { useEffect } from 'react'
import apis from '../utils/apis'
import httpAction from '../utils/httpAction'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate()
    const [user,setUser]=useState("")
    useEffect(()=>{
        const getUser=async()=>{
            const data={
                url:apis().userProfile,
            }
            const result=await httpAction(data)
            if(result?.status){
              setUser(result?.user)
            }
        }
        getUser()
    },[])

    const logout=async()=>{
      const data={
        url:apis().logout
      }
      const result=await httpAction(data)
      if(result?.status){
        navigate('/')
      }
    }
  return (
    <div>
      <p>This is Home Page-{user?.name} and {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
