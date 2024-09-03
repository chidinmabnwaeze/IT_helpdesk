import React from "react";
import Topbar from "../../../leave/src/Components/Topbar";

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

      <form action="submit" className="m-5">
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
                className="p-4 w-3/5 border"
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
                className="p-4 w-3/5 border"
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
            <select name="High" id="high">
              High
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompliantForm;
