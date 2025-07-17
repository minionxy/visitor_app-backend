const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const visitorModel = require("./models/visitor")
const app=express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://newuser:newuser123@cluster0.fshkagd.mongodb.net/visitorDb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/addvisitor",(req,res)=>{
    console.log(req.body)
    let data_store=visitorModel(req.body)
    data_store.save()

    res.json({
        "status":"success"
    })
})
app.post("/viewall",(req,res)=>{

    visitorModel.find().then(
        (items)=>{
             res.json(items)
        }
    ).catch()
   
})
app.listen(4000,(error)=>{console.log("server running"+error)})