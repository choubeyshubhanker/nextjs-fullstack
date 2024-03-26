import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        required: [true, "Please provide a email"],
        unique: true,
    },
    email:{
        type: String,
        trim: true,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Please provide a Password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }, 
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;