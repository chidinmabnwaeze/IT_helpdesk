import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { useAuth } from "../auth/AuthContext";
import crater from "../assets/images/crater-logo.svg";

const Login = () => {
  const { login } = useAuth(); // My login function from the AuthContext

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValidateError = {};
    if (!formData.email.trim()) {
      formValidateError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formValidateError.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      formValidateError.password = "Password is required";
    } else if (formData.password.length < 8) {
      formValidateError.password = "Password must be at least 8 characters";
    }

    // if (formData.confirmPassword !== formData.password) {
    //   formValidateError.confirmPassword = "Passwords do not match";
    // }

    if (Object.keys(formValidateError).length > 0) {
      setErrors(formValidateError);
      return;
    }

    setErrors({});
    try {
      // Make the API call to log in the user
      const response = await fetch("http://142.4.9.152:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Login failed with status: ${response.status}`);
      }

      const data = await response.json();
      const sessionID = data.data.sessionID; // Assuming the sessionID is returned in the response

      // Store the sessionID globally in AuthContext
      const userData = {
        email: formData.email,
        sessionID,
      };
      login(userData); // Update global session state

      // Redirect to the dashboard on another port
      navigate("/dashboard");
      // window.location.href = "http://localhost:5178/dashboard";
    } catch (error) {
      setErrors({ form: "Login failed. Please try again." });
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src={crater} alt="" />
      </div>
      <h1 className="text-center font-semibold m-6 text-2xl text-white">
        {" "}
        Admin Login{" "}
      </h1>
      <main className=" form-body">
        <form onSubmit={handleSubmit} className="loginForm w-full">
          <div className="email w-full">
            <div className="m-2">
              <label htmlFor="email">Email Address</label>
            </div>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Input your email address"
              className="p-4 w-full border"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email}</span>
            )}
          </div>
          <div className="password w-full">
            <div className="m-2">
              <label htmlFor="password">Password</label>
            </div>
            <input
              name="password"
              type="password"
              placeholder="Input your password"
              className="p-4 w-full border"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password}</span>
            )}
          </div>
          {/* <div className="password w-full">
            <div className="m-2">
              <label htmlFor="password">Confirm Password</label>
            </div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="p-4 w-full border"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div> */}
          {errors.form && (
            <div className="error-message text-red-600">{errors.form}</div>
          )}
          <button
            type="Submit"
            className="submit border p-3 w-full mt-8 bg-green-700 text-white rounded"
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
