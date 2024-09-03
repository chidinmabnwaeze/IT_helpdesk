import React from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";

const CompliantForm = () => {
  const formfield = [
    {
      label: "First Name",
      placeholder: "Input your first name",
    },
    {
      label: "Last Name",
      placeholder: "Input your last name",
    },
  ];
  return (
    <div>
      <Topbar />
      <Sidebar />
      <form action="submit">
        {formfield.map((field, index) => {
          <div key={index}>
            <div>
              <label htmlFor="firstname">{field.label}</label>
            </div>
            <input type="text" placeholder="Input your first name" />
          </div>;
        })}
      </form>

      <div className="form-body m-5 bg-white">
        <form action="submit" className="m-5 mx-auto p-3">
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
              <select name="High" id="high">
                High
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
