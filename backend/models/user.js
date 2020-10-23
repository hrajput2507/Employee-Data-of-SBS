const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    phone : String,
    intrests : String,
    Date : Date,
})

module.exports = mongoose.model('users', UserSchema)
