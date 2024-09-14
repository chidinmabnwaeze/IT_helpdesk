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

  const token = "214d11c2267943daa441175989a87ef8";

  const [message, setMessage] = useState(null);

  const getMessage = async () => {
    try {
      const url = "http://142.4.9.152:3000/v1/support-tickets/messages/b27c763933a8481bb196aba1b905d839";
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
    void getMessage();
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

      {message?.data.map((issue, index) => {
        <div className="comp-body m-8 p-4 bg-white" key={index}>
          <Popup
            trigger={buttonPopup}
            setTrigger={() => setButtonPopup(false)}
          />
          <div className="clientName m-4 flex justify-between items-center">
            <div>
              <p>{issue.id}</p>
              <p className="text-gray-400">maryjohn@gmail.com</p>
            </div>
            <div>{/* <p>{issue.message}</p> */}</div>
          </div>
          <hr />
          <div className="textarea m-4">
            <div>
              <p className="font-semibold">Issue</p>
            </div>
            <div className="complain border p-6 h-80" id="complain">
              {issue.message}
              {/* My printer stooped working , I can’t print out documents, lorem
            ipsum dolor sit amet consectetur. Sagittis sed dui nisl viverra
            ultricies blandit magna sapien interdum. Convallis tincidunt sed
            integer sagittis faucibus. Cursus ut ut urna felis. Nam pellentesque
            dolor id massa vitae in nibh enim elementum. Amet sit mauris turpis
            rhoncus scelerisque odio risus. Lorem ipsum dolor sit amet
            consectetur. Sagittis sed dui nisl viverra ultricies blandit magna
            sapien interdum. Convallis tincidunt sed integer sagittis faucibus.
            Cursus ut ut urna felis. Nam pellentesque dolor id massa vitae in
            nibh enim elementum. Amet sit mauris turpis rhoncus scelerisque odio
            risus. */}
            </div>
          </div>

          <div className="flex justify-end m-4">
            <button
              className="accept py-1.5 px-5 mr-6 rounded-md"
              onClick={() => setButtonPopup(true)}
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
        </div>;
      })}
    </div>
  );
};

export default Complaint;
