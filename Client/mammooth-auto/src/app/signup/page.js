"use client";
import { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [validation, setValidation] = useState(false);
  const [validationMessages, setValidationMessages] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.Username === "" ||
      formData.Password === "" ||
      formData.Email === "" ||
      formData.ConfirmPassword === ""
    ) {
      setValidation(true);
      setValidationMessages("You have not entered a username, passwords or email.");
    } else {
      const response = await fetch("https://localhost:5022/api/Auth/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      console.log(responseData)
      if (responseData.success) {
        window.location.href = "/login";
      } else {
        setValidation(true);
        setValidationMessages(responseData.errors);
      }
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-box">
          <h1>Register</h1>
          <span className="signup-span">
            Already have an account?{" "}
            <a href="/login" className="signup-btn">
              Log in
            </a>
          </span>
          <button className="social-btn">Register with Google</button>
          <div className="or-seperator">
            <hr className="or-line" />
            <p>OR</p>
            <hr className="or-line" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Username">Your username</label>
            <input
              type="text"
              id="Username"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
              className="input-field"
            />
            <label htmlFor="Email">Your email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="input-field"
            />
            <label htmlFor="Password">Your password</label>
            <input
              type="password"
              id="Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="input-field"
            />
            <label htmlFor="ConfirmPassword">Confirm your password</label>
            <input
              type="password"
              id="ConfirmPassword"
              name="ConfirmPassword"
              value={formData.ConfirmPassword}
              onChange={handleChange}
              className="input-field"
            />
            {validation && (
              <p className="validation-message">{validationMessages}</p>
            )}
            <button type="submit" className="login-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
