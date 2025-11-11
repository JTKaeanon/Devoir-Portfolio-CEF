import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../routes/Home/Home';
import Services from '../../routes/Services/Services';
import Portfolio from '../../routes/Portfolio/Portfolio';
import Contact from '../../routes/Contact/Contact';
import Legales from '../../routes/Legales/Legales';





function Main() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
        <Route path='legales' element={<Legales />} />
    </Routes> 
)
}

export default Main
