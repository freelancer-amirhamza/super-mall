import React from 'react'

const AdminProductCard = ({product}) => {
  return (
    <div className="w-36 rounded shadow-md p-2 bg-white hover:shadow-lg transition duration-300 ease-in-out hover:scale-105">
        <div className="">
            <img src={product.image[0]} alt="" />
        </div>
        <div className="">
            <p className="text-ellipsis text-neutral-800 line-clamp-2 font-medium ">{product?.name} </p>
            <p className="text-neutral-500 text-sm">{product?.unit} </p>
        </div>
    </div>
  )
}

export default AdminProductCard