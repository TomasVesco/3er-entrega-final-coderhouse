import mongoose from 'mongoose';

const user = 'users';

const userSchema = new mongoose.Schema({
    name: {type: String, require: true, max: 100},
    password: {type: String, require: true, max: 100}
});

export const usersAtlasDB = mongoose.model(user,userSchema);