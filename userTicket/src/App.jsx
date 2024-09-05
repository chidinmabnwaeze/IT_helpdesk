import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CompliantForm from './Pages.jsx/CompliantForm'
import MyTickets from './Pages.jsx/MyTickets'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element ={<CompliantForm/>}/>
      <Route path ='/form' element ={<CompliantForm/>}></Route>
      <Route path='/mytickets' element={<MyTickets/>}/>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
