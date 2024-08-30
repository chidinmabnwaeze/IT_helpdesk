import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "../Pages/Chatbot";

const Notification = () => {
  return (
    <div>
      <div>
        <p>New notification</p>
        <img src="" alt="" />
      </div>
      <div>
        <p>You have been assigned to a live session with a waiting client</p>
        <div>
        <Link to="/chatbot">
          <button className="accept py-1.5 px-5 rounded-md">Accept</button>
          </Link>
          <button className="assign py-1.5 px-5 rounded-md">Assign</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
