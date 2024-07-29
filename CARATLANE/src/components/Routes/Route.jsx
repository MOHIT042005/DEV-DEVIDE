import React from 'react'
import { Routes } from 'react-router-dom'


const Route = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={home}/>
        <Route path="/login" element={login}/>
        <Route path="/signUp" element={signUp}/>
        <Route path="/cart" element={cart}/>
     </Routes>
    </div>
  )
}

export default Route