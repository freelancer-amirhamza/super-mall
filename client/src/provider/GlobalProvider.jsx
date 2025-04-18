import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "../utils/Axios";
import SummeryApi from "../common/SummeryApi";
import { setCartItems } from "../store/cartSlice";
import AxiosToastError from "../utils/AxiosToastError";


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
    useEffect(() => {
        fetchCartItems()
    }, [])
    return (
        <GlobalContext.Provider value={{ fetchCartItems }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;