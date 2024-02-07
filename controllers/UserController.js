const routes = require("express").Router();
const User = require("../models/User")

routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send({ success : true, result : result });
})
routes.get("/:id", async(req, res)=>{
    let result = await User.find({ _id : req.params.id });
    res.send({ success : true, result : result[0] });
})

routes.put("/:id", async(req, res)=>{
    // { status : 1 }  { status : 0 }
    await User.updateMany({ _id : req.params.id }, req.body);
    res.send({ success : true });
})

routes.delete("/:id", async(req, res)=>{

    await User.deleteMany({ _id : req.params.id });
    res.send({ success : true });
})



module.exports = routes;