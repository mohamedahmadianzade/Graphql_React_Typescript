import mongoose from "mongoose";

const InitMongo = async () => {
    await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);
    console.log("----------------------------------------");
    console.log("Databsed connection successfully done!");
    console.log("----------------------------------------");


}
export default InitMongo;