import React, { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `First Name: ${formData.firstname}, Last Name:${formData.lastname}, email:${formData.email}, priority:${formData.priority}, issue:${formData.issue}`
    );
  };

  const [select, setSelect] = useState(null);
  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  //     const [formData, setFormData] = useState({name: "",email: "",phone: "", message: ""});

  //     const handleChange = (event) => {
  //       const { name, value } = event.target;
  //       setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  //     };

  //     const handleSubmit = (event) => {
  //       event.preventDefault();
  //       alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
  //       );
  //   };

  //     return (
  //       <form onSubmit={handleSubmit}>
  //         <label htmlFor="name">Name:</label>
  //         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

  //         <label htmlFor="email">Email:</label>
  //         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

  //         <label htmlFor="email">phone:</label>
  //         <input type="email" id="email" name="email" value={formData.phone} onChange={handleChange}/>

  //         <label htmlFor="message">Message:</label>
  //         <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

  //         <button type="submit">Submit</button>
  //       </form>
  //     );
  //   }

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
                <label htmlFor="email">Attachment</label>
              </div>
              <input
                name="email"
                type="text"
                placeholder="Input your email address"
                className="p-4 w-3/5 border"
                required
                value={formData.email}
                onChange={handleChangeMultiple}
              />
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
