import React, { useState } from "react";
import TicketRecord from "./TicketRecord";
import View from "../Pages.jsx/ViewTickets";

const TicketTab = () => {
  const [activeTab, setActiveTab] = useState("all");
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="tabs">
      <div className="recordTabs flex m-6 bg-white">
        <span
          className={`${activeTab === "all" ? "activeTab" : "m-4"}`}
          onClick={() => changeTab("all")}
        >
          All
        </span>
        <span
          className={`${activeTab === "pending" ? "activeTab" : "m-4"}`}
          onClick={() => changeTab("pending")}
        >
          Pending
        </span>
        <span
          className={`${activeTab === "closed" ? "activeTab" : "m-4"}`}
          onClick={() => changeTab("closed")}
        >
          Closed
        </span>
      </div>

      <div className="content">
        {activeTab === "all" && (
          <div>
            <TicketRecord />
          </div>
        )}
        {activeTab === "pending" && <div>pending</div>}
        {activeTab === "closed" && <p>closed</p>}
      </div>
    </div>
  );
};

export default TicketTab;
