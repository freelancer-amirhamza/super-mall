import React, { useState } from 'react'
import EditProductModal from './EditProductModal';

const AdminProductCard = ({product}) => {
  const [editOpen, setEditOpen] = useState(false);
  return (
    <div className="w-36 rounded shadow-md p-2 bg-white hover:shadow-lg ">
        <div className="">
            <img src={product.image[0]} alt="" />
        </div>
        <div className="">
            <p className="text-ellipsis text-neutral-800 line-clamp-2 font-medium ">{product?.name} </p>
            <p className="text-neutral-500 text-sm">{product?.unit} </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <button onClick={()=> setEditOpen(true)} className="border px-2 rounded cursor-pointer text-base mt-1 bg-green-100 hover:bg-green-200 border-green-600 ">Edit</button>
          <button className="border px-2 rounded cursor-pointer text-base mt-1 bg-red-100 hover:bg-red-200 border-red-600 ">Delete</button>
        </div>
        {editOpen && <EditProductModal  product={product} closs={()=>setEditOpen(false)} />}
        
    </div>
    
  )
}

export default AdminProductCard