const Product = require("../models/product-model");


const addProduct = async (req, res) =>{
    try {
        const {name, image, category, subCategory, unit, stock, price, discount,description, more_details } = req.body;

        if(!name || !image[0] || !category[0] || !subCategory[0] || !unit  || !price  ){
            return res.status(400).json({
                success: false,
                error: true,
                message: "Enter required field!"
            })
        }

        const newProduct = new Product({name, image, category, subCategory, unit, stock, price, discount,description, more_details})
        await newProduct.save()
        return res.status(200).json({
            success: true,
            error:false,
            message: "The product created successfully!",
            data: newProduct,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:true,
            message: error.message || "Internal server error!"
        })
    }
}
const getProduct = async(req, res)=>{
    try {
        const {page, limit, search} = req.body;

        if(!page){
            page= 1
        };

        if(!limit){
            limit = 10
        }
    } catch (error) {
        
    }
}


module.exports = {addProduct, }