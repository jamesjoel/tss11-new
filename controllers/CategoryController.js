const routes = require("express").Router();
const Cate = require("../models/Category");
const SubCate = require("../models/SubCategory");
const Product = require("../models/Product")

routes.get("/", async(req, res)=>{
    let result = await Cate.find();
    res.send({ success : true, result : result });
})
routes.get("/:id", async(req, res)=>{
    let result = await Cate.find({ _id : req.params.id });
    res.send({ success : true, result : result[0] });
})

// { name : "Home Appliance" }
routes.post("/", async(req, res)=>{
    // console.log(req.body)
    await Cate.create(req.body);
    res.send({ success : true });
})
routes.put("/:id", async(req, res)=>{
    let result = await Cate.find({_id : req.params.id});
    let catename = result[0].name;
    await Product.updateMany({ category : catename }, {category : req.body.name});
    await SubCate.updateMany({ category : catename }, {category : req.body.name});
    await Cate.updateMany({ _id : req.params.id }, req.body);
    res.send({ success : true });
})
routes.delete("/:id", async(req, res)=>{
    let result = await Cate.find({_id : req.params.id});
    let catename = result[0].name;
    await Product.deleteMany({ category : catename });
    await SubCate.deleteMany({ category : catename });
    await Cate.deleteMany({ _id : req.params.id });
    res.send({ success : true });
})



module.exports = routes;