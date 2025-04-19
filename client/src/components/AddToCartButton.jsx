import React, { useState } from 'react'
import { useGlobalContext } from '../provider/GlobalProvider';
import Axios from '../utils/Axios';
import SummeryApi from '../common/SummeryApi';
import toast from 'react-hot-toast';
import AxiosToastError from '../utils/AxiosToastError';
import Loader from './Loading';

const AddToCartButton = ({ data }) => {
    const { fetchCartItems } = useGlobalContext()
    const [loading, setLoading] = useState(false);


    const handleAddToCart = async (e) => {
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
            if (response.data?.success) {
                toast.success(response.data?.message);
                if (fetchCartItems) {
                    fetchCartItems()
                }
            }
        } catch (error) {
            AxiosToastError(error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <button onClick={handleAddToCart} 
            className="px-2 py-1 rounded text-white font-medium hover:bg-green-700 bg-green-600  ">
                {loading ? <Loader className='max-h-5 max-w-5 '/> : "Add"}
            </button>
        </div>
    )
}

export default AddToCartButton
