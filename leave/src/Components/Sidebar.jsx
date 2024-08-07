import React from "react";
import Logo from "../assets/images/ministry of petroleum resources 1.png";
import Dash from "../assets/icons/dashboard-square-02.svg";
import Tickets from "../assets/icons/ion_ticket-outline.svg";
import Feedbacks from "../assets/icons/fluent_person-feedback-20-regular.svg";
import Followup from "../assets/icons/icon-park-outline_follow-up-date-sort.svg";
// import Reports from "../assets/icons/waterfall-up-01.svg";
// import leaveIcon from "../assets/icons/leave-user.png";
import { useLocation } from "react-router-dom";

const Sidebar = () => {

const location =useLocation()


  return (
    <nav className="sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      {/* <button id="clock" className="clock">
        Clock in
      </button> */}

      {/* These are the side menu bars */}
      <div className="menu">
        <h2 className="text-center mt-6">MAIN MENU</h2>
        <ul className="menu-items">
          <li className={`menu-list ${location.pathname==='/dashboard' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="../dashboard">
              <div className="stroke"> </div>
              <img className="menu-icon" src={Dash} alt="" />
              <p>Dashboard</p>
            </a>
          </li>

         <li className={`menu-list ${location.pathname==='/tickets' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="../tickets">
              <img className="menu-icon" src={Tickets} alt="" />
              <p>My Tickets</p>
            </a>
          </li>

         <li className={`menu-list ${location.pathname==='/feedbacks' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="../feedbacks">
              <img className="menu-icon" src={Feedbacks} alt="" />
              <p>Feedbacks</p>
            </a>
          </li>

         <li className={`menu-list ${location.pathname==='/followup' ? 'active' : ''}`} >
            <a id="menu-icon" className="menu-list" href="#">
              <img className="menu-icon" src={Followup} alt="" />
              <p>Follow up</p>
            </a>
          </li>

         {/* <li className={`menu-list ${location.pathname==='/payroll' ? 'active' : ''}`} >
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
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
