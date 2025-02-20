import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Donation from './components/Donation'

function App() {

  return (
    <>
      <Outlet />
      <Donation />
      <Footer />
    </>
  )
}

export default App
