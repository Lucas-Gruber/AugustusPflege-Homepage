import React, { lazy } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen mx-auto ">
        {children}
      </div>

      <Footer />
    </>
  )
}