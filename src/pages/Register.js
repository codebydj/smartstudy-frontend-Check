import React from "react";
import BackButton from "../components/BackButton";
import RegisterImg from "../assets/add-user-icon.png";
import "../styles/Register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="RegisterPage">
      <BackButton />
      <div className="RegisterCard">
        <div className="RegisterImgContainer">
          <img src={RegisterImg} alt="Register Icon" className="RegisterImg" />
        </div>
        <div>
          <h1 className="registerHeading">Join SmartStudy</h1>
          <span className="registerHeadingCaption">
            Create your account to access study materials
          </span>
        </div>

        <form action={"/"} className="RegisterFormCard">
          <div>
            <label htmlFor="name"> Full Name</label>
            <input
              type="text"
              id="name"
              className="RegisterInput"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="rollNo">Roll number</label>
            <input
              type="text"
              id="rollNo"
              className="RegisterInput"
              placeholder="Enter your Roll number"
              required
            />
          </div>

          <div>
            <label htmlFor="branch">Branch</label>
            <select
              className="RegisterInput RegisterBranchInput"
              id="branch"
              required>
              <option value="" disabled>
                -- Select Your Branch --
              </option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
            </select>
          </div>

          <div>
            <label htmlFor="semester">Semester</label>
            <select
              className="RegisterInput RegisterSemesterInput"
              id="semester"
              required>
              <option value="" disabled>
                -- Select Semester --
              </option>
              <option value="1-1">1 Year - 1 sem</option>
              <option value="1-2">1 Year - 2 sem</option>
              <option value="2-1">2 Year - 1 sem</option>
              <option value="2-2">2 Year - 2 sem</option>
              <option value="3-1">3 Year - 1 sem</option>
              <option value="3-2">3 Year - 2 sem</option>
              <option value="4-1">4 Year - 1 sem</option>
            </select>
          </div>

          <div className="PhoneWrapper">
            <label htmlFor="phonNo">Phone number</label>
            <input
              type="text"
              id="phonNo"
              className="RegisterInput PhoneInput"
              maxLength="10"
              pattern="\d{10}"
              inputMode="numeric"
              placeholder="Enter your phone number"
              required
            />
            <span className="number91"></span>
          </div>

          <div className="RegisterPassword">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="RegisterInput"
              maxLength={"15"}
              required
              placeholder="Create a secure password"
            />
          </div>

          <div className="buttonParent">
            <button type="submit" className="RegisterButton">
              Register
            </button>
          </div>

          <p className="AlreadyAccount">
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
