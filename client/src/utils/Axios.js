import axios from "axios";
import { baseUrl } from "../common/SummeryApi";

const Axios = axios.create({
    baseURL : baseUrl,
    withCredentials: true, 
})

// sending access token in the header
Axios.interceptors.request.use(
    async(config)=>{
        const accessToken = localStorage.getItem("accessToken");

        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config 
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default Axios;
