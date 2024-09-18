import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CompliantForm from './Pages.jsx/CompliantForm'
import MyTickets from './Pages.jsx/MyTickets'
import View from './Pages.jsx/ViewTickets'
import Login from './Pages.jsx/Login'
import Dashboard from '../../ITadmin/src/Pages/Dashboard'
import Tickets from '../../ITadmin/src/Pages/Ticket'
import Complaint from '../../ITadmin/src/Pages/Complaint'
// import {AuthProvider} from './auth/AuthContext'
// import Login from './auth/AuthContext'



function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element ={<CompliantForm/>}/>
      <Route path ='/form' element ={<CompliantForm/>}></Route>
      <Route path='/mytickets' element={<MyTickets/>}/>
      <Route path='/viewticket' element={<View/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/dashboard' element ={<Dashboard/>}/>
      <Route path='/tickets' element ={<Tickets/>}/>
      <Route path='/compliant' element ={<Complaint/>}/>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
