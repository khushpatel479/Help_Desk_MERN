const mn = require("mongoose")
const Help = new mn.Schema({
    Customer_Name:{
        type:String,
        default:null
    },
    Query:{
        type:String,
        default:null

        
    },
    Token_Number:{
        type:Number,
        default:null

    },
    Assign_Counter_Number:{
        type:Number,
        default:null


    },
    Executive_Name:{
        type:String,
        default:null

    },
    Resolution_Remarks:{
        type:String,
        default:null


    },
    Resolution_Status:{
        type:String,
        default:"Pending"
    },
    Created_On:{
        type:Date,
        default:Date.now
    },
    Resolved_On:{
        type:Date,
        default:null

    }
})

exports.Help = mn.model("Help" , Help)