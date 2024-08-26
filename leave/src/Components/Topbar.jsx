import React, {useState} from "react";
import bell from "../assets/icons/notification-02.png"
import darkmode from "../assets/icons/material-symbols-light_dark-mode-outline.png"
import avatar from "../assets/icons/Ellipse 15.png"


export default function Topbar({handleChange, isChecked}){
const [isDark , setIsDark] = useState(false)

  return (
    <div className="flex z-10 p-5 justify-between items-center bg-white" data-theme={isDark ? "dark" : "light"}>
      <div className="title mr-250">
        <h1 className="font-bold">IT SUPPORT</h1>
      </div>

      <div className="flex items-center">
        <div className="searchbar">
        <input type="text" placeholder="Search here..." className="rounded p-1"/>
        </div>
        <div 
        className="mode pl-5  rounded-lg" 
        id="check"
        onChange={handleChange}
        checked ={isChecked}
        >
          <img className="night bg-gray-100 rounded-full p-0.5"  src={darkmode} alt="" />
        </div>
        <div className="notify pl-5">
          <img className="bell  bg-gray-100 rounded-full p-1" src={bell} alt="" />
        </div>
        <div className="flex items-center pl-5">
            <p>Micheal Offiong</p>
            <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
