import React, { useEffect } from 'react';
import { DisplayPriceInTaka } from '../utils/DisplayPriceInTaka';
import { validURLConvert } from '../utils/validURLConvart';
import { Link } from 'react-router-dom';
import { priceWithDiscount } from '../utils/priceWithDiscount';
import { useState } from 'react';
import AxiosToastError from "../utils/AxiosToastError.js";
import Axios from "../utils/Axios.js";
import SummeryApi from '../common/SummeryApi';
import toast from 'react-hot-toast';
import { useGlobalContext } from '../provider/GlobalProvider.jsx';


const ProductCard = ({data}) => {
    const [loading, setLoading] = useState(false);
    const url = `/product/${validURLConvert(data.name)}-${(data._id)}`
    const {fetchCartItems} = useGlobalContext()


    const handleAddToCart =async (e)=>{
      e.preventDefault();
      e.stopPropagation()
      try {
        setLoading(true);
        const response = await Axios({
          ...SummeryApi.addToCartItem,
          data: {
            productId: data?._id,
          }
        })
        if(response.data?.success){
          toast.success(response.data?.message);
          if(fetchCartItems){
            fetchCartItems()
          }
        }
      } catch (error) {
        AxiosToastError(error);
      }finally{
        setLoading(false)
      }
    }
   
  return (
    <Link to={url} className=' border border-blue-200 p-2 grid gap-3 max-w-56 rounded '>
        <div className="min-h-20 rounded">
        <img src={data.image[0] } alt={data?.name} className='w-full h-full object-scale-down' />
        </div>
        <div className="flex items-center justify-between gap-0.5">
        <div className="bg-orange-200/70  p-0.5 rounded text-orange-900  text-sm">{data?.stock} Left</div>
        {data?.discount > 0 && <div className="bg-green-200/70  p-0.5 rounded text-green-900 text-sm"> {data.discount}% Discount</div> }
        
        </div>
        <div className="text-neutral-800 text-md text-ellipsis line-clamp-2 rounded">{data?.name} </div>
        <div className=" text-neutral-800 text-md text-ellipsis line-clamp-2 rounded  ">Unit: {data?.unit} </div>
        <div className="flex items-center justify-between gap-3">
        <div className="p-1 bg-blue-100/80 rounded  "> {DisplayPriceInTaka(priceWithDiscount(data?.price, data?.discount))} </div>
        {data?.stock ==0 ? ( <p className="text-orange-600 text-sm font-light ">Stock Out!</p> 
      ) : (<button onClick={handleAddToCart} className="px-2 py-1 rounded text-white font-medium hover:bg-green-700 bg-green-600  ">Add </button>)}
        </div>
    </Link>
  )
}

export default ProductCard