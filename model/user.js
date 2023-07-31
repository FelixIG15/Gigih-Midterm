import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    profilePicture:{
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    createdAt: {
        type: Date
    }
  });

const User = mongoose.model('User', userSchema)

export default User;