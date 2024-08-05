import React from "react";
import bell from "../assets/icons/notification-02.png"
import darkmode from "../assets/icons/material-symbols-light_dark-mode-outline.png"
import avatar from "../assets/icons/Ellipse 15.png"

export default function Topbar(){
  return (
    <div>
      <div className="title">
        <h1>IT SUPPORT</h1>
      </div>

      <div className="notifications">
        <input type="text" placeholder="Search" />

        <div className="mode">
          <img className="night" src={darkmode} alt="" />
        </div>
        <div className="notify">
          <img className="bell" src={bell} alt="" />
        </div>
        <div className="user">
            <p>Micheal Offiong</p>
            <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
