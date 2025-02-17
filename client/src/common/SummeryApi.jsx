
export const baseUrl= "http://localhost:5000" ;

const SummeryApi = {
    register: {
        url: "/api/user/register",
        method: "post"
    },
    login: {
        url: "/api/user/login",
        method: "post",
    },
    forgot_password: {
        url: "/api/user/forgot-password",
        method: "put",
    },
    verify_otp: {
        url: "/api/user/verify-forgot-password-otp",
        method: "put"
    },
    reset_password:{
        url: "/api/user/reset-password",
        method: "put",
    }

}


export default SummeryApi;