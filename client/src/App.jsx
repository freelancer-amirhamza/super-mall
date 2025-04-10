/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Toaster} from "react-hot-toast";
import fetchUserDetails from './utils/fetchUserDetails';
import { useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import { setAllCategory, setAllSubCategory,setLoadingCategory } from './store/productSlice';
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
      dispatch(setLoadingCategory(true))
      const response = await Axios({
        ...SummeryApi.getCategory,
      })
      if(response?.data?.success){
        dispatch(setAllCategory(response?.data?.data))
      }
    } catch (error) {
      AxiosToastError(error)
    }finally{
      dispatch(setLoadingCategory(false))
    }
  };



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
        
        fontWeight: "bold"
      },
    },
    error: {
      style: {
        background: '#FFCDD2',
        // color:'white',`
        fontWeight: "bold"
      },
    },
  }}/>
    </div>
  )
}

export default App