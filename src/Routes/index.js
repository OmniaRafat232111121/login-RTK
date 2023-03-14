import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Component/Login/Login'

const index = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      
    </div>
  )
}

export default index
