import mongoose from 'mongoose';
const UserLogSchema = new mongoose.Schema({
    name: String
});
const UserLogModel = mongoose.model('userLog', UserLogSchema);
export default UserLogModel;
