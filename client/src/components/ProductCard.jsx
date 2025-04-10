import React from 'react';
import { DisplayPriceInTaka } from '../utils/DisplayPriceInTaka';
import { validURLConvert } from '../utils/validURLConvart';
import { Link } from 'react-router-dom';


const ProductCard = ({data}) => {
    const url = `product/${validURLConvert(data.name)}-${validURLConvert(data._id)}`
  return (
    <Link to={url} className=' border border-blue-200 items-center justify-center p-2 grid sm:gap-3 gap-2 max-w-56 min-w-36 sm:min-w-52 sm:h-96 rounded '>
        <div className="min-h-20 rounded">
        <img src={data.image[0] } alt={data?.name} className='w-full h-full object-scale-down' />
        </div>
        <div className="flex items-center justify-between gap-0.5">
        <div className="bg-orange-200/70  p-0.5 rounded text-orange-900 text-xs  sm:text-sm">{data?.stock} Left</div>
        <div className="bg-green-200/70  p-0.5 rounded text-green-900 text-xs sm:text-sm"> {data.discount}% Discount</div>
        </div>
        <div className="text-neutral-800 text-sm md:text-base text-ellipsis line-clamp-2 rounded">{data?.name} </div>
        <div className=" text-neutral-800 text-sm md:text-base text-ellipsis line-clamp-2 rounded  ">Unit: {data?.unit} </div>
        <div className="flex items-center justify-between gap-3">
        <div className="p-1 bg-blue-100/80 rounded sm:text-base text-sm "> {DisplayPriceInTaka(data.price)} </div>
        <button className="px-2 py-1 rounded text-white sm:text-base text-sm  font-medium hover:bg-green-700 bg-green-600  ">Add </button>
        </div>
    </Link>
  )
}

export default ProductCard