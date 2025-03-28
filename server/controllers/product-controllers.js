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
        let {page, limit, search} = req.body;

        if(!page){
            page= 1
        };

        if(!limit){
            limit = 10
        }
        const query = search ? {
            $text : {
                $search : search
            }
        } : {}

        const skip = (page - 1) * limit;
        const [data,totalCount] = await Promise.all([
            Product.find(query).sort({createdAt : -1 }).skip(skip).limit(limit).populate('category subCategory'),
            Product.countDocuments(query)
        ])

        return res.status(200).json({
            message : "Product data",
            error : false,
            success : true,
            totalCount : totalCount,
            totalNoPage : Math.ceil( totalCount / limit),
            data : data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!",
        })
    }
}

const getProductByCategory = async(req, res)=>{
   try {
    const {id} = req.body;
    if(!id){
        return res.status(400).json({
            success: false,
            error: true,
            message: "Category id not found!"
        })
    }
    const product = await Product.find({
        category : {$in : id}
    }).limit(20)

    return res.status(200).json({
        success: true,
        error: false,
        message: "Product by category",
        data: product
    })
   } catch (error) {
    return res.status(500).json({
        success: false,
        error: true,
        message: error.message || "Internal server error!",
    })
   }

}
const getProductByCategoryAndSubCategory = (req, res)=>{
    try {
        const {categoryId, subCategoryId, page, limit} =req.body;

        if(!categoryId || !subCategoryId ){
            return res.status(400).json({
                success: false,
                error: true,
                message: "category id or sub category id not founded!"
            })
        }

        if(!page){
            page = 1
        }

        if(!limit){
            limit =10
        }

        

    } catch (error) {
        return res.status(500).json({
            success:false,
            error: true,
            message: error.message || "Internal server error!"
        })
    }
}

module.exports = {addProduct, getProduct, getProductByCategory }