import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Lnk } from './Lk'
import { useEffect } from 'react'

const Counters = () => {
const[op1,setop1] = useState([])
const[op2,setop2] = useState([])
const[op3,setop3] = useState([])
const[op4,setop4] = useState([])


function dis1()
{
    axios.get(`${Lnk}c1`).then((lp)=>
    {
        setop1(lp.data)
    })
}

function dis2()
{
    axios.get(`${Lnk}c2`).then((lp)=>
    {
        setop2(lp.data)
    })
}

function dis3()
{
    axios.get(`${Lnk}c3`).then((lp)=>
    {
        setop3(lp.data)
    })
}

function dis4()
{
    axios.get(`${Lnk}c4`).then((lp)=>
    {
        setop4(lp.data)
    })
}

useEffect(()=>
{
    dis1()
    const yh = setInterval(() => {
        dis1()
    }, 2000);

    return ()=>clearInterval(yh)
},[])

useEffect(()=>
{
   dis2()
    const yh = setInterval(() => {
        dis2()
    }, 2000);

    return ()=>clearInterval(yh)
},[])

useEffect(()=>
{
    dis3()
    const yh = setInterval(() => {
        dis3()
    }, 2000);

    return ()=>clearInterval(yh)
},[])

useEffect(()=>
{
    dis4()
    const yh = setInterval(() => {
        dis4()
    }, 2000);

    return ()=>clearInterval(yh)
},[])

let lm = useNavigate()

function cnt(item)
{
    let token = item.Token_Number
    let pl = item._id
    let counter = item.Assign_Counter_Number
    lm(`/resolve?counter=${counter}&token=${token}&pl=${pl}`)
}

function dis()
{

}


  return (
   <>
  <p>COUNTER 1</p>

  {op1.length>0?(op1).map((item)=>
{
    return(<>
   <p onClick={()=>{cnt(item)}}>{item.Token_Number}</p>
    </>)
    
}):<p>Available</p>} 


<p>COUNTER 2</p>
  {op2.length>0?(op2).map((item)=>
{
    return(<>
    <p onClick={()=>{cnt(item)}}> {item.Token_Number} In Progress</p>
    </>)
    
}):<p>Available</p>} 


<p>COUNTER 3</p>
  {op3.length>0?op3.map((item)=>
{
    return(<>
    <p onClick={()=>{cnt(item)}}>{item.Token_Number} In Progress</p>
    </>)
    
}):<p>Available</p>} 


<p>COUNTER 4 : </p>
  {op4.length>0?op4.map((item)=>
{
    return(<>
    <p onClick={()=>{cnt(item)}}>{item.Token_Number} In Progress</p>
    </>)
    
}):<p>Available</p>} 
   
   </>
  )
}

export default Counters