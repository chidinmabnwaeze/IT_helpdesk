import React, { useEffect, useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import back from "../../../ITadmin/src/assets/icons/back-arrow.svg";
import { Link, json, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const View = () => {
  const [viewUserTicket, setViewUserTicket] = useState(null);
  const location = useLocation();
  const viewTicketId = location.pathname.split("/").pop();
  const { auth } = useAuth();
  const token = auth?.sessionID;

  const viewTicket = async () => {
    const url = `http://142.4.9.152:3000/v1/support-tickets/${viewTicketId}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      const updatedTicket = await response.json();
      setViewUserTicket(updatedTicket.data);
      console.log(updatedTicket);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    viewTicket();
  }, []);

  return (
    <div>
      <Topbar />
      <Sidebar />

      <Link to="/mytickets">
        <div className="back flex m-3">
          <img src={back} alt="" id="back" />
          <label htmlFor="back">Back</label>
        </div>
      </Link>

      <div className="comp-body m-8 p-4 bg-white">
        <div className="clientName m-4 flex justify-between items-center">
          <div>
            <p>{viewUserTicket?.requester?.firstName} {viewUserTicket?.requester?.lastName}</p>
            {/* <p className="text-gray-400">maryjohn@gmail.com</p> */}
          </div>
          <div>
            <div>
              <p>Priority</p>
            </div>
            <p>{viewUserTicket?.priority}</p>
          </div>
          <div>
            <div>
              <p>Ticket Status</p>
            </div>
            <p className="text-green-800">{viewUserTicket?.status}</p>
          </div>
        </div>
        <hr />
        <div className="textarea m-4">
          <div>
            <p className="font-semibold">Issue</p>
          </div>
          <div className="complain p-6 h-80" id="complain">
            {viewUserTicket?.issue}
         
          </div>
        </div>

        {/* <div className="flex justify-end m-4">
          <button className="accept py-1.5 px-5 mr-6 rounded-md" onClick={()=>setButtonPopup(true)}>Pending</button>
          <button className={`assign py-1.5 px-5 ml-6 rounded-md ${buttonText ==='Case Closed !' ? "closedButton" : null}`} onClick={handleClick}>
           {buttonText}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default View;
