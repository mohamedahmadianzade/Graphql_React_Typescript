import mongoose from 'mongoose';
const kittySchema = new mongoose.Schema({
    name: String
});
const LogModel = mongoose.model('Kitten', kittySchema);
export default LogModel;
