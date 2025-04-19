import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "../utils/Axios";
import SummeryApi from "../common/SummeryApi";
import { setCartItems } from "../store/cartSlice";
import AxiosToastError from "../utils/AxiosToastError";
import toast from "react-hot-toast";


export const GlobalContext = createContext(null);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const fetchCartItems = async () => {
        try {
            setLoading(true)
            const response = await Axios({
                ...SummeryApi.getCartItems,
            })
            if (response.data?.success) {
                dispatch(setCartItems(response.data?.data))
            }
        } catch (error) {
            AxiosToastError(error)
        } finally {
            setLoading(false)
        }
    }

    const updateCartItems = async(id, qty)=>{
        try {
            setLoading(false)
            const response = await Axios({
                ...SummeryApi.updateCartItem,
                data:{
                    _id: id,
                    qty: qty,
                }
            })
            if(response.data?.success){
                toast.success(response.data?.message)
                fetchCartItems()
                // return response.data
            }
        } catch (error) {
            AxiosToastError(error)
        }finally{
            setLoading(false)
        }
    }
    const deleteCartItem = async(id)=>{
        try {
            setLoading(true)
            const response = await Axios({
                ...SummeryApi.deleteCartItem,
                data: {
                    _id: id,
                }
            })
            if(response.data?.success){
                toast.success(response.data?.message);
                fetchCartItems()
            }
        } catch (error) {
            AxiosToastError(error)
        }
    }
    useEffect(() => {
        fetchCartItems()
    }, [])
    return (
        <GlobalContext.Provider value={{ fetchCartItems, updateCartItems,deleteCartItem}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;