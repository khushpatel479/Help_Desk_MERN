import React from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from "axios"
import {Lnk} from "./Lk"
const Add_Tokens = () => {
    const[Customer_Name , setCustomer_Name] = useState("")
    const[Query , setQery] = useState("")
    const[Token , setToken] = useState("")

function onname(e)
{
    let val = e.target.value
    setCustomer_Name(val)
}
function onquery(e)
{
    let val = e.target.value
    setQery(val)
}

let um = useNavigate()

function onsub(e)
{
    e.preventDefault()
    axios.post(`${Lnk}instoken`,{Customer_Name:Customer_Name , Query:Query}).then((p)=>
    {
        console.log(p.data)
        setToken(p.data)
        um(`/thankyou?id=${p.data}`)

    })
}



  return (
    <>
    <div>
        <input type='text' placeholder='Enter Name' onChange={onname} value={Customer_Name}/>
        <br/>
        <input type='text' placeholder='Query' onChange={onquery} value={Query}/>
        <br/>
        <input onClick={onsub} type='submit' value="Generate Token"/>
    </div>
    </>
  )
}

export default Add_Tokens