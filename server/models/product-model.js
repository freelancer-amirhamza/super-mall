const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: Array,
            default: [],
        },
        category: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Category",
            },
        ],
        subCategory: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "subCategory",
            },
        ],
        unit: {
            type: String,
            default: "",
        },
        stock: {
            type: Number,
            default: null,
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
            default: {},
        },
        publish: {
            type: Boolean,
            default: true,
        },
    },
<<<<<<< HEAD
    { timestamps: true }
);
=======
    image: {
        type: Array,
        default: [],
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
    },
    subCategory: {
        type: mongoose.Schema.ObjectId,
        ref: "subCategory",
    },
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
    name: "text",
    description: "text",
}, {
    name: 10,
    description: 5
})
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396

// Create a text index
productSchema.index(
    {
        name: "text",
        description: "text",
    },
    {
        weights: {
            name: 10,
            description: 5,
        },
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;