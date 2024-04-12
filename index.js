//  ******************** NODE JS *****************************************


// const {
//     name,
//     age 
// }=require("./util.js");
// console.log(name,age);


// const express=require("express");
// const users=require("./users.json");
// const bodyParser=require("body-parser");

// const app=express();
// app.use(bodyParser.json())
// const url = "/user"
// app.post(url,(req,res)=>{
//     const newUser = req.body;
//     console.log(newUser)
//     users.push(newUser);
//     res.status(201).json(users);
// })

// app.get("/",(req,res)=>{
//     res.send("hello")
// })
// const express=require("express");
// const bodyParser=require("body-parser");
// const app=express();
// app.use(bodyParser.json())

// app.post("/",(req,res)=>{
//     const neww = req.body;
//     console.log(neww)
//     res.status(201).json(neww)
// })
// app.get("/rrrrr",(req,res)=>{
//     res.status(200).json(users)
// })

// app.get("/ram",(req,res)=>{
//     const userId=req.params["id"];
//     const newOne = users.find((a)=>{
//         return userId === a.id
//     })
//     res.status(200).json(newOne)
// })
// app.listen("3005",()=>{
//     console.log("Server is running");
// })


// const express = require("express");
// const users = require("./users.json");
// // const body = require("body-parser");
// let app = express();
// const PORT=process.env.PORT || 3005
// app.use(body.json())


// app.get("/",(req,res)=>{
//     res.status(200).json(users)
   
// })
// app.get("/:id",(req,res)=>{
//   let dev =parseInt(req.params.id)
//  let rr= users.filter((element)=>{
//    return dev === element.id
//   })

//   res.status(222).json(rr)
//   console.log(dev);
// })

// app.get("/user/:name",(req,res)=>{
//     let userName = req.params.name
//     let oName =users.filter((ele)=>{
//         return userName === ele.name
//     })
//     res.status(225).json(oName)
//     console.log(userName)
//     })



// app.post("/",(req,res)=>{
//     const newUser=req.body
//     users.push(newUser);
//     res.status(201).json(users);
// })




// app.get("/",(req,res)=>{
//     res.status(201).send("helloooo")
// })

// app.get("/:id",(req,res)=>{
//     let userId = parseInt(req.params.id)
//     let result = users.filter((element)=>{
//         return userId === element.id
//     })
//     res.status(200).json(result)
// })

// app.post("/post",(req,res)=>{
//     const newUser=req.body
//     users.push(newUser)
//     res.status(201).json(users)
// })

// app.listen(PORT,()=>{
//     console.log("server is running..........!")
// })

// const num =9;
// let a= function(num){
//     b=console.log("hlo Ramya...!")
// }(5)
// console.log(a)
// console.log(a)

// class Student{
//     constructor(name,id){
//         this.name=name;
//         this.id=id
//     };
// }
// const student=new Student("ramya",1);
// console.log(student.name);


const express=require("express");
const app=express();
app.get("/user",(req,res)=>{
    res.status(201).send("helloooooo")
});
app.listen("3000",()=>{
});