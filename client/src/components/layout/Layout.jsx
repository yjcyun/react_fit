import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{minHeight:'calc(100vh - 228px)'}}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout