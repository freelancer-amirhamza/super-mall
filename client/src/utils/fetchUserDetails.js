import Axios from "./Axios";
import SummeryApi from "../common/SummeryApi";

const fetchUserDetails = async()=>{
    try {
        const response = await Axios({
            ...SummeryApi.user_details,
        })
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export default fetchUserDetails;