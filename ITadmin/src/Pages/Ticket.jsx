import React, { useState, useEffect } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
// import Table from "../Components/Table";
import UserTable from "../Components/userTable";
import NextPage from "../Components/nextPage";
import { useAuth } from "../auth/AuthContext";

export default function Ticket({users, setUsers, isLoading, search }) {
  const [activeTab, setActiveTab] = useState("All Issues");
  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };
  const date = new Date();

  const { auth } = useAuth();
  const token = auth?.sessionID;

  const [ticketStatus, setTicketStatus] = useState([]);

  const getTicketStatus = async () => {
    const url =
      "http://142.4.9.152:3000/v1/support-tickets?page=1&limit=10&status=new";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      const statusData = await response.json();
      console.log("API Response:", statusData);

      if (statusData?.data?.data && Array.isArray(statusData.data.data)) {
        setTicketStatus(statusData.data.data);
      } else {
        console.error("Unexpected data format, expected array", statusData);
      }
      console.log(statusData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (token){
    getTicketStatus();
    }
  }, [token]);

  const filteredTickets = ticketStatus.filter((ticket) => {
    if (activeTab === "All Issues") {
      return true;
    }
    if (activeTab === "New Issues") {
      return ticket.status === "new";
    }
    if (activeTab === "Pending Issues") {
      return ticket.status === "pending";
    }
    if (activeTab === "Closed Issues") {
      return ticket.status === "closed";
    }
    return false;
  });

  // const searchedUsers = filteredUsers?.filter((ticket) => {
  //   `${ticket.issue}`.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <div className="ticket">
      <Topbar search={search} />
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
            <div className="date">{date.getFullYear()}</div>
          </section>
          <hr />
        </div>
        <div className="content">
        
          {filteredTickets.length === 0 ? (
            <div>
              {activeTab === "Pending Issues" && <h1>No Pending Tickets</h1>}
              {activeTab === "New Issues" && <h1>No new tickets.</h1>}
              {activeTab === "Closed Issues" && <h1>No closed tickets.</h1>}
              {activeTab === "All Issues" && <h1>No tickets available.</h1>}
            </div>
          ) : (
            <UserTable
              // searchedUsers={searchedUsers}
              tickets= {filteredTickets}
              users={users}
              setUsers={setUsers}
              isLoading={isLoading}
              search={search}
            />
          )}
        
        </div>
      </section>
      <NextPage />
    </div>
  );
}
