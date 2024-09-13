import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CompliantForm from './Pages.jsx/CompliantForm'
import MyTickets from './Pages.jsx/MyTickets'
import View from './Pages.jsx/ViewTickets'
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
      {/* <Route path='/login' element ={<Login/>}/> */}
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
