import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Divider from './Devider'
import { Link } from 'react-router-dom'
import AxiosToastError from '../utils/AxiosToastError'
import Axios from '../utils/Axios'
import SummeryApi from '../common/SummeryApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'

const UserMenu = () => {
    const dispatch  = useDispatch();
    const user = useSelector((state)=> state.user.user)


    const handleLogout =async (e)=>{
        try {
            const response = await Axios({
                ...SummeryApi.logout
            })
            if(response.data.success){
                dispatch(logout())
                localStorage.clear();
                toast.success(response.data.message)
            }
        } catch (error) {
            AxiosToastError(error)
        }
    }
    
    return (
        <div>
            <div className="flex flex-col pt-3 gap-1.5  ">   
                <h2 className="font-semibold px-2 text-neutral-800 ">My Account</h2>
                <h2 className="text-neutral-700 font-medium px-2">{user.name} </h2>
                <Divider/>
                <div className="grid">
                <Link to={"/account"} className='text-neutral-600 px-2 font-medium cursor-pointer hover:bg-gray-200'>My Orders</Link>
                <Link to={"/account"} className='text-neutral-600 px-2 font-medium cursor-pointer hover:bg-gray-200'>Save Address</Link>
                </div>
                <button onClick={handleLogout} className="text-neutral-600 text-left hover:bg-gray-200 cursor-pointer mb-2 font-semibold px-2">Logout</button>
            </div>
        </div>
    )
}

export default UserMenu
