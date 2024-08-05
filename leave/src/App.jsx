import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route index element ={<Dashboard/>}/>
     <Route path ="/dashboard" element = {<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
      <h1 className='text-4xl text-red-500'>leave request IPI</h1>
    </>
  )
}

export default App
