/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Toaster} from "react-hot-toast";
import fetchUserDetails from './utils/fetchUserDetails';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

const App = () => {
  const dispatch = useDispatch()
  const fetchUser = async ()=>{
    const userData = await fetchUserDetails()
    dispatch(setUserDetails(userData?.data))
    console.log(userData.data, "suer")
  }
  useEffect(()=>{
    fetchUser()
  },[])
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