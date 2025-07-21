import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Lnk } from './Lk'

const Resolve_Tokens = () => {
    const[sp] = useSearchParams()
    const[counter,setcounter] = useState("")
    const[token,settoken]= useState("")
    const[_id,set_id] = useState("")
    const[name , setname] = useState("")
    const[complaint , setcomplaint] = useState("")
    const[curr,setcurr] = useState(0)
    const[op,setop] = useState([])
    const[status,setatus] = useState("")
const[msg,setmsg] = useState("")
    useEffect(()=>
    {
        setcounter(sp.get("counter"))
        settoken(sp.get("token"))
        set_id(sp.get("pl"))
    },[sp,counter,token,_id])

function dis()
{
    axios.post(`${Lnk}getcomp`,{Assign_Counter_Number:counter}).then((lp)=>
    {
        let val1 = lp.data.map((item)=>item.Customer_Name)
        setname(val1)
        let val2 = lp.data.map((item)=>item.Query)
        setcomplaint(val2)
        setop(lp.data)
        console.log(lp.data)
    })
}

useEffect(()=>
{
    dis()
},[counter])
    
function nxt()
{
    setcurr((pre)=>(pre+1))
}

function upd(e)
{
    
    let sl = e.target.value
    setatus(sl)
    console.log(sl)
   
}
    
function onmsg(e)
{
    let val = e.target.value
    setmsg(val)
}
function updd(item)
{
    let _id = item
    console.log(_id , msg , status)
    axios.put(`${Lnk}resolve`,{_id,_id , Resolution_Remarks:msg , Resolution_Status:status}).then((lp)=>
    {
        console.log(lp.data)
    })
}
  return (
    <>
    {op.map((item,index)=>
    {
        if(index === curr)
        {
            return(<>
            
    <p>Counters : {item.Assign_Counter_Number}</p>
    <p>Token : {item.Token_Number}</p>
    <p>Complaint : {item.Query}</p>
   <select onChange={(e)=>{upd(e)}}>
    <option value="Resolved">Resolved</option>
    <option value="Customer Left">Customer Left</option>
   </select>
   <br/>
   <input placeholder='Message' onChange={onmsg} type='text'/>
   <br/>
   <button onClick={()=>{updd(item._id)}}>Submit</button>
   <br/>
    <button onClick={()=>nxt()} >[Request Next]</button>

            
            </>)
        }
    })}
    
    </>
  )
}

export default Resolve_Tokens