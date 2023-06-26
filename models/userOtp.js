const mongoose = require("mongoose");
const validator = require("validator");



const userOtpschema = new mongoose.Schema({
    email: {
        type: String,
        requried: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email")
            }
        }
    },
    otp: {
        type: String,
        required: true
    }
});


//user otp model
const userotp = new mongoose.model("userotp", userOtpschema);


module.exports = userotp
