
export const baseUrl= "http://localhost:5000" ;

const SummeryApi = {
    register: {
        url: "/api/user/register",
        method: "post"
    },
    login: {
        url: "/api/user/login",
        method: "get",
    }
}


export default SummeryApi;