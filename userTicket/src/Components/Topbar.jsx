import React, {useState, useEffect} from "react";
import bell from "../../../ITadmin/src/assets/icons/notification-02.png"
import darkmode from "../../../ITadmin/src/assets/icons/material-symbols-light_dark-mode-outline.png"
import avatar from "../../../ITadmin/src/assets/icons/Ellipse 15.png"


export default function Topbar({handleChange, isChecked}){
const [isDark , setIsDark] = useState(false)




  return (
    <div className="topbar flex z-10 p-5 justify-between items-center bg-white" data-theme={isDark ? "dark" : "light"}>
      <div className="title mr-250">
        <h1 className="font-bold">SUPPORT</h1>
      </div>

      <div className="rightTopSection flex items-center">
        <div className="searchbar">
        <input type="text" placeholder="Search here..." className="rounded p-1"/>
        </div>
        <div 
        className="mode pl-5 rounded-lg" 
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
            {/* <p>{users.firstName} {users.lastName}</p> */}
            <img src={avatar} alt="" className="ml-3"/>
        </div>
        <div className="login-box pl-5">
          <button className="log-button text-white p-2 rounded">Login as Admin</button>
        </div>
      </div>
    </div>
  );
}
