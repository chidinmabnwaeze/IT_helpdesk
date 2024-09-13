import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
// import Table from "../Components/Table";
import UserTable from "../Components/userTable";
import NextPage from "../Components/nextPage";

export default function Ticket() {
  const [activeTab, setActiveTab] = useState("All Issues");
  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="ticket">
      <Topbar />
      <Sidebar />
      <section className="ticket-body m-8 p-4 bg-white">
        <div className="top-sect">
          <div>
            <h2 className="font-semibold">My Tickets</h2>
          </div>
          <section className="flex justify-between items-center">
            <div className="tabs flex mt-3 ">
              <ul className="tab flex">
                <li
                  className={`${activeTab === "All Issues" ? "activeTab" : "tab-list"}`}
                  onClick={() => handleChangeTab("All Issues")}
                >
                  All Issues
                </li>
                <li
                  className={`${activeTab === "New Issues" ? "activeTab" : "tab-list"}`}
                  onClick={() => handleChangeTab("New Issues")}
                >
                  New Issues
                </li>
                <li
                  className={`${activeTab === "Pending Issues" ? "activeTab" : "tab-list"}`}
                  onClick={() => handleChangeTab("Pending Issues")}
                >
                  Pending Issues
                </li>
                <li
                  className={`${activeTab === "Closed Issues" ? "activeTab" : "tab-list"}`}
                  onClick={() => handleChangeTab("Closed Issues")}
                >
                  Closed Issues
                </li>
              </ul>
            </div>
            <div className="date">1-26th August 2024</div>
          </section>
          <div className="ticket-count font-medium">365 Tickets</div>
          <hr />
        </div>
        <div className="content">
          {activeTab === "All Issues" && (
            <div>
              <UserTable />
            </div>
          )}
        </div>

        {/* <UserTable /> */}
      </section>
      <NextPage />
    </div>
  );
}
