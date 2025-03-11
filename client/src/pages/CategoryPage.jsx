import React, { useEffect, useState } from 'react'
import UploadCategoryModel from '../components/UploadCategoryModel'
import AxiosToastError from '../utils/AxiosToastError';
import Axios from '../utils/Axios';
import SummeryApi from '../common/SummeryApi';
import Loading from '../components/Loading';

const CategoryPage = () => {
  const [showUploadCategoryModel, setShowUploadCategoryModel] = useState(false);
  const [loading, setLoading] = useState(false);


  const fetchCategory = async()=>{
    try {
      setLoading(true)
      const response = await Axios({
        ...SummeryApi.getCategory,
      })
      return response?.data

    } catch (error) {
      AxiosToastError(error)
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchCategory()
  },[])

  return (
    <section className=''>
      <div className="flex justify-between items-center shadow-md p-2 bg-white">
        <h1 className="text-xl font-semibold text-neutral-700">Category</h1>
        <button onClick={()=> setShowUploadCategoryModel(true) } className="border  border-amber-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-amber-500 hover:text-white font-medium ">Add Category</button>
      </div>
      {!loading && <Loading/>}
      {showUploadCategoryModel &&  <UploadCategoryModel close={()=> setShowUploadCategoryModel(false)}/>}
      
    </section>
  )
}

export default CategoryPage
