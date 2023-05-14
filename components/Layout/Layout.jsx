import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <ToastContainer />
        <Footer/>
    </div>
  )
}

export default Layout