import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Lnk } from './Lk'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Display_Tokens = () => {

    const[op,setop] = useState([])
    
    
    function dis()
    {
        axios.get(`${Lnk}pendingtokens`).then((p)=>
        {
            setop(p.data)
        })
    }
    useEffect(()=>
    {
        dis()
    },[])

const lp = useNavigate()

function assign(item)
{
    let gh = item
    lp(`/assign?id=${gh}`)
}


  return (
   <>
   <div>
    {op.map((item)=>
    {
        return(<>
        <hr/>
        <hr/>
        <p>{item.Customer_Name}</p>     
        <p>{item.Token_Number}</p>
        <button onClick={()=>{assign(item._id)}}>Assign Executive</button>
        </>)
    })}
   </div>
   </>
  )
}

export default Display_Tokens