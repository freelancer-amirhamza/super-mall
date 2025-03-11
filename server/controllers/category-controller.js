const Category = require("../models/category-model");

const addCategory = async (req, res) => {
    try {
        const { name, image } = req.body;
        if (!name || !image) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Please provide all required fields"
            })
        }
        const newCategory = new Category({ name, image });
        await newCategory.save();
        if (!newCategory) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Category not created"
            })
        };
        res.status(201).json({
            success: true,
            error: false,
            message: "Category created successfully",
            data: newCategory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal Server Error"
        })
    }
}

const getCategory = async (req, res) => {
    try {
        const category = await Category.find()
        if (!category) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "category not found!"
            })
        }
        res.status(200).json({
            success: true,
            error: false,
            message : "category founded!",
            data: category,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "something is wrong"
        })
    }
}
module.exports = { addCategory, getCategory };