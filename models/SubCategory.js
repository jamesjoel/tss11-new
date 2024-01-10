require("../config/db")

const mongoose = require("mongoose")
const SubCategorySchema = mongoose.Schema({
    category : String,
    name : String
})

module.exports = mongoose.model("subcategory", SubCategorySchema);