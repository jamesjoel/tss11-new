const routes = require("express").Router();
const Product = require("../models/Product");
const path = require("path");
const uni = require("unique-string-generator");


routes.get("/", async(req, res)=>{
    let result = await Product.find();
    res.send({ success : true, result : result });
})

routes.get("/:id", async(req, res)=>{
    let result = await Product.find({ _id : req.params.id });
    res.send({ success : true, result : result[0] });
})

routes.post("/", async(req, res)=>{
    // console.log(JSON.parse(req.body.formdata));
    // console.log(req.files);

    let body = JSON.parse(req.body.formdata);
    let image = req.files.image;

    
    let arr = image.name.split(".");
    let ext = arr[arr.length-1];

    let newname = uni.UniqueString()+"."+ext;
    
    body.image = newname;

    await image.mv(path.resolve()+"/assets/product-images/"+newname);

    await Product.create(body);
    res.send({ success : true });
})
routes.put("/:id", async(req, res)=>{
    await Product.updateMany({ _id : req.params.id }, req.body);
    res.send({ success : true });
})
routes.delete("/:id", async(req, res)=>{
    await Product.deleteMany({ _id : req.params.id });
    res.send({ success : true });
})



module.exports = routes;