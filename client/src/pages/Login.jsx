import React from 'react'

const login=()=>{
    window.location.href="https://notepad-u68d.onrender.com/auth/google"
}

const Login = () => {
  return (
    <div>
      <button onClick={login}>Login with Google</button>
    </div>
  )
}

export default Login
