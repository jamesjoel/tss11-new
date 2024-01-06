const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", async(req, res)=>{
    let {username, password} = req.body;
    let result = await User.find({username : username});
    if(result.length==1)
    {
        if(result[0].password == sha1(password))
        {
            let obj = { _id : result[0]._id };
            let token = jwt.sign(obj, "the stepping stone");
            
            res.send({success : true, token : token});
            
        }else{
            
            res.send({success : false, type : 2})
        }
    }
    else{
        
        res.send({ success : false, type : 1 })
    }

})

module.exports = routes;
/*
    Model.find({ username : "rohitttt@gmail.com" })

*/