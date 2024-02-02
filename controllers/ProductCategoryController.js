const routes = require("express").Router();
const Product = require("../models/Product");

// localhost:8080/api/product-category/category/Electrnic
routes.get("/category/:catename", async(req, res)=>{
    let result = await Product.find({ category : req.params.catename });
    res.send({ success : true, result });
})

module.exports = routes;