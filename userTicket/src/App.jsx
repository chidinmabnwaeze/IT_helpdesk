import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Topbar from '../../leave/src/Components/Topbar'
import CompliantForm from './Pages.jsx/CompliantForm'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index ='/form' element ={<CompliantForm/>}></Route>
      <Route path ='/form' element ={<CompliantForm/>}></Route>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
