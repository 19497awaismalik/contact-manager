import React from 'react'
import Navbar from './component/Navbar'
import AddContact from './component/AddContact'
import ContactCard from './component/ContactCard'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import State from './context/UseContext'
import Footer from './component/Footer'
import {Toaster} from 'react-hot-toast'
const App = () => {
  return (
    <>
    <Router>
  <State>
 
    <Navbar/>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    {/* <Alert/> */}
<Routes>
    <Route path='/' element={<AddContact/>}/>
    <Route exact  path='addcontact' element={<AddContact/>}/>
    <Route exact  path='contactcard' element={<ContactCard/>}/>
</Routes>
<Footer/>
  
  </State>
    </Router>
    </>
  )
}

export default App
