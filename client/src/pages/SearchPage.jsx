import React, { useEffect, useState } from 'react';
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";
import SummeryApi from '../common/SummeryApi';

const SearchPage = () => {
  const [data, setData]= useState([]);
  const [loading, setLoading]= useState(false);
  const loadingArrayCard = new Array(10).fill(null);
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const fetchSearchProduct = async ()=>{
    try {
      setLoading(true)
      const response = await Axios({
        ...SummeryApi.searchProduct,
        data: {
          search: "",
        }
      }) 
      console.log(response.data, "data")
      if(response.data?.page == 1){
        setData(response.data?.data)
      }else{
        setData((preve)=>{
          return[
            ...preve,
            ...response.data?.data
          ]
        })
      }
      setPage(response.data?.page);
      setTotalPage(response.data?.totalNoPage)
    } catch (error) {
      AxiosToastError(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchSearchProduct()
  },[])
  return (
    <section className="bg-white">
      <div className="container mx-auto p-4">
        <p className="font-semibold">Search Results: {data.length} </p>
        <div className="flex flex-wrap gap-4 justify-center items-center my-4">
          {loading ? (
            loadingArrayCard.map((_, index) => (
              <div
                className="border border-blue-200 p-2 grid gap-3 max-w-52 rounded animate-pulse"
                key={index + "loading"}
              >
                <div className="min-h-20 bg-blue-100/80 rounded"></div>
                <div className="p-3 bg-blue-100/80 rounded w-20"></div>
                <div className="p-3 bg-blue-100/80 rounded"></div>
                <div className="p-3 bg-blue-100/80 rounded w-14 "></div>
                <div className="flex items-center justify-between gap-3">
                  <div className="p-3 bg-blue-100/80 rounded w-20  "></div>
                  <div className="p-3 bg-blue-100/80 rounded w-20 "></div>
                </div>
              </div>
            ))
          ) : (
            data.map((item) => (
              <div key={item._id} className="border border-gray-200 p-4 rounded shadow">
                {/* Render your item details here */}
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default SearchPage
