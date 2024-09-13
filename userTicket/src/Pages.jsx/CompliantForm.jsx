import React, { useEffect, useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";

const CompliantForm = () => {
  // const [Inputvalue, setInputValue] = useState("");
  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    staffId: "",
    priority: "",
    issue: "",
  });

  const handleChangeMultiple = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [select, setSelect] = useState("");
  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  const [attachment, setAttachment] = useState("");
  const handleAttachment = (e) => {
    setAttachment(e.target.file);
  };

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const createTicket = async () => {
    const url = "http://142.4.9.152:3000/v1/support-tickets";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          priority: formData.priority,
          issue: formData.issue,
        }),
        headers: myHeaders,
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      } else {
        alert("Form submitted succesfully !");
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTicket();
  };

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
                  name="firstname"
                  type="text"
                  placeholder="Input your first name"
                  className="p-4 w-full mr-4 border"
                  required
                  value={formData.firstname}
                  onChange={handleChangeMultiple}
                />
              </div>
              <div className="w-full">
                <div className="m-2">
                  <label htmlFor="lastname">Last Name</label>
                </div>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Input your last name"
                  className="p-4 w-full ml-4 border"
                  required
                  value={formData.lastname}
                  onChange={handleChangeMultiple}
                />
              </div>
            </div>
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
                required
                value={formData.email}
                onChange={handleChangeMultiple}
              />
            </div>
            <div className="staffId w-full">
              <div className="m-2">
                <label htmlFor="staffId">Staff ID</label>
              </div>
              <input
                name="staffId"
                type="text"
                placeholder="Input your staff id"
                className="p-4 w-3/5 border"
                required
                value={formData.staffId}
                onChange={handleChangeMultiple}
              />
            </div>
            <div className="prority">
              <div className="m-2 priority">
                <label htmlFor="issue">Priority</label>
              </div>

              <select
                value={select}
                id="high"
                onChange={handleSelect}
                className="border-2 p-2"
              >
                <option value="">Select</option>
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
                name="issue"
                placeholder="State your issue here"
                className="border w-full p-6 h-60"
                value={formData.issue}
                onChange={handleChangeMultiple}
              ></textarea>
            </div>
            <div className="attachment w-full">
              <div className="m-2">
                <label htmlFor="attachment">Attachment</label>
              </div>
              <input
                name="attachment"
                type="file"
                placeholder="Add an attachment"
                className="p-4 w-3/5"
                file={attachment}
                onChange={handleAttachment}
              />
            </div>
            <input
              type="submit"
              className="submit border p-2 w-32 mt-4 text-white rounded hover:bg-white border-green-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompliantForm;
