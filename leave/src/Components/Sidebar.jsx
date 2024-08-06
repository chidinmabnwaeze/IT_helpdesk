import React from "react";
import Logo from "../assets/Logo/ipi Solutions New 1.png";
import Dash from "../assets/icons/dashboard-square-02.svg";
import Timesheet from "../assets/icons/vuesax/linear/calendar.svg";
import Tasks from "../assets/icons/task-daily-02.svg";
import Payroll from "../assets/icons/invoice-03.svg";
import Reports from "../assets/icons/waterfall-up-01.svg";
import leaveIcon from "../assets/icons/leave-user.png";
import { useLocation } from "react-router-dom";

const Sidebar = () => {

const location =useLocation()


  return (
    <nav className="sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <button id="clock" className="clock">
        Clock in
      </button>

      {/* These are the side menu bars */}
      <div className="menu">
        <ul className="menu-items">
          <li className={`menu-list ${location.pathname==='/clocking' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="../clocking">
              <div className="stroke"> </div>
              <img className="menu-icon" src={Dash} alt="" />
              <p>Dashboard</p>
            </a>
          </li>

         <li className={`menu-list ${location.pathname==='/timesheet' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="../timesheet">
              <img className="menu-icon" src={Timesheet} alt="" />
              <p>Timesheet</p>
            </a>
          </li>

         <li className={`menu-list ${location.pathname==='/leave' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="../leave">
              <img className="menu-icon" src={leaveIcon} alt="" />
              <p>Leave</p>
            </a>
          </li>

         {/* <li className={`menu-list ${location.pathname==='/tasks' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="#">
              <img className="menu-icon" src={Tasks} alt="" />
              <p>Tasks</p>
            </a>
          </li> */}

         <li className={`menu-list ${location.pathname==='/payroll' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="../payroll">
              <img className="menu-icon" src={Payroll} alt="" />
              <p>Payroll</p>
            </a>
          </li>

         <li className={`menu-list ${location.pathname==='/reports' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="#">
              <img className="menu-icon" src={Reports} alt="" />
              <p>Reports</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
