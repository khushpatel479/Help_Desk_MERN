const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
const mn = require("mongoose")





mn.connect("mongodb://localhost:27017/" , {dbName:"Help_Desk"}).then(()=>
{
    console.log("Connected")
}).catch((ree)=>
{
    console.log(ree)
})


const hp = require("./Routes/Help_Routes")
app.use("/hp" , hp)



app.listen(3404,()=>
{
    console.log("At 3404")
})