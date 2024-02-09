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
            if(result[0].status == 1)
            {

                let obj = { _id : result[0]._id };
                let token = jwt.sign(obj, "the stepping stone");
                
                res.send({success : true, token : token, name : result[0].name});
            }else{
                res.send({success : false, type : 3})
            }
            
        }else{
            
            res.send({success : false, type : 2})
        }
    }
    else{
        
        res.send({ success : false, type : 1 })
    }

})

routes.post("/changepassword", async(req, res)=>{
    if(req.headers.authorization)
    {
        let token = req.headers.authorization;
        let obj = jwt.decode(token, "the stepping stone")
        let result = await User.find({ _id : obj._id });
        if(result[0].password==sha1(req.body.current_password))
        {   
            await User.updateMany({ _id : obj._id }, {password : sha1(req.body.new_password)})
            res.send({success: true})
        }
        else{
            res.send({ success : false })
        }

    }
    else{
        res.send({ success : false })
    }
})

module.exports = routes;
/*
    Model.find({ username : "rohitttt@gmail.com" })

*/