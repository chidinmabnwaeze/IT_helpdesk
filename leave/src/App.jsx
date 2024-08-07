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
     
    </>
  )
}

export default App
