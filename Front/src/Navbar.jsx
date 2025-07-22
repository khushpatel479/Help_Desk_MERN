import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({lpo , text}) {
    const l = useLocation()

function mnp(path)
{
    return l.pathname === path ? "underline text-red-500" : ""
}

  return (
    <>
    <div className='flex justify-center  gap-3 w-screen h-20 bg-amber-500'>
        <nav className='justify-center   md:flex gap-3 items-center flex-1/2 font-bold text-2xl hover:bg-amber-400 cursor-pointer'>
            <Link to="/" className={`${mnp("/")}`}>Add Token</Link>
            <Link to="/display" className={`${mnp("/display")}`}>Display Tokens</Link>
            <Link to="/counter" className={`${mnp("/counter")}`}>Counters</Link>
            <Link to="/quize" className={`${mnp("/quize")}`}>Quize</Link>

        </nav>
        <button className='flex-1/2 hover:bg-amber-400 cursor-pointer text-red-600' onClick={lpo}>{text}</button>
    </div>
    
    </>
  )
}

export default Navbar