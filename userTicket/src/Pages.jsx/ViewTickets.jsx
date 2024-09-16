import React from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import back from "../../../ITadmin/src/assets/icons/back-arrow.svg";
import { Link } from "react-router-dom";

const View = () => {
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
            <p>Mary John</p>
            <p className="text-gray-400">maryjohn@gmail.com</p>
          </div>
          <div>
            <p>priority</p>
          </div>
          <div>
            <div>
              <p>Ticket Status</p>
            </div>
            <p className="text-green-800">Pending</p>
          </div>
        </div>
        <hr />
        <div className="textarea m-4">
          <div>
            <p className="font-semibold">Issue</p>
          </div>
          <div className="complain p-6 h-80" id="complain">
            My printer stooped working , I can’t print out documents, lorem
            ipsum dolor sit amet consectetur. Sagittis sed dui nisl viverra
            ultricies blandit magna sapien interdum. Convallis tincidunt sed
            integer sagittis faucibus. Cursus ut ut urna felis. Nam pellentesque
            dolor id massa vitae in nibh enim elementum. Amet sit mauris turpis
            rhoncus scelerisque odio risus. Lorem ipsum dolor sit amet
            consectetur. Sagittis sed dui nisl viverra ultricies blandit magna
            sapien interdum. Convallis tincidunt sed integer sagittis faucibus.
            Cursus ut ut urna felis. Nam pellentesque dolor id massa vitae in
            nibh enim elementum. Amet sit mauris turpis rhoncus scelerisque odio
            risus.
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
