require("../config/db");
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    
    contact : String,
    address : String,
    gender : String,
    state : String,
    city : String,
    status : { type : Number, default : 1}
})

module.exports = mongoose.model("user", UserSchema);