import React from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
// import Table from "../Components/Table";
import UserTable from "../Components/userTable";
import NextPage from "../Components/nextPage";


export default function Ticket() {
  
  return (
    <div className="ticket">
      <Topbar />
      <Sidebar />
      <section className="ticket-body m-8 p-4 bg-white">
        <div className="top-sect">
          <div>
            <h2>My Tickets</h2>
          </div>
          <section className="flex justify-between items-center">
            <div className="tabs flex mt-3 ">
              <ul className="tab flex">
                <li className="tab-list">All Issues</li>
                <li className="tab-list">New Issues</li>
                <li className="tab-list">Opened Issues</li>
                <li className="tab-list">Closed Issues</li>
              </ul>
            </div>
            <div className="date">1-26th August 2024</div>
          </section>
          <div className="ticket-count font-medium">365 Tickets</div>
          <hr />
        </div>
        {/* <Table/> */}
        <UserTable />
      </section>
      <NextPage />
    </div>
  );
}
