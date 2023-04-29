import React, { useEffect, useState, createContext } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Project from './Project'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Story from './Story'

import Navbar from '../Components/Navbar'
import SigninDialog from '../Components/SigninDialog'
import SignUpDiag from '../Components/SignUpDiag'
import Profile from './profile'
import axios from 'axios'

export const UserContext = createContext(null)

export default function Index() {
  const [openSigninDialog, setopenSigninDiag] = useState(false)
  const [openSignUpDiag, setopenSignUpDiag] = useState(false)
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [userInfo, setuserInfo] = useState({})

  useEffect(() => {
    axios({
      url: window.$api + '/refresh',
      method: "post",
      withCredentials: true
    }).then(res => {
      switch (res.data.status) {
        case 200:
          setisLoggedIn(true)
          setuserInfo(res.data.data)
          break;
        default:
          console.log(res.data)
          break;
      }
    })
  }, [])

  const handleCloseSigninDiag = () => {
    setopenSigninDiag(false)
  }
  const handleCloseSignUpDiag = () => {
    setopenSignUpDiag(false)
  }

  const globalState = {
    isLoggedIn,
    setisLoggedIn,
    userInfo,
    setuserInfo
  }

  // console.log(userInfo)
  return (
    <div>
      <UserContext.Provider value={globalState}>
        <BrowserRouter>
          <Navbar  setopenSigninDiag={setopenSigninDiag} setopenSignUpDiag={setopenSignUpDiag} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/story' element={<Story />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          <SigninDialog
            open={openSigninDialog}
            handleClose={handleCloseSigninDiag}
            setopenSigninDiag={setopenSigninDiag}
            setopenSignUpDiag={setopenSignUpDiag}
            setisLoggedIn={setisLoggedIn}
          />
          <SignUpDiag open={openSignUpDiag}
            handleClose={handleCloseSignUpDiag}
            setopenSigninDiag={setopenSigninDiag}
            setopenSignUpDiag={setopenSignUpDiag} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}
