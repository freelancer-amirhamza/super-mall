<<<<<<< HEAD
export const baseUrl = "http://localhost:5000";
=======

export const baseUrl= "http://localhost:5000" ;
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70

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
<<<<<<< HEAD
    reset_password: {
=======
    reset_password:{
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
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
<<<<<<< HEAD
    uploadAvatar: {
        url: "/api/user/upload-image",
        method: "put",
    },
    updateUserDetails: {
        url: "/api/user/update-user",
        method: "put"
    },
    addCategory: {
=======
    uploadAvatar:{
        url: "/api/user/upload-image",
        method: "put",
    },
    updateUserDetails:{
        url: "/api/user/update-user",
        method: "put"
    },
    addCategory:{
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
        url: "/api/category/add-category",
        method: "post"
    },
    uploadImage: {
        url: "/api/file/upload",
        method: "post"
    },
    getCategory: {
        url: "/api/category/get-category",
<<<<<<< HEAD
        method: "get"
    },
=======
        method:"get"
    }, 
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
    updateCategory: {
        url: "/api/category/update-category",
        method: "put",
    },
<<<<<<< HEAD
    deleteCategory: {
        url: "/api/category/delete-category",
        method: "delete"
    },
    addSubCategory: {
=======
    deleteCategory:{
        url: "/api/category/delete-category",
        method: "delete"
<<<<<<< HEAD
    },
    addSubCategory:{
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
        url: "/api/sub-category/create",
        method: "post"
    },
    getSubCategory: {
        url: "/api/sub-category/get",
        method: "post",
    },
    updateSubCategory: {
        url: "/api/sub-category/update",
        method: "put"
    },
    deleteSubCategory: {
        url: "/api/sub-category/delete",
        method: "delete"
<<<<<<< HEAD
    },
    addProduct: {
        url: "/api/product/create",
        method: "post"
    },
    getProduct: {
        url: "/api/product/get",
        method: "post"
    },
    getProductByCategory: {
        url: "/api/product/get-product-by-category",
        method: "post"
    },
};
=======
=======
>>>>>>> master
    }

}

>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70

export default SummeryApi;