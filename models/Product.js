require("../config/db");

const mongoose = require("mongoose");
const ProSchema = mongoose.Schema({
    title : String,
    category : String,
    subcategory : String,
    price : Number,
    detail : String,
    quantity : Number,
    discount : Number,
    image : String
})

module.exports = mongoose.model("product", ProSchema);