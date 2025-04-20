/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from "react-hot-toast";
import fetchUserDetails from './utils/fetchUserDetails';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import { setAllCategory, setAllSubCategory } from './store/productSlice';
import SummeryApi from './common/SummeryApi';
import AxiosToastError from './utils/AxiosToastError';
import Axios from './utils/Axios';
import { setCartItems } from './store/cartSlice';
import GlobalProvider from './provider/GlobalProvider';
import MobileCart from './components/MobileCart';

const App = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState()
  const fetchUser = async () => {
    const userData = await fetchUserDetails()
    dispatch(setUserDetails(userData?.data))
  }

  const fetchCategory = async () => {
    try {
      setLoading(true)
      const response = await Axios({
        ...SummeryApi.getCategory,
      })
      if (response?.data?.success) {
        dispatch(setAllCategory(response?.data?.data))
      }

    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false);
    }
  }
  const fetchSubCategory = async () => {
    try {
      setLoading(true)
      const response = await Axios({
        ...SummeryApi.getSubCategory,
      })
      if (response?.data?.success) {
        dispatch(setAllSubCategory(response?.data?.data))
      }

    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchUser()
    fetchCategory()
    fetchSubCategory()
    // fetchCartItems()
  }, [])
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        event.currentTarget.scrollLeft += 100;
      } else {
        event.currentTarget.scrollLeft -= 100;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  return (
    <GlobalProvider>
      <Header />
      <main className='min-h-[78vh]' >
        <Outlet />
      </main>
      <Footer />
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
        }} />
          <MobileCart/>
    </GlobalProvider>
  )
}

export default App