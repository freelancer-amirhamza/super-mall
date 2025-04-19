export const baseUrl = "http://localhost:5000";

const SummeryApi = {
    register: {
        url: "/api/user/register",
        method: "post",
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
        method: "put",
    },
    reset_password: {
        method: "put",
        method: "post",
    },
    user_details: {
        url: "/api/user/user-details",
        method: "get",
    },
    logout: {
        url: "/api/user/logout",
        method: "get",
    },
    uploadAvatar: {
        url: "/api/user/upload-image",
        method: "put",
    },
    updateUserDetails: {
        url: "/api/user/update-user",
        method: "put",
    },
    addCategory: {
        url: "/api/category/add-category",
        method: "post",
    },
    uploadImage: {
        url: "/api/file/upload",
        method: "post",
    },
    getCategory: {
        url: "/api/category/get-category",
        method: "get",
    },
    updateCategory: {
        url: "/api/category/update-category",
        method: "put",
    },
    deleteCategory: {
        url: "/api/category/delete-category",
        method: "delete",
    },
    addSubCategory: {
        url: "/api/sub-category/create",
        method: "post",
    },
    getSubCategory: {
        url: "/api/sub-category/get",
        method: "post",
    },
    updateSubCategory: {
        url: "/api/sub-category/update",
        method: "put",
    },
    deleteSubCategory: {
        url: "/api/sub-category/delete",
        method: "delete",
    },
    addProduct: {
        url: "/api/product/create",
        method: "post",
    },
    getProduct: {
        url: "/api/product/get",
        method: "post",
    },
    getProductByCategory: {
        url: "/api/product/get-product-by-category",
        method: "post",
    },
    getProductByCategoryAndSubCategory: {
        url: "/api/product/get-product-by-category-and-sub-category",
        method: "post",
    },
    getProductDetails: {
        url: "/api/product/get-product-details",
        method: "post",
    },
    updateProduct: {
        url: "/api/product/update-product",
        method: "put",
    },
    deleteProduct: {
        url: "/api/product/delete-product",
        method: "delete",
    },
    searchProduct: {
        url: "/api/product/search-product",
        method: "post",
    },
    addToCartItem: {
        url: "/api/cart/create",
        method: "post",
    },
    getCartItems:{
        url: "/api/cart/get-carts",
        method: "get",
    },
    updateCartItem:{
        url: "/api/cart/update-cart",
        method: "put",
    },
    deleteCartItem:{
        url: "/api/cart/delete-cart",
        method: "delete"
    }
    
};

export default SummeryApi;