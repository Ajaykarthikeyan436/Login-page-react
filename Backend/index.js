const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())//Middleware

app.use(express.urlencoded({extended:true}))//Middleware

var username = "Ajay"
var password = 123

app.post("/login",function(req,res){

    console.log(req)

    if(req.body.username == username && req.body.password == password)
    {
        res.send(true)
    }
    else
    {
        res.send(false)
    }
})

app.listen(5000,function(){
    console.log("Server Started....")
})