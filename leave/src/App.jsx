import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route ,Link} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Tickets from './Pages/Ticket'
import Complaint from './Pages/Complaint'
import Feedbacks from './Pages/Feedbacks'

function App() {


  return (
    <>
    <BrowserRouter >
    {/* <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/employee">Employee</Link></li>
              <li><Link to="/complaints">Complaints</Link></li>
            </ul>
          </nav> */}
    <Routes>
     <Route index element ={<Dashboard/>}/>
     <Route path ="/dashboard" element = {<Dashboard/>}/>
     <Route path='/tickets' element ={<Tickets/>}/>
     <Route path='/complaint' element ={<Complaint/>}/>
     <Route path='/feedbacks' element ={<Feedbacks/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
