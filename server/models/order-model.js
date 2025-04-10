const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product"
    },
    orderId: {
        type: String,
        required: [true, "Please Provide the order id!"],
        unique: true,
    },
    product_details: {
        name: String,
        image: Array,
    },
    paymentId: {
        type: String,
        default: "",
    },
    payment_status: {
        type: String,
        default: ""
    },
    delivery_address: {
        type: mongoose.Schema.ObjectId,
        ref: "Address"
    },
    subTotal: {
        type: Number,
        default:0,
    },
    total: {
        type:Number,
        default: 0,
    },
    invoice_receipt: {
        type: String,
        default: ""
    }
}, {timestamps: true});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;