import React, { useState } from 'react'
import { DisplayPriceInTaka } from '../utils/DisplayPriceInTaka'
import { useGlobalContext } from '../provider/GlobalProvider'
import AddAddress from '../components/AddAddress'

const CheckoutPage = () => {
  const {notDiscountPrice, totalPrice, totalQty} = useGlobalContext()
  const [openAddAddress, setOpenAddAddress]= useState(false);
  return (
    <section className="bg-white">
      <div className="container mx-auto gap-2 flex flex-col lg:flex-row items-start justify-between p-4">
        {/* address */}
        <div className="w-full">
          <h2 className="text-lg font-semibold text-neutral-700 ">Choose Your Address.</h2>
          <div className="w-full flex items-center justify-center h-28 border-dashed border rounded ">
            <button onClick={()=>setOpenAddAddress(true)} className="bg-slate-200 py-1 px-2 rounded font-medium hover:bg-slate-300 text-neutral-700 cursor-pointer">Address</button>
          </div>
        </div>

        {/* Summery */}
        <div className=" w-full lg:max-w-md flex flex-col  ">
          <h2 className="text-lg font-semibold text-neutral-700 ">Order Summery</h2>
          <div className="grid  px-4 py-1 bg-slate-200 rounded">
                          <h1 className='font-semibold text-neutral-900 '>Bill Details</h1>
                          <div className="flex items-center justify-between font-semibold ">
                            <p className='text-neutral-700 text-sm'>Sub Total:</p>
                            <p className='text-neutral-700 text-sm'>{DisplayPriceInTaka(notDiscountPrice)}</p>
                          </div>
                          <div className="flex items-center justify-between font-semibold ">
                            <p className='text-neutral-700 text-sm'>Discount:</p>
                            <p className="text-neutral-500 text-sm line-through"> {DisplayPriceInTaka(notDiscountPrice - totalPrice)} </p>
                          </div>
                          <div className="flex items-center justify-between font-semibold ">
                            <p className='text-neutral-700 text-sm'>Total Quantity:</p>
                            <p className="text-neutral-600 text-sm"> {totalQty} Items</p>
                          </div>
                          <div className="flex items-center justify-between font-semibold ">
                            <p className='text-neutral-00 '>Grand Total:</p>
                            <p className="text-neutral-00 "> {DisplayPriceInTaka(totalPrice)} </p>
                          </div>
          </div>
          <div className="w-full lg:max-w-md grid gap-2 py-4">
            <div className="w-full flex items-center justify-between">
              <button className='bg-green-600 hover:bg-green-700 cursor-pointer w-full p-2 rounded text-white font-semibold '>Online Payment</button>
            </div>
            <div className="w-full flex items-center justify-between">
              <button className='border-green-600 border  hover:bg-green-600 cursor-pointer w-full p-2 rounded hover:text-white text-green-600 font-semibold '>Cash On Delivery</button>
            </div>
            
            
          </div>
        </div>
      </div>
      {openAddAddress && <AddAddress close={()=>setOpenAddAddress(false)} />}
    </section>
  )
}

export default CheckoutPage
