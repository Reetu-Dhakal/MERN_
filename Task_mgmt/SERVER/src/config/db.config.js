import mongoose from 'mongoose';

export const connectDb =() => {
    mongoose
    .connect('mongodb://localhost:27017/MERN_DB',{
        dbName: 'MERN_DB',
        autoCreate:true,
    })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log("Database connection failed", err);
        console.log(err);
    });
};