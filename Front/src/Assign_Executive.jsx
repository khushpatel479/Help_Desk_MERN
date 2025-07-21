import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Lnk } from './Lk'

const Assign_Executive = () => {
    const[Executive_Name , setExecutive_Name] = useState("")
    const[Assign_Counter_Number , setAssign_Counter_Number] = useState("")
    const[sp] = useSearchParams()
    const[_id , set_id] = useState("")


useEffect(()=>
{
    set_id(sp.get("id"))
},[sp,_id])

function onname(e)
{
    let val = e.target.value
    setExecutive_Name(val)
}

function oncounter(e)
{
    let val = e.target.value
    setAssign_Counter_Number(val)
    console.log(val)
}

function ol(e)
{
    e.preventDefault()
    axios.put(`${Lnk}assignexecutive`,{_id:_id ,Executive_Name:Executive_Name, Assign_Counter_Number:Assign_Counter_Number , Resolution_Status:"In Progress"}).then((lm)=>
    {
        console.log(lm)
    })
}

  return (
   <>
   <div>
    <input type='text' onChange={onname} placeholder='Executive Name'/>
    <br/>
    <select onChange={oncounter}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>


    </select>
    <br/>
    <button onClick={ol}>Assign</button>
   </div>
   </>
  )
}

export default Assign_Executive