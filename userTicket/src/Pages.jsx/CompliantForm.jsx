import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";

const CompliantForm = () => {
  const [Inputvalue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

//   const [select, setSelect] = useState(null);
//   const handleSelect = () => {
//     setSelect();
//   };

  return (
    <div>
      <Topbar />
      <Sidebar />

      <div className="form-body m-5 p-4 bg-white">
        <form
          action="submit"
          className="m-5 mx-auto p-5"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="name-container flex w-full">
              <div className="w-full">
                <div className="m-2">
                  <label htmlFor="firstname">First Name</label>
                </div>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Input your first name"
                  className="p-4 w-full mr-4 border"
                  required
                  value={Inputvalue}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <div className="m-2">
                  <label htmlFor="lastname">Last Name</label>
                </div>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Input your last name"
                  className="p-4 w-full ml-4 border"
                />
              </div>
            </div>
            <div className="email w-full">
              <div className="m-2">
                <label htmlFor="email">Email Address</label>
              </div>
              <input
                id="email"
                type="text"
                placeholder="Input your email address"
                className="p-4 w-3/5 border"
              />
            </div>
            <div className="prority">
              <div className="m-2 priority">
                <label htmlFor="issue">Priority</label>
              </div>
              <input type="text" select name="" />
              <select name="Priority Level" id="high">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="issue w-3/5">
              <div className="m-2 compliant-area">
                <label htmlFor="issue">Complaint</label>
              </div>
              <textarea
                name="compliantSection"
                id="issue"
                placeholder="State your issue here"
                className="border w-full p-6 h-60"
              ></textarea>
            </div>
            <input
              type="submit"
              className="submit border p-2 w-32 text-white rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompliantForm;
