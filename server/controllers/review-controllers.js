const CustomError = require("../middleware/error");
const Order = require("../models/order-model");


const addProductReview = async(req,res)=>{
    try {
        const userId = req.userId;
        const {productId, userName, reviewMessage, reviewValue} = req.body;

        const order = await Order.findOne({
            userId: userId,
            "products.productId" : productId,
            "order_status": "confirmed" || "deliverid",
        })
        if(!order){
            return CustomError("You have to pursess the product to give review!", 404)
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            error: true,
            messages:error.messages || "Internal server error!"
        })
    }
}



module.exports = {addProductReview,}