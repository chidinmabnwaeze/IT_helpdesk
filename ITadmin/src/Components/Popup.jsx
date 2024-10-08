import React,{useState} from "react";
import close from "../assets/icons/Close.svg";
import { Link } from "react-router-dom";


const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup border ">
      <div className="popup-inner">
        <div className="top-section border-b flex justify-between">
          <h2>New Notification</h2>
         <button onClick={()=>props.setTrigger(false)} ><img src={close} alt="" /></button>
        </div>
        <div className="message m-8">
          <p>Ticket Updated successfully. </p>
          <p>New status: Pending. </p>
          {/* <div className="popupButtons flex justify-center mt-8">
            <Link to="/chatbot">
            <button className="accept py-1.5 px-5 mr-6 rounded-md">
              Accept
            </button>
            </Link>
            <button className="assign py-1.5 px-5 ml-6 rounded-md">
              Reject
            </button>
          </div> */}
        </div>
        {props.children}
      </div>
    </div>
  ) : "";
};

export default Popup;
