import mongoose from 'mongoose';
const LogSchema = new mongoose.Schema({
    date: String,
    description: String,
    user: String,
});
const LogModel = mongoose.model('log', LogSchema);
export default LogModel;
