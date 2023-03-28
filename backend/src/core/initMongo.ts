import mongoose from "mongoose";
import LogModel from "../features/log/log.model.js";
import UserModel from "../features/user/user.model.js";

const InitMongo = async () => {
    await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`);
    console.log("----------------------------------------");
    console.log("Databsed connection successfully done!");
    console.log("----------------------------------------");
    const config = await ConfigModel.findOne({});
    if (!config)
        seedData();

}



/**
 *
 * save sample data at first time of project running
 */
const seedData = async () => {
    const mohamed = new UserModel({
        name: "steve jobs", username: "steve", password: "123456", avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHK53sX0lbh-affXiWpZ5zxLV30pi3aAqKYA&usqp=CAU'
    });
    const furkan = new UserModel({
        name: "elon musk", username: "elon", password: "987654", avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZUUVIAri4JwuRq7DGIeoyqwODH-3GEVeGw&usqp=CAU'
    });
    const logSteve = new LogModel({
        date: new Date().toDateString(),
        description: "Steve jobs user created successfully",
        user: "steve"
    })
    await logSteve.save();

    const logElon = new LogModel({
        date: new Date().toDateString(),
        description: "elon musk user created successfully",
        user: "elon"
    })
    await logElon.save();

    await mohamed.save();
    await furkan.save();

    const config = new ConfigModel({ firstTime: false })
    await config.save();
}

const ConfigSchema = new mongoose.Schema({
    firstTime: Boolean,
});

const ConfigModel = mongoose.model('Config', ConfigSchema);




export default InitMongo;