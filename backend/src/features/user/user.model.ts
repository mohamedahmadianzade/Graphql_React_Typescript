import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    userId: String,
    name: String,
    username: String,
    password: String,
    avatar: String,
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;