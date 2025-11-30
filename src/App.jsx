import React from 'react'
import Home from './comp/home'
import { Route, Routes } from 'react-router-dom'
import Create from './comp/create'
import Update from './comp/update'

const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      
      </Routes>
      
  
  )
}

export default App
