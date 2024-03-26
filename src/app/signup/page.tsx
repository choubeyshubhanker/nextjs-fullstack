"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios from "axios";

const SignUpPage = () => {
  const [user,setUser]= useState({email:"", password:"", username:""})

  const onSignUp = async ()=>{
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input className='p-2 border border-gray-300 rounded-lg' type="text" value={user.username} onChange={(e)=> setUser({...user, username:e.target.value})} placeholder='Username'/>

      <label htmlFor="email">email</label>
      <input className='p-2 border border-gray-300 rounded-lg' type="email" value={user.email} onChange={(e)=> setUser({...user, email:e.target.value})} placeholder='email'/>

      <label htmlFor="password">password</label>
      <input className='p-2 border border-gray-300 rounded-lg' type="password" value={user.password} onChange={(e)=> setUser({...user, password:e.target.value})} placeholder='password'/>

      <button onClick={onSignUp}>Signup Here</button>
      <Link href="/login" >Visit Login Page</Link>

    </div>
  )
}

export default SignUpPage