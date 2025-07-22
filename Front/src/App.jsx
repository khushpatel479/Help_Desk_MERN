import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Add_Tokens from './Add_Tokens'
import Display_Tokens from './Display_Tokens'
import Thankyou from './Thankyou'
import Assign_Executive from './Assign_Executive'
import Counters from './Counters'
import Resolve_Tokens from './Resolve_Tokens'
import Quize from './Quize'
function App() {
const[whole,setwhole] = useState("white")
const[text,settext] = useState("Dark")
const[active,setactive] = useState(false)
const lpo = ()=>
{
  if(!active)
  {
    settext("Dark")
    setwhole("white")
    setactive(true)
  }
  else if(active)
  {
    setactive(false)
    setwhole("black")
    settext("Light")
  }
}

const Lay = ({children})=>
(
  <>
  <Navbar text={text} lpo={lpo} />
  {children}
  </>
)


  return (
    <>
    <div className={`w-screen h:screen  bg-${whole}`}>
     <BrowserRouter>
     <Routes>
      <Route index element={<Lay><Add_Tokens/></Lay>}></Route>
      <Route path='/thankyou' element={<Lay><Thankyou/></Lay>}></Route>
      <Route path='/display' element={<Lay><Display_Tokens/></Lay>}></Route>
      <Route path='/assign' element={<Lay><Assign_Executive/></Lay>}></Route>
      <Route path='/counter' element={<Lay><Counters/></Lay>}></Route>
      <Route path='/resolve' element={<Lay><Resolve_Tokens/></Lay>}></Route>
      <Route path='/quize' element={<Lay><Quize/></Lay>}></Route>

     </Routes>
     </BrowserRouter>
     </div>
    </>
  )
}

export default App
