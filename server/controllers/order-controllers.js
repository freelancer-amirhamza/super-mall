const mongoose = require("mongoose");
const Order = require("../models/order-model");
const Cart = require("../models/cart-model");
const UserModal = require("../models/user-model");
const CustomError = require("../middleware/error");

const cashOnDeliveryOrder = async (req, res) => {
    try {
        const userId = req.userId;
        const { list_items, totalAmount, subTotalAmount, deliveryFee, addressId } =
            req.body;

        const payload = {
            userId: userId,
            orderId: `ORD-${new mongoose.Types.ObjectId()}`,
            products: list_items.map((el) => ({
                productId: el.productId?._id,
                product_details: {
                    name: el.productId?.name,
                    image: el.productId?.image,
                    price: el.productId?.price,
                    discount: el.productId?.discount,
                    unit: el.productId?.unit,
                },
                quantity: el.quantity,
            })),

            subTotalAmount: subTotalAmount,
            delivery_address: addressId,
            totalAmount: totalAmount,
            deliveryFee: deliveryFee,
            payment_status: "pending",
            order_status: "pending",
            paymentId: "",
        };
        // create an order
        const createOrder = await Order.create(payload);

        // remove from the cart
        const removeCartItems = await Cart.deleteMany({ userId: userId });
        const updateInUser = UserModal.updateOne(
            { _id: userId },
            { shopping_cart: [] }
        );

        return res.status(200).json({
            success: true,
            error: false,
            message: "The Order created successfully!",
            data: createOrder,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!",
        });
    }
};

const getOrderDetails = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "The user id not found!",
            });
        }
        const orderList = await Order.find({ userId: userId })
            .sort({ createdAt: -1 })
            .populate("delivery_address")
            .populate({
                path: "userId",
                select: "name email",
            });
        return res.status(200).json({
            success: true,
            error: false,
            message: "The order details gotten successfully!",
            data: orderList,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!",
        });
    }
};

const getAdminOrdersDetails = async (req, res) => {
    try {
        const orderList = await Order.find()
            .sort({ createdAt: -1 })
            .populate("delivery_address")
            .populate({
                path: "userId",
                select: "name email",
            });
        return res.status(200).json({
            success: true,
            error: false,
            message: "The order details gotten successfully!",
            data: orderList,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: false,
            message: error.message || "Internal server error!",
        });
    }
};

const updateAdminOrder = async (req, res) => {
    try {
        const { _id, orderId, payment_status, order_status } = req.body;
        if (!_id) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Provide the order id",
            });
        }
        const updateOrder = await Order.findByIdAndUpdate(
            { _id: _id },
            {
                payment_status: payment_status,
                order_status: order_status,
            }
        );
        return res.status(200).json({
            success: true,
            error: false,
            message: "The order updated successfully!",
            data: updateOrder,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!",
        });
    }
};

const deleteAdminOrder = async (req, res) => {
    try {
        const { _id } = req.body;
        if (!_id) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Provide the order id",
            });
        }
        const deleteOrder = await Order.findByIdAndDelete({ _id: _id });

        return res.status(200).json({
            success: true,
            error: false,
            message: "The order deleted successfully!",
            date: deleteOrder,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!",
        });
    }
};
module.exports = {
    cashOnDeliveryOrder,
    getOrderDetails,
    getAdminOrdersDetails,
    updateAdminOrder,
    deleteAdminOrder,
};
