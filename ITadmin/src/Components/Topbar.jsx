import React, { useState } from "react";
import bell from "../assets/icons/notification-02.png";
import darkmode from "../assets/icons/material-symbols-light_dark-mode-outline.png";
import avatar from "../assets/icons/Ellipse 15.png";
import Popup from "./Popup";
import Search from "./Search";

export default function Topbar({ handleChange, isChecked ,searchedUsers, tabb}) {
  const [isDark, setIsDark] = useState(false);
  const [notification, setNotification] = useState(false);
 const [search, setSearch] = useState("")

  return (
    <div
      className="flex z-10 p-5 justify-between items-center bg-white"
      data-theme={isDark ? "dark" : "light"}
    >
      <div className="title mr-250">
        <h1 className="font-bold">IT SUPPORT</h1>
      </div>

      <Popup trigger={notification} setTrigger={() => setNotification(false)} />
      <div className="rightTopSection flex items-center">
        <div className="searchbar">
         <Search
         search ={search}
         setSearch ={setSearch}
         searchedUsers ={searchedUsers}
         />
        </div>
        <div
          className="mode pl-5 rounded-lg cursor-pointer"
          id="check"
          onChange={handleChange}
          checked={isChecked}
        >
          <img
            className="night bg-gray-100 rounded-full p-0.5 cursor-pointer"
            src={darkmode}
            alt=""
          />
        </div>
        <div className="notify pl-5" onClick={() => setNotification(true)}>
          <img
            className="bell  bg-gray-100 rounded-full p-1 cursor-pointer"
            src={bell}
            alt=""
          />
        </div>
        <div className="flex items-center pl-5">
          <p>Micheal Offiong</p>
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
