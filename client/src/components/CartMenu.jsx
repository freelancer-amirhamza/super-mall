import React from 'react'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { DisplayPriceInTaka } from '../utils/DisplayPriceInTaka';
import { useGlobalContext } from '../provider/GlobalProvider';
import { FaAngleDoubleRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import AddToCartButton from './AddToCartButton';
import { priceWithDiscount } from '../utils/priceWithDiscount';

const CartMenu = ({ close }) => {
  const {totalPrice, notDiscountPrice} = useGlobalContext()
  const cartItems = useSelector((state)=>state.cartItems?.cart);
  return (
    <section className="bg-neutral-900/90 top-0 z-50 fixed bottom-0 left-0 right-0 ">
      <div className="bg-white w-full max-w-sm max-h-screen min-h-screen ml-auto">
        <div className="px-3 py-2 shadow-md flex items-center justify-between">
          <h2 className='text-xl font-semibold text-neutral-700'>Cart</h2>
          <Link to={"/"} className="text-2xl lg:hidden hover:bg-orange-600 border p-0.5 rounded hover:text-white text-neutral-700">
            <IoClose />
          </Link>
          <div onClick={close} className="text-2xl hidden lg:block hover:bg-orange-600 border p-0.5 rounded hover:text-white text-neutral-700">
            <IoClose />
          </div>
        </div>

        <div className="min-h-[75vh]  lg:min-h-[80vh] h-full max-h-[calc(100vh-150px)] flex flex-col p-2 ">
          <div className="flex items-center justify-between px-4 py-2 bg-blue-100 rounded-full  text-sm text-blue-400 font-semibold">
            <p className="">Your total savings</p>
            <p className=""> {DisplayPriceInTaka(notDiscountPrice - totalPrice)} </p>
          </div>
          <div className="grid gap-4 overflow-y-scroll p-4">
            {cartItems[0] && (
              cartItems.map((item, index)=>{
                return(
                  <div key={index} className="flex w-full gap-2  justify-between">
                    <div className="min-w-16 max-w-16 h-16 bg-white rounded  border-dotted border ">
                      <img className='object-scale-down rounded-md ' src={item?.productId?.image[0]} alt={item?.productId?.name} />
                    </div>
                    <div className="w-full text-xs max-w-sm">
                      <p className=" text-ellipsis line-clamp-2 ">{item?.productId?.name} </p>
                      <p className="text-neutral-400">{item?.productId?.unit} </p>
                      <p className="font-semibold">{DisplayPriceInTaka(priceWithDiscount(item?.productId?.price,item?.productId?.discount))} </p>
                    </div>
                    <div className="">
                      <AddToCartButton data={item?.productId} />
                    </div>
                  </div>
                )
              })
            )}
          </div>

        </div>

        <div className="p-2 mx-auto">
        <div className="flex items-center rounded px-2 justify-between text-neutral-100 bg-green-700 py-4 static bottom-3 ">
          <div>
            {DisplayPriceInTaka(totalPrice)}
          </div>
          <div className="flex items-center cursor-pointer justify-center gap-2">
            <button className='cursor-pointer'>Procced</button>
          <FaAngleDoubleRight/>
          </div>
          
        </div>
        </div>
      </div>
    </section>
  )
}

export default CartMenu
