import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    First_name: { 
        type: String, 
        required: [true, "First name is required"]
    },
    Last_name: { 
        type: String, 
        required: [true, "Last name is required"]
    },
    email: { 
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"]
    },
    password: { 
        type: String, 
        minLength: [6, "Password must be at least 6 characters long"],
        required: [true, "Password is required"]
    }
},{ timestamps: true });

//! model
const User = mongoose.model("User", userSchema);
export default User;
