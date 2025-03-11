
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
    },
    refreshToken: {
        url: "/api/user/refresh-token",
        method: "post"
    },
    user_details: {
        url: "/api/user/user-details",
        method: "get"
    },
    logout: {
        url: "/api/user/logout",
        method: "get",
    },
    uploadAvatar:{
        url: "/api/user/upload-image",
        method: "put",
    },
    updateUserDetails:{
        url: "/api/user/update-user",
        method: "put"
    },
    addCategory:{
        url: "/api/category/add-category",
        method: "post"
    },
    uploadImage: {
        url: "/api/file/upload",
        method: "post"
    },
    getCategory: {
        url: "/api/category/get-category",
        method:"get"
    }

}


export default SummeryApi;