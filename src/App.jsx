import { createContext, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

export const ContextHandle = createContext();

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const handleRegister = () => {
    setIsRegistered(!isRegistered);
  };

  const location = useLocation(); // Get the current route

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Only show Home if the current route is not /login or /register */}
      {location.pathname !== "/login" && location.pathname !== "/register" && <Home />}
    </>
  );
}

export default App;