const routes = require("express").Router();
const Category = require("../models/Category")
const SubCate = require("../models/SubCategory");

routes.get("/", async(req, res)=>{
    let result_cate = await Category.find();
    let result = await Promise.all(result_cate.map(async(value)=>{

        let catename = value.name;
        let result_subcate = await SubCate.find({category : catename})
        let obj = { _id : value._id, name : value.name, subcate : result_subcate}
        return obj;
    })
    )
    res.send({result})

    // let result = [];
    // let result=await Promise.all(result_cate.map(async(value)=>{
        
    //         let catename = value.name; // Home Ap
    //         let subcate_result = await SubCate.find({ category : catename })
    //         let obj = { _id : value._id, category : catename, subcategory : subcate_result }
    //         return obj;
            
    
        
    // }))
    // console.log(result);
    // res.send({ result : result })
})

module.exports = routes;