import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../pages/register/Register'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter