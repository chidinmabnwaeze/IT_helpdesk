import React, { useEffect, useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import { useAuth } from "../auth/AuthContext";

const CompliantForm = () => {
  // const [Inputvalue, setInputValue] = useState("");
  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    staffId: "",
    priority: "",
    issue: "",
    attachment: "",
  });

  const handleChangeMultiple = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // const [select, setSelect] = useState("");
  const handleSelect = (event) => {
    const value = event.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, priority: value }));
  };

  const [attachment, setAttachment] = useState(null);
  const handleAttachment = (e) => {
    setAttachment(e.target.files[0]);
  };

  // const token = "7a7bcd359fd747f6b1831c11cf476b58";
  const { auth } = useAuth();
  const token = auth?.sessionID;

  const myHeaders = new Headers({
    Authorization: `${token}`, // Assuming Bearer token; adjust if needed
    "Content-Type": "application/json",
  });

  const createTicket = async () => {
    const url = "http://142.4.9.152:3000/v1/support-tickets";

    //I created formData object to handle the data i want to send directly so i can send them directly instead of just json body
    const formDataToSend = new FormData();
    // formDataToSend.append("priority", formData.priority);
    // formDataToSend.append("issue", formData.issue);

    if (attachment) {
      formDataToSend.append("attachment", attachment);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          firstName: formData.firstname,
          lastName: formData.lastname,
          priority: formData.priority,
          issue: formData.issue,
        }),
        // body: formDataToSend,
        headers: myHeaders,
        credentials: "include",
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
       
        const errorData = await response.json(); // Parse the response body
        console.error("Server Response Error:", errorData);
        throw new Error(
          `Error ${response.status}: ${errorData.message || "Bad Request"}`
        );
      }

      const json = await response.json();
      console.log("Success Response:", json);
      alert(`Ticket created successfully with ID: ${json.data.id}`);
    } catch (error) {
      console.error("Error occurred during ticket creation:", error.message);
      alert(`Ticket creation failed: ${error.message}`);
    }
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData) return;
    console.log(formData);
    createTicket();
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      staffId: "",
      priority: "",
      issue: "",
    });
    setAttachment(null);
  };

  return (
    <div>
      <Topbar />
      <Sidebar />

      <div className="form-body m-5 p-2 bg-white">
        <form action="submit" className=" mx-auto p-5" onSubmit={handleSubmit}>
          <div>
            <div>
              <h1 className="mb-8 text-gray-800 font-semibold">
                Create a Support Ticket
              </h1>
            </div>
            <div className="issue w-3/5">
              <div className="m-2 compliant-area">
                <label htmlFor="issue">New Issue</label>
              </div>
              <textarea
                name="issue"
                placeholder="State your issue here"
                className="border w-full p-6 h-60"
                value={formData.issue}
                onChange={handleChangeMultiple}
              ></textarea>
            </div>

            <div className="prority">
              <div className="m-2 priority">
                <label htmlFor="issue">Priority</label>
              </div>

              <select
                value={formData.priority}
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
