import React, { lazy } from 'react';
import Navbar from '../components/Navbar';
const Footer = lazy(() => import('../components/Footer'));


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen mx-auto 2xl:container">
        {children}
      </div>

      <Footer />
    </>
  )
}