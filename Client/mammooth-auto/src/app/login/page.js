"use client";

import { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [validation, setValidation] = useState(false);
  const [validationMessage, setValidationMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setValidation(true);
      setValidationMessage("Please enter both username and password.");
      return;
    }

    const response = await fetch("https://localhost:5022/api/Auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    if (responseData.success) {
      const expirationTime = new Date().getTime() + 30 * 60000; // 30 minutes from now
      localStorage.setItem("jwt", responseData.jwt);
      localStorage.setItem("jwtExpiration", expirationTime);
      window.location.href = "/";
      setValidation(false);
    } else {
      setValidation(true);
      setValidationMessage(responseData.message);
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-box">
          <h1>Log in</h1>
          <span className="signup-span">
            Don't have an account?{" "}
            <a href="/signup" className="signup-btn">
              Sign up
            </a>
          </span>
          <button className="social-btn">Log in with Google</button>
          <div className="or-seperator">
            <hr className="or-line" />
            <p>OR</p>
            <hr className="or-line" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Your username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
            />
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
            {validation && (
              <p className="validation-message">{validationMessage}</p>
            )}
            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;