const mongoose = require("mongoose");
const Order = require("../models/order-model");
const Cart = require("../models/cart-model");
const UserModal = require("../models/user-model");
const SSLCommerzPayment = require('sslcommerz-lts');
const Address = require("../models/address-model");
const store_id = 'mysho65da069a5577d'
const store_passwd = 'mysho65da069a5577d@ssl'
const is_live = false //true for live, false for sandbox


const onlinePayment = async (req, res) => {
    try {
        const { list_items, totalAmount, subTotalAmount, deliveryFee, addressId } =
            req.body;
        const userId = req.userId;
        const tran_id = `ORD-${new mongoose.Types.ObjectId()}`
        const user = await UserModal.findOne(userId);
        const address = await Address.findById(addressId);
        const orderPayload = {
            userId: userId,
            orderId: tran_id,
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
            subTotalAmount,
            delivery_address: addressId,
            totalAmount,
            deliveryFee,
            payment_status: "pending",
            order_status: "pending",
            paymentId: "",
        };

        const createOrder = await Order.create(orderPayload);

        const data = {
            total_amount: totalAmount + deliveryFee,
            currency: 'BDT',
            tran_id: tran_id,
            success_url: 'http://localhost:5000/api/order/payment-success',
            fail_url: 'http://localhost:5000/api/order/payment-cancel',
            cancel_url: 'http://localhost:5000/api/order/payment-cancel',
            ipn_url: 'http://localhost:5000/api/order/ipn',
            shipping_method: 'Courier',
            product_name: 'Order Products',
            product_category: 'Mixed',
            product_profile: 'general',
            cus_name: user.name,
            cus_email: user.email,
            cus_add1: address.addressLine,
            cus_city: address.city,
            cus_state: address.state,
            cus_postcode: address.pinCode,
            cus_country: address.country,
            cus_phone: address.phone,
            ship_name: user.name,
            ship_add1: address.addressLine,
            ship_city: address.city,
            ship_state: address.state,
            ship_postcode: address.pinCode,
            ship_country: address.country,
        };
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(apiResponse => {
            let GatewayPageURL = apiResponse.GatewayPageURL;
            res.status(200).json({
                success: true,
                gatewayUrl: GatewayPageURL
            });
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!"
        })
    }
}

const handleSuccess = async (req, res) => {
    try {
        res.redirect("http://localhost:5173/success")
    } catch (error) {
        res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!"
        })
    }
}


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
    onlinePayment,
    handleSuccess,
};
