import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const login = async (email, password) => {
    const url = "http://142.4.9.152:3000/login";
    const headers = {
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({
      email: email,
      password: password,
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });

      // To check if the response is OK (status 200-299)
      if (!response.ok) {
        throw new Error(`Login failed with status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Assuming a token is returned, save it to localStorage or manage it according to the app's authentication flow
      console.log("Login successful:", data);
      const sessionID = response?.data?.sessionID;
      // const roles = response?.data?.roles
      setAuth({email, password ,sessionID})
      return data; // Return the data (token, user info, etc.)
    } catch (error) {
      console.error("Error logging in:", error.message);
      throw error; // Re-throw the error to handle it elsewhere if needed
    }
  };


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.confirmPassword !== formData.password) {
      formValidateError.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(formValidateError).length > 0) {
      setErrors(formValidateError);
      return;
    }

    setErrors({});
    try {
      const userData = await login(
        formData.email,
        formData.password,
        formData.confirmPassword
      );
      alert("Login Successful");

      window.location.href = "http://localhost:5178/dashboard"; 
      // navigate("../../../dashboard");
      // <Link to ={`/dashboard`}/>
      console.log("Login Succesful:", userData);
    } catch (error) {
      setErrors({ form: "Login failed. Please try again." });
      console.error("Login Error:", error);
    }
  };

 
  return (
    <div className="wrapper mt-10 ">
      <main className="flex justify-center w-3/5">
        <form onSubmit={handleSubmit} className="loginForm w-full ">
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
            {errors.email && <span>{errors.email}</span>}
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
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div className="password w-full">
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
          </div>
          {errors.form && <div className="error-message">{errors.form}</div>}
          <input
            type="submit"
            className="submit border p-2 w-32 mt-4 bg-green-700 text-white rounded hover:bg-white border-green-700"
          />
        </form>
      </main>
    </div>
  );
};

export default Login;
