import React from "react";
import BackButton from "../components/BackButton";
import LoginImg from "../assets/enter.png";
import "../styles/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="LoginPage">
      <BackButton className="LoginBackButton"/>
      <div className="LoginContainer">
        <form action="/" className="LoginFormContainer">
          <div className="LoginImgContainer">
            <img src={LoginImg} alt="" className="LoginImg" />
          </div>
          <div className="LoginHeader">Welcome Back to SmartStudy</div>
          <div className="LoginHeaderCaption">
            Sign in to continue your learning journey
          </div>
          <div className="LoginInputContainer">
            <div className="UserNameInput">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                maxLength={15}
                required
              />
            </div>
            <div className="UserPasswordInput">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="Enter password"
                maxLength={15}
                required
              />
            </div>
          </div>
          <div className="SigninBtn">
            <button
              type="submit"
              className="back-btn"
              style={{ width: "150px" }}>
              Sign In
            </button>
          </div>
          <div className="CreateNewText" style={{ cursor: "default" }}>
            Don't have an account?
            <Link
              to="/register"
              style={{
                color: "#145efc",
                cursor: "pointer",
                textDecoration: "none",
                marginLeft: "10px",
              }}>
              Create one here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
