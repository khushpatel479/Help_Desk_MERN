const express = require("express")
const {Help} = require("../Models/Help_Model")
const hp = express.Router()

hp.post("/instoken" , async(req,res)=>
{
    const{Customer_Name , Query} = req.body
    const yh = await Help.findOne().sort({Token_Number:-1})
    let tknum = 900981
    if(yh&&yh.Token_Number)
    {
        tknum = yh.Token_Number+1
    }
    const vb = await Help.create({Customer_Name:Customer_Name , Query:Query , Token_Number:tknum})
    res.send(tknum)
})

hp.put("/assignexecutive" , async(req,res)=>
{
    const{_id , Assign_Counter_Number , Executive_Name , Resolution_Status} = req.body
    const yh = {}
    if(_id) yh._id = _id
    if(Assign_Counter_Number) yh.Assign_Counter_Number = Assign_Counter_Number
    if(Executive_Name ) yh.Customer_Name = Executive_Name
    if(Resolution_Status) yh.Resolution_Status = Resolution_Status
    const upd = await Help.findOneAndUpdate({_id:_id} , yh , {new:true})
    res.send(upd)
})

hp.get("/pendingtokens" , async(req,res)=>
{
    const yh = await Help.find({Resolution_Status:"Pending"})
    res.send(yh) 
})

hp.get("/c1" , async(req,res)=>
{
    const yh = await Help.find({Assign_Counter_Number:"1" , Resolution_Status:"In Progress"})
    res.send(yh)
})

hp.get("/c2" , async(req,res)=>
{
    const yh = await Help.find({Assign_Counter_Number:"2" , Resolution_Status:"In Progress"})
    res.send(yh)
})

hp.get("/c3" , async(req,res)=>
{
    const yh = await Help.find({Assign_Counter_Number:"3" , Resolution_Status:"In Progress"})
    res.send(yh)
})

hp.get("/c4" , async(req,res)=>
{
    const yh = await Help.find({Assign_Counter_Number:"4" , Resolution_Status:"In Progress"})
    res.send(yh)
})

hp.put("/resolve" , async(req,res)=>
{
    const{_id,Resolution_Remarks , Resolution_Status } = req.body
    const yh = {}
    if(_id) yh._id = _id
    if(Resolution_Remarks) yh.Resolution_Remarks = Resolution_Remarks
    if(Resolution_Status) yh.Resolution_Status = Resolution_Status
    const upd = await Help.findOneAndUpdate({_id} , yh , {new:true})
    res.send(upd)
})
hp.post("/getcomp", async(req,res)=>
{
    const{Assign_Counter_Number} = req.body
    const yh = await Help.find({Assign_Counter_Number:Assign_Counter_Number})
    res.send(yh) 
})

module.exports = hp