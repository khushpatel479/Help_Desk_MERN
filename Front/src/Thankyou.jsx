import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Thankyou = () => {
    const [sp] = useSearchParams()
    const[tk,settk] = useState("")
    const[sec , setsec] = useState(5)

const lp = useNavigate()

setTimeout(() => {
    setsec(pre=>pre-1)
    lp("/")
    return ()=>clearTimeout()
}, 5000);


    useEffect(()=>
    {
        settk(sp.get("id"))
    },[sp,tk])
  return (
   <>
   <h1>Your Token Number Is : {tk}</h1>
   <h1>Thankyou You will Be Redirect To Generate Token Page in {sec} .....</h1>
   <br/>
   <button onClick={()=>{lp("/")}}>Back</button>
   </>
  )
}

export default Thankyou