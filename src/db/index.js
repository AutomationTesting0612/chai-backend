import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";

const connectDB= async () => {
    try {
        console.log(`${process.env.MONGODB_URI}`)
       const mongooseConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MongoDb Connect !! DB Host: ${mongooseConnection.connection.host}`);

    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}


export default connectDB