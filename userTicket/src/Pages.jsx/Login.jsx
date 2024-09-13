import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValidateError = {};
    if (!formData.email.trim()) {
      formValidateError === "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formValidateError === "Email is invalid";
    }

    if (!formData.password.trim()) {
      formValidateError === "Password is required";
    } else if (formData.password.length < 8) {
      formValidateError === "Password must be at least 8 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      formValidateError === "Passwords do not match";
    }
    setErrors(formValidateError);

    if (Object.keys(formValidateError).length > 0) {
      alert("Login Successful");
    } else {
      setErrors({});
      try {
        const userData = await Login(email, password, confirmPassword);
        console.log("Login Succesful:", userData);
      } catch (error) {
        setErrors({ form: "Login failed. Please try again." });
      }
    }
  };

  return (
    <div className="wrapper">
      <form action="" onSubmit={handleSubmit}>
        <div className="email w-full">
          <div className="m-2">
            <label htmlFor="email">Email Address</label>
          </div>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Input your email address"
            className="p-4 w-3/5 border"
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
            type="text"
            placeholder="Input your password"
            className="p-4 w-3/5 border"
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
            type="text"
            placeholder="Confirm your password"
            className="p-4 w-3/5 border"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <input
          type="submit"
          className="submit border p-2 w-32 mt-4 bg-green-700 text-white rounded hover:bg-white border-green-700"
        />
      </form>
    </div>
  );
};

export default Login;
