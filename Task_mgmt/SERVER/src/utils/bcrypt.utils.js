//! hash password 
import bcrypt from "bcryptjs";
export const hashedPassword = async (password) => {
    try{
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    } catch (error) {
        console.log(error)
    }
};

export const comparePassword = async (password, hashedPassword) => {
    try{
        return bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.log(error);
    }
};