import mongoose from 'mongoose'

export const connectDb = () => {
    console.log(process.env.DB_URI)

    mongoose.connect(process.env.DB_URI ,{
        dbName:process.env.DB_NAME,
        autoCreate: true
    })
    .then(() => {
        console.log("database created");
    })
    .catch((err) => {
        console.log("Database connection error");
        console.log(err)
    })

}
//! mongodb://localhost:27017
    // mongoose.connect()