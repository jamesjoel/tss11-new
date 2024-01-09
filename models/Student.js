require("../config/db");
const mongoose = require("mongoose")
const StudentSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
})

module.exports = mongoose.model("student", StudentSchema);