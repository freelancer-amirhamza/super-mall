import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData';
import Table from '../components/Table';
import { createColumnHelper } from '@tanstack/react-table';
import { MdDelete } from 'react-icons/md';
import { ImPencil } from 'react-icons/im';
import { TbListDetails } from "react-icons/tb";
import { DisplayPriceInTaka } from '../utils/DisplayPriceInTaka';
import OrderDetails from '../components/OrderDetails';

const MyOrders = () => {
  const orderList = useSelector(state => state.orders?.orderList);
  const columnHelper = createColumnHelper();
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [orderData, setOrderData] = useState()
  console.log(orderData, "order")

  const column = [
    columnHelper.accessor("orderId", {header: "Order ID"}),
    columnHelper.accessor("image", {
      header: "Image",
    cell: ({row})=>{
      const firstProduct = row.original?.products[0];
      const firstImage = firstProduct?.product_details?.image[0]
      return(
            <div className=" flex items-center justify-center">
              <img
            src={firstImage}
            alt={firstProduct?.product_details?.name}
            className="w-10 h-10 object-scale-down cursor-pointer"
          />
            </div>
      )
    } }),
    columnHelper.accessor("order_status", {
      header: "Order Status",
      cell: ({ row }) => (
        <p className="uppercase p-0 text-center"> {row.original?.order_status}</p>
      )
    }),
    columnHelper.accessor("price", {
      header: "Total Price",
      cell: ({ row }) => (
        <p className=" p-0 text-center"> {DisplayPriceInTaka(row.original?.totalAmount)}</p>
      )
    }),
    columnHelper.accessor("quantity", {
      header: "Qty",
      cell: ({ row }) => {
        console.log(row.original,"check")
        const totalQuantity = row.original?.products.reduce((sum,item)=> sum + item?.quantity, 0)
        return <p className="max-w-10 text-center">{totalQuantity} </p>
      }
    }),
    columnHelper.accessor('_id', {
          header: 'Action',
          cell: ({ row }) => (
            <div className="flex items-center justify-center gap-2">
              <button
                className="text-green-600 hover:text-green-800 bg-green-100 p-0.5 rounded cursor-pointer border"
                onClick={() => {
                  setOpenOrderDetails(true);
                  setOrderData(row?.original);
                }}
              >
                <TbListDetails size={18} />
              </button>
              <button
                onClick={() => {
                  setOpenConfirmBox(true);
                  setDeleteSubCategoryData(row.original);
                }}
                className="text-red-500 hover:text-red-600 bg-red-100 p-0.5 rounded cursor-pointer border"
              >
                <MdDelete size={20} />
              </button>
            </div>
          ),
        }),
  ]
  return (
    <section className="bg-white">
      <div className="">
        <div className="w-full p-2 shadow-md">
          <h1 className="font-semibold text-xl text-neutral-700">Orders</h1>
        </div>
        <div className="">
          {orderList[0] ? (
            <div className="">
              <div className="overflow-auto w-full max-w-[92vw]">
                  <Table data={orderList} column={column} />
                </div>
              
            </div>
          ) : (
            <div className="w-full relative flex flex-col items-center justify-center">
              <h2 className="text-3xl text-neutral-800 absolute top-20 font-semibold ">No Order Found!</h2>
              <NoData />
            </div>)}
        </div>
      </div>
      {openOrderDetails && <OrderDetails data={orderData} close={()=>setOpenOrderDetails(false)} />}
    </section>
  )
}

export default MyOrders
