const Address = require("../models/address-model");
const UserModal = require("../models/user-model");


const addAddress = async (req, res)=>{
    try {
        const userId = req.userId;
        const {addressLine, city, state, pinCode, phone, country} = req.body;
        const newAddress = new Address({addressLine, city, state, pinCode, phone, country, userId});
        const saveAddress = await newAddress.save();

        const addUserAddressId = await UserModal.findByIdAndUpdate(userId,{
            $push: {
                address_details: saveAddress._id
            }
        })

        return res.status(200).json({
            success: true,
            error: false,
            message: "The Address Created Successfully!",
            data: saveAddress,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error!",
        })
    }
}


module.exports = {addAddress, }