import mongoose from "mongoose";
import { db_name } from "../constants.js";
const connectDB = async () => {
    try {
        const connectionIns=await mongoose.connect(`${process.env.DB_URI}/${db_name}`)
        console.log(`data base connected !! ${connectionIns.connection.host}`);
    } catch (error) {
        console.log("Mongoose connection error", error);
        process.exit(1)
    }
}
export default connectDB