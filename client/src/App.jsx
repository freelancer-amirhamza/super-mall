/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Toaster} from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Header/>
    <main className='min-h-[78vh]' >
      <Outlet/>
    </main>
    <Footer/>
    <Toaster
    toastOptions={{
    success: {
      style: {
        // background: '#DCEDC8',
        // color:'white',
        fontWeight: "bold"
      },
    },
    error: {
      style: {
        background: '#FFCDD2',
        // color:'white',
        fontWeight: "bold"
      },
    },
  }}/>
    </div>
  )
}

export default App