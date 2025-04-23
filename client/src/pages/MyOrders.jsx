import React from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData';

const MyOrders = () => {
  const orderList = useSelector(state => state.orders?.orderList);
  console.log(orderList)
  return (
    <section className="bg-white">
      <div className="">
        <div className="w-full p-2 shadow-md">
          <h1 className="font-semibold text-xl text-neutral-700">Orders</h1>
        </div>
        <div className="">
          {orderList[0] ? (
            <div className="">
              {orderList.map((order,index)=>{
                return(
                  <div key={order?._id+index+"order"} className="">
                    <p className="">Order ID: {order?._id}</p>
                    <div className="flex items-center">
                      <img className='w-16 h-16 object-scale-down' src={order?.product_details?.image[0]} alt={order?.product_details?.name} />
                      <p className=""> {order?.product_details?.name} </p>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="w-full relative flex flex-col items-center justify-center">
              <h2 className="text-3xl text-neutral-800 absolute top-20 font-semibold ">No Order Found!</h2>
              <NoData />
            </div>)}
        </div>
      </div>
    </section>
  )
}

export default MyOrders
