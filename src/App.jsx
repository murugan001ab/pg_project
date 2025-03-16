import { createContext, useState } from "react"
import Login from "./components/Login"
import Register from "./components/Register"


export const ContextHandle= createContext();



function App() {

 
  const [isRgestered,setIsRegistered]=useState(false)
  const handleRegister=()=>{
    setIsRegistered(!isRgestered)
  }
 
  return (
    <>

   <ContextHandle.Provider value={handleRegister}>
   {isRgestered? <Login/>:<Register/>}
   </ContextHandle.Provider>
    
    </>
  )
}
export default App
