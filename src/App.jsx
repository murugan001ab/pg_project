import { createContext, useState } from "react"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home";
import { Route, Router,Routes } from "react-router-dom";


export const ContextHandle = createContext();



function App() {


  const [isRgestered, setIsRegistered] = useState(false)
  const handleRegister = () => {
    setIsRegistered(!isRgestered)
  }

  return (
    <>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      </Routes>

      <Home />




    </>
  )
}
export default App
