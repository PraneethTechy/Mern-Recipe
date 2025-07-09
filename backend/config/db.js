import mongoose from "mongoose";

export const connectDB = async () => {
    console.log("ENV MONGO_URI:", process.env.MONGO_URI);
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connnected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1); 
    }
};