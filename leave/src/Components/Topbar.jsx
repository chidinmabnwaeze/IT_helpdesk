import React from "react";
import bell from "../assets/icons/notification-02.png"
import darkmode from "../assets/icons/material-symbols-light_dark-mode-outline.png"
import avatar from "../assets/icons/Ellipse 15.png"

export default function Topbar(){
  return (
    <div className="flex p-5 justify-between items-center bg-red-600">
      <div className="title">
        <h1>IT SUPPORT</h1>
      </div>

      <div className="flex items-center bg-blue-500">
        <div className="searchbar">
        <input type="text" placeholder="Search" />
        </div>
        <div className="mode">
          <img className="night" src={darkmode} alt="" />
        </div>
        <div className="notify">
          <img className="bell" src={bell} alt="" />
        </div>
        <div className="flex ">
            <p>Micheal Offiong</p>
            <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
