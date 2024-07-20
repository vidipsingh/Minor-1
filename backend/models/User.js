const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
})  

const UserModel = mongoose.model("Minor-1", UserSchema)
module.exports = UserModel