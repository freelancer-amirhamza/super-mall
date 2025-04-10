const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    image: {
        type: Array,
        default: [],
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
    category: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Category",
        }
    ],
    subCategory: [{
<<<<<<< HEAD
        type: mongoose.Schema.ObjectId,
        ref: "subCategory",
    }],
=======
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
    },
    subCategory: {
        type: mongoose.Schema.ObjectId,
        ref: "subCategory",
    },
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
=======
        type: mongoose.Schema.ObjectId,
        ref: "subCategory",
    }],
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
    unit: {
        type: String,
        default: ""
    },
    stock: {
        type: Number,
        default: null
    },
    price: {
        type: Number,
        default: null,
    },
    discount: {
        type: Number,
        default: null,
    },
    description: {
        type: String,
        default: "",
    },
    more_details: {
        type: Object,
        default: {}
    },
    publish: {
        type: Boolean,
        default: true,
    }
},
    { timestamps: true }
)

// create a text index

productSchema.index({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
    name  : "text",
    description : 'text'
},{
    name : 10,
    description : 5
<<<<<<< HEAD
=======
    name: "text",
    description: "text",
}, {
    name: 10,
    description: 5
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
})


const Product = mongoose.model("Product", productSchema);

module.exports = Product;