import mongoose from 'mongoose';

const user = 'users';

const userSchema = new mongoose.Schema({
    name: {type: String, require: true, max: 100},
    password: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 100, unique: true},
    address: {type: String, require: true, max: 100},
    age: {type: Number, require: true, max: 100},
    phoneNumber: {type: Number, require: true, max: 9999999999999},
    photo: {type: String, require: true, max: 1000}
});

export const usersAtlasDB = mongoose.model(user,userSchema);