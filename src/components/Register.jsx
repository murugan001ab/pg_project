import React, { useState,useContext } from "react";
import Image from "../assets/Cashew.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./Login.css";
import { ContextHandle } from "../App";


export const Register = () => {
  const [showPassword, setShowPassword] = useState(true);
  const handleClick=useContext(ContextHandle)


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Create an account</h2>
            <p>Please fill in the details to register</p>
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type="password" placeholder="Password" />
                
              </div>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <div className="login-center-buttons">
                <button type="button">Register</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Register with Google
                </button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Already have an account? <a href="#" onClick={handleClick} >Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;