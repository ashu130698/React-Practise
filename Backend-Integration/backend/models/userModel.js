
const mongoose = require("mongoose");

const userSchema = mongoose.Schema ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
}, { timeStamps: true });

// create model

const UserModel = mongoose.model('User', userSchema);

//exports
module.exports = UserModel;