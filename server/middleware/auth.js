const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
    try {
        // Retrieve the token from cookies or authorization header
        const token = req?.cookies?.accessToken || req?.headers?.authorization?.split(" ")[1];

        // Check if the token exists
        if (!token) {
            return res.status(401).json({
                success: false,
                error: true,
                message: "Authentication token is missing. Please log in.",
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

        // Check if the token is valid
        if (!decoded) {
            return res.status(401).json({
                success: false,
                error: true,
                message: "Invalid or expired token. Unauthorized access.",
            });
        }

        // Attach the user ID to the request object
        req.userId = decoded.id;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle token verification errors
        return res.status(500).json({
            success: false,
            error: true,
            message: error.message || "Internal server error during authentication.",
        });
    }
};

module.exports = auth;