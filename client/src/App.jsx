/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Toaster} from "react-hot-toast";
import fetchUserDetails from './utils/fetchUserDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import { setAllCategory, setAllSubCategory } from './store/productSlice';
import SummeryApi from './common/SummeryApi';
import AxiosToastError from './utils/AxiosToastError';
import Axios from './utils/Axios';

const App = () => {
  const dispatch = useDispatch()
  const fetchUser = async ()=>{
    const userData = await fetchUserDetails()
    dispatch(setUserDetails(userData?.data))
  }
  
  const fetchCategory = async()=>{
    try {
      const response = await Axios({
        ...SummeryApi.getCategory,
      })
      if(response?.data?.success){
        dispatch(setAllCategory(response?.data?.data))
      }
    } catch (error) {
      AxiosToastError(error)
    }
  }

  const fetchSubCategory = async()=>{
    try {
      const response = await Axios({
        ...SummeryApi.getSubCategory,
      })
      if(response?.data?.success){
        dispatch(setAllSubCategory(response?.data?.data))
      }
    } catch (error) {
      AxiosToastError(error)
    }
  }

  useEffect(()=>{
    fetchUser()
    fetchCategory()
    fetchSubCategory()
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