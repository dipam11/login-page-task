import React from "react";
import "./Login.css";
import firebase from "./firebase"
import image from "./programming.png";
import { signUp, login, useAuth} from "./firebase";
import { useState, useRef } from "react";

function Login() {
  const [action, setAction] = useState("Login");
  const [loading, setloading] = useState(false);
  // const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setloading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    }catch{
      alert("Email Already Exists !!");
    }
    setloading(false);
  }

  async function handleLogin() {
    setloading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setloading(false);
  }
  
  handleChange = handleChange.bind(this);
  switchLogin = switchLogin.bind(this);

  function handleChange() {
    setAction("Signin");
  }
  function switchLogin() {
    setAction("Login");
  }


  /////////////////////////////////////
  return action === "Login" ? (
    <div className="login">
      <div className="svg">
        <img src={image} alt="png" />
        <h3>Welcome to EduOneNote!</h3>
      </div>
      <div className="form">
        <h1>Get Started</h1>
        <p onClick={handleChange}>Already have account? Sign In</p>
        <div className="input__fields">
          <p>Name</p>
          <input type={"text"} placeholder="Your Name"></input>
          <p>Email</p>
          <input ref={emailRef} type={"text"} placeholder="Email"></input>
          <p>Password</p>
          <input
            ref={passwordRef}
            type={"password"}
            placeholder="Password"
          ></input>
          <button
            disabled={loading}
            onClick={handleSignup}
            className="btn btn-grad"
            alert={"Signed In Successfully!!"}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="login">
      <div className="svg">
        <img src={image} alt="png" />
        <h3>Welcome to EduOneNote!</h3>
      </div>
      <div className="form">
        <h1>Get Started</h1>
        <p onClick={switchLogin}>Back to Sign Up</p>
        <div className="input__fields">
          <p>Email</p>
          <input ref={emailRef} type={"text"} placeholder="Email"></input>
          <p>Password</p>
          <input
            ref={passwordRef}
            type={"password"}
            placeholder="Password"
          ></input>
          <button
            alert={"Signed In Successfully!!"}
            disabled={loading}
            onClick={handleLogin}
            className="btn btn-grad"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
