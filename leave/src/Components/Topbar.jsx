import React from "react";
import bell from "../assets/icons/notification-02.png"
import darkmode from "../assets/icons/material-symbols-light_dark-mode-outline.png"
import avatar from "../assets/icons/Ellipse 15.png"

export default function Topbar(){
  return (
    <div className="flex z-10 p-5 justify-between items-center bg-white">
      <div className="title mr-250">
        <h1 className="font-bold">IT SUPPORT</h1>
      </div>

      <div className="flex items-center">
        <div className="searchbar">
        <input type="text" placeholder="Search" className="rounded p-1"/>
        </div>
        <div className="mode pl-5 bg-grey-200">
          <img className="night" src={darkmode} alt="" />
        </div>
        <div className="notify pl-5">
          <img className="bell" src={bell} alt="" />
        </div>
        <div className="flex items-center pl-5">
            <p>Micheal Offiong</p>
            <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
