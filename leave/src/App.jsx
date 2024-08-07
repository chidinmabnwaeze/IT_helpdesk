import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Tickets from './Pages/Ticket'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route index element ={<Dashboard/>}/>
     <Route path ="/dashboard" element = {<Dashboard/>}/>
     <Route path='/tickets' element ={<Tickets/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
