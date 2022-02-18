import mongoose  from "mongoose";
import bcrypt from "bcryptjs";

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

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password) //compare compares the 1st argument enteredPassword to the encrypted password 2nd argument
};

const User = mongoose.model('User', userSchema); // we want to create the model User from this schema

export default User;