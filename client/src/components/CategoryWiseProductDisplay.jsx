import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AxiosToastError from '../utils/AxiosToastError';
import Axios from "../utils/Axios";
import SummeryApi from '../common/SummeryApi';
import CardLoader from './CardLoader';
import ProductCard from './ProductCard';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CategoryWiseProductDisplay = ({ id, name }) => {
    const [data, setData] = useState([]);
<<<<<<< HEAD
    const [loading, setLoading] = useState(false);
    const containerRef = useRef();
    
    const fetchCategoryWiseProduct = async () => {
=======
    const [loading, setLoading]= useState(false);

console.log(data, "data")
    const fetchCategoryWiseProduct = async()=>{
>>>>>>> parent of 0581c08 (filter)
        try {
            setLoading(true)
            const response = await Axios({
                ...SummeryApi.getProductByCategory,
                data: {
                    id: id
                }
            })
            if (response.data?.success) {
                setData(response.data?.data)
            }
        } catch (error) {
            AxiosToastError(error)
        } finally {
            setLoading(false)
        }
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396
    const handleScrollRight = () => {
        containerRef.current.scrollLeft += 200
    }
    const handleScrollLeft = () => {
        containerRef.current.scrollLeft -= 200
    }
    useEffect(() => {
=======
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 0581c08 (filter)
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396
    useEffect(()=>{
>>>>>>> parent of 0581c08 (filter)
        fetchCategoryWiseProduct()
    }, [])
    const loadingCardNumber = new Array(6).fill(null)
    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-between gap-4 ">
                    <h1 className="text-xl text-neutral-800 font-semibold">{name} </h1>
                    <Link to={"/"} className="text-green-700 hover:text-green-800 font-medium bg-neutral-100 px-4 py-2 rounded">
                        View All
                    </Link>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396
                <div className="flex container mx-auto p-4 sm:gap-4 gap-2  items-center overflow-x-scroll no-scrollbar scroll-smooth" ref={containerRef} >
                    {loading ? loadingCardNumber.map((_, index) => {
                        return (
                            <CardLoader key={index + "category"} />
=======
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 0581c08 (filter)
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396
                <div className="flex container mx-auto p-4 gap-4  justify-center items-center">
                    { loading ? loadingCardNumber.map((_, index)=>{
                        return (
                            <CardLoader key={index}/>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> parent of 0581c08 (filter)
=======
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396
>>>>>>> parent of 0581c08 (filter)
                        )
                    }) :
                        data?.map((product, index) => {
                            return (
                                <ProductCard data={product} key={product._id + "product"} />
                            )
                        })
                    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396
                    <div className="absolute w-full items-center sm:flex hidden left-0 right-0  container mx-auto justify-between">
                        <button onClick={handleScrollLeft} className="relative z-40 bg-gray-100 text-xl cursor-pointer hover:border border-neutral-500 text-neutral-700 hover:bg-gray-200 p-3 shadow-md rounded-full"> <FaAngleLeft /> </button>
                        <button onClick={handleScrollRight} className="relative z-40 bg-gray-100 text-xl cursor-pointer hover:border border-neutral-500 text-neutral-700 hover:bg-gray-200 p-3 shadow-md rounded-full"> <FaAngleRight /> </button>
=======
                    <div className="absolute w-full items-center lg:flex hidden left-0 right-0  container mx-auto justify-between">
                        <button className="relative z-40 bg-gray-100 text-xl cursor-pointer hover:border border-neutral-500 text-neutral-700 hover:bg-gray-200 p-3 shadow-md rounded-full"> <FaAngleLeft/> </button>
                        <button className="relative z-40 bg-gray-100 text-xl cursor-pointer hover:border border-neutral-500 text-neutral-700 hover:bg-gray-200 p-3 shadow-md rounded-full"> <FaAngleRight/> </button>
>>>>>>> parent of 0581c08 (filter)
<<<<<<< HEAD
=======
=======
                    <div className="absolute w-full items-center lg:flex hidden left-0 right-0  container mx-auto justify-between">
                        <button className="relative z-40 bg-gray-100 text-xl cursor-pointer hover:border border-neutral-500 text-neutral-700 hover:bg-gray-200 p-3 shadow-md rounded-full"> <FaAngleLeft/> </button>
                        <button className="relative z-40 bg-gray-100 text-xl cursor-pointer hover:border border-neutral-500 text-neutral-700 hover:bg-gray-200 p-3 shadow-md rounded-full"> <FaAngleRight/> </button>
>>>>>>> parent of 0581c08 (filter)
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryWiseProductDisplay