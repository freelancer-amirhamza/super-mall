const mongoose = require("mongoose");
const Order = require("../models/order-model");
const Cart = require("../models/cart-model");
const UserModal = require("../models/user-model");


const cashOnDeliveryOrder = async (req, res) => {
    try {
        const userId = req.userId;
        const { list_items, totalAmount, subTotalAmount, addressId } = req.body;

        const payload = {
            userId: userId,
            orderId: `ORD-${new mongoose.Types.ObjectId()}`,
            products: list_items.map(el=>({
                productId:el.productId?._id,
                product_details:{
                    name: el.productId?.name,
                    image: el.productId?.image,
                    price: el.productId?.price,
                    discount: el.productId?.discount,
                    unit: el.productId?.unit,
                },
                quantity: el.quantity,
            })),
            
            subTotalAmount: subTotalAmount,
            delivery_address:addressId,
            totalAmount: totalAmount,
            payment_status: "pending",
            order_status: "pending",
            paymentId: ""
        }
        // create an order
        const createOrder = await Order.create(payload);

        // remove from the cart
        const removeCartItems = await Cart.deleteMany({userId:userId});
        const updateInUser = UserModal.updateOne({_id:userId}, {shopping_cart: []});

        return res.status(200).json({
            success: true,
            error: false,
            message: "The Order created successfully!",
            data: createOrder,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!",
        })
    }
}

const getOrderDetails = async(req, res)=>{
    try {
        const userId = req.userId;
        if(!userId){
            return res.status(400).json({
                success: false,
                error: true,
                message: "The user id not found!"
            })
        }
        const orderList = await Order.find({userId:userId})
        .populate("delivery_address")
        .populate({
            path: "userId",
            select: "name email"
        })
        return res.status(200).json({
            success: true,
            error: false,
            message: "The order details gotten successfully!",
            data: orderList,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!",
        })
    }
}

module.exports = { cashOnDeliveryOrder,getOrderDetails }