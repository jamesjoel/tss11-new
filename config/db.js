// require("mongoose").connect("mongodb://0.0.0.0:27017/tss11")
// .then(()=>{
//     console.log("DB Connected")
// }).catch((err)=>{
//     console.log("DB NOT ----- Connected", err);
// })
require("mongoose").connect("mongodb+srv://jamessteppingstone:eZfqMZtXWY98IJpb@cluster0.h4svdn4.mongodb.net/")
.then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log("DB NOT ----- Connected", err);
})


// username : jamessteppingstone
// password : eZfqMZtXWY98IJpb