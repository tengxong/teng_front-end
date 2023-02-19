import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Project from './Project'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Story from './Story'

import Navbar from '../Components/Navbar'

export default function Index() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/story' element={<Story />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
