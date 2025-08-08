import React from 'react'

const login=()=>{
    window.location.href="http://localhost:5000/auth/google"
}

const Login = () => {
  return (
    <div>
      <button onClick={login}>Login with Google</button>
    </div>
  )
}

export default Login
