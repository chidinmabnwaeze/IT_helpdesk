import React, { useEffect, useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import back from "../assets/icons/back-arrow.svg";
import { Link ,useLocation} from "react-router-dom";
import Popup from "../Components/Popup";
import { useAuth } from "../auth/AuthContext";

const Complaint = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonText, setbuttonText] = useState("Close case");
  const [message, setMessage] = useState({});
  const [pending, setPending] = useState("")

  // const token = "c93ac70d76804599b78dfcc3f0d46ba8";

  const {auth} = useAuth();
  const token = auth?.sessionID;

  const location = useLocation();
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
        credentials: "include"
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

  const handleClick = async () => {
    try {
      const url = `http://142.4.9.152:3000/v1/support-tickets/${ticketId}`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "closed" || "resolved", // Set ticket to pending
        }),
      });

      const updatedTicket = await response.json();
      if (updatedTicket && updatedTicket.data && updatedTicket.data.status) {
        setPending(updatedTicket.data.status);
        alert("Ticket updated succesfully. New status: Closed")
        console.log("Ticket updated:", updatedTicket.data);
      } else {
        console.error("Invalid response format", updatedTicket);
      }
    } catch (error) {
      console.error("Failed to update ticket status", error.message);
    }
    setbuttonText(buttonText === "Close case" ? "Case Closed !" : "Close case");

  };

   const handlePendingClick = async () => {
    try {
      const url = `http://142.4.9.152:3000/v1/support-tickets/${ticketId}`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "pending", // Set ticket to pending
        }),
      });

      const updatedTicket = await response.json();
      if (updatedTicket && updatedTicket.data && updatedTicket.data.status) {
        setPending(updatedTicket.data.status);
        alert("Ticket updated succesfully. New status: Pending")
        console.log("Ticket updated:", updatedTicket.data);
      } else {
        console.error("Invalid response format", updatedTicket);
      }
    } catch (error) {
      console.error("Failed to update ticket status", error.message);
    }

    //   setPending(updatedTicket.data.status);  // Assuming status is returned
    //   console.log(updatedTicket);
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

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
                <p>{message.requester?.firstName} {message.requester?.lastName}</p>
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
                onClick={handlePendingClick}
              >
                Pending
              </button>
              <button
                className={`assign py-1.5 px-5 ml-6 rounded-md ${buttonText === "Case Closed !" ? "clickedButton" : null}`}
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
