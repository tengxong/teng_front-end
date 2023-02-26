import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Project from './Project'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Story from './Story'

import Navbar from '../Components/Navbar'
import SigninDialog from '../Components/SigninDialog'
import SignUpDiag from '../Components/SignUpDiag'

export default function Index() {
  const [openSigninDialog, setopenSigninDiag] = useState(false)
  const [openSignUpDiag, setopenSignUpDiag] = useState(false)

  const handleCloseSigninDiag = () => {
    setopenSigninDiag(false)
  }
  const handleCloseSignUpDiag = () => {
    setopenSignUpDiag(false)
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar setopenSigninDiag={setopenSigninDiag} setopenSignUpDiag={setopenSignUpDiag} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/story' element={<Story />} />
        </Routes>
        <SigninDialog
          open={openSigninDialog}
          handleClose={handleCloseSigninDiag}
          setopenSigninDiag={setopenSigninDiag}
          setopenSignUpDiag={setopenSignUpDiag}
        />
        <SignUpDiag open={openSignUpDiag}
          handleClose={handleCloseSignUpDiag}
          setopenSigninDiag={setopenSigninDiag}
          setopenSignUpDiag={setopenSignUpDiag} />
      </BrowserRouter>
    </div>
  )
}
