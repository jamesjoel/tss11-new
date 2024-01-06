require("../config/db");
const mongoose = require("mongoose");

const CountrySchema = mongoose.Schema({
    name : String, 
    dial_code : String,
    code : String
},{collection : "country"})

module.exports = mongoose.model("country", CountrySchema)