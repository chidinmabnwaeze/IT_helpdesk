import React, { useEffect, useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import back from "../assets/icons/back-arrow.svg";
import { Link } from "react-router-dom";
import Popup from "../Components/Popup";

const Complaint = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonText, setbuttonText] = useState("Close case");
  const handleClick = () => {
    setbuttonText(buttonText === "Close case" ? "Case Closed !" : "Close case");
  };
  const [message, setMessage] = useState({});

  const token = "c2397498a302496f8e6f8a3721c7ef63";
  const ticketId = location.pathname.split("/").pop()

  const getMessage = async () => {
    try {
      const url =
        `http://142.4.9.152:3000/v1/support-tickets/${ticketId}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });


      const userTicket = await response.json();
      setMessage(userTicket.data);
      console.log(userTicket);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
     getMessage();
  }, []);

  return (
    <div>
      <Topbar />
      <Sidebar />
      <Link to="/tickets">
        <div className="back flex m-3">
          <img src={back} alt="" id="back" />
          <label htmlFor="back">Back</label>
        </div>
      </Link>
      <div className="comp-body m-8 p-4 bg-white">
        <Popup trigger={buttonPopup} setTrigger={() => setButtonPopup(false)} />

      
          <div >
            <div className="clientName m-4 flex justify-between items-center">
              <div>
                <p>{message.firstName}</p>
                <p className="text-gray-400">{message.id}</p>
              </div>
              <div><p>{message.priority}</p></div>
            </div>
            <hr />
            <div className="textarea m-4">
              <div>
                <p className="font-semibold">Issue</p>
              </div>
              <div className="complain border p-6 h-80" id="complain">
                {message.issue}
             
              </div>
            </div>

            <div className="flex justify-end m-4">
              <button
                className="accept py-1.5 px-5 mr-6 rounded-md"
                // onClick={() => setButtonPopup(true)}
              >
                Pending
              </button>
              <button
                className={`assign py-1.5 px-5 ml-6 rounded-md ${buttonText === "Case Closed !" ? "closedButton" : null}`}
                onClick={handleClick}
              >
                {buttonText}
              </button>
            </div>
          </div>
      
      </div>
      ;
    </div>
  );
};

export default Complaint;
