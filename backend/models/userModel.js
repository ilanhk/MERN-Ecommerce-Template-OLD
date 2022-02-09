import mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false //so if a user registers they are not an admin by default
    }
}, {
    timeStamps: true // will create createdAt and updatedAt automatically
});

const User = mongoose.model('User', userSchema); // we want to create the model User from this schema

export default User;