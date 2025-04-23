const mongoose = require("mongoose");
const Order = require("../models/order-model");
const Cart = require("../models/cart-model");
const UserModal = require("../models/user-model");


const cashOnDeliveryOrder = async (req, res) => {
    try {
        const userId = req.userId;
        const { list_items, totalAmount, subTotalAmount, addressId } = req.body;

        const payload = list_items.map(el => {
            return ({
                userId: userId,
                orderId: `ORD-${new mongoose.Types.ObjectId()}`,
                productId: el.productId?._id,
                product_details: {
                    name:el.productId?.name,
                    image:el.productId?.image,
                },
                paymentId: "",
                payment_status: "",
                delivery_address: addressId,
                subTotalAmount: subTotalAmount,
                totalAmount:totalAmount,
            })
        })
        const createOrder =await Order.insertMany(payload);

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

module.exports = { cashOnDeliveryOrder, }