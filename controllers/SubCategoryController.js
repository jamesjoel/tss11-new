const routes = require("express").Router();
const SubCategory = require("../models/SubCategory");
const Product = require("../models/Product")


routes.get("/", async(req, res)=>{
    let result = await SubCategory.find();
    res.send({ success : true, result : result });
})

// 8080/api/subcategory/home applinace



routes.get("/:id", async(req, res)=>{
    let result = await SubCategory.find({ _id : req.params.id });
    res.send({ success : true, result : result[0] });
})
routes.get("/subcate/:catename", async(req, res)=>{
    let result = await SubCategory.find({ category : req.params.catename });
    res.send({ success : true, result : result });
})

// { name : "Home Appliance" }
routes.post("/", async(req, res)=>{
    // console.log(req.body)
    await SubCategory.create(req.body);
    res.send({ success : true });
})
routes.put("/:id", async(req, res)=>{
    let result = await SubCategory.find({_id : req.params.id});
    let subcatename = result[0].name;
    await Product.updateMany({subcategory : subcatename}, {subcategory : req.body.name});
    await SubCategory.updateMany({ _id : req.params.id }, req.body);
    res.send({ success : true });
})
routes.delete("/:id", async(req, res)=>{
    let result = await SubCategory.find({_id : req.params.id});
    let subcatename = result[0].name;
    await Product.deleteMany({subcategory : subcatename});
    await SubCategory.deleteMany({ _id : req.params.id });
    res.send({ success : true });
})



module.exports = routes;