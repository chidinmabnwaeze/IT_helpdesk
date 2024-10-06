import React, { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";

const Tickets = () => {
  const [tickets, setTickets] = useState(null);
  const [activeTab, setActiveTab] = useState("All Issues");
  const [status, setStatus] = useState(null)
  const date = new Date();

  const { auth } = useAuth();
  const token = auth?.sessionID;

  useEffect(() => {
    const getTickets = async (status) => {
      const url = "http://142.4.9.152:3000/v1/support-tickets?page=1&limit=10";
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
          // credentials: "include"
        });

        const TicketData = await response.json();
        setTickets(TicketData.data);
        setIsLoading(false);
        console.log(TicketData);
      } catch (error) {
        setIsLoading(false);
        console.error(error.message);
      }
    };
  }, [status]);

  return (
    <main className="ticket">
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
      </section>

      {/* the ticket table section */}
      <div>
        {isLoading && (
          <h1 className="font-bold text-center m-auto">Loading...</h1>
        )}
        {!isLoading && tickets && (
          <div className="content">
            <div className="ticket-count font-medium m-3">{`${tickets?.total || 0} ${tickets?.total === 1 ? "Ticket" : "Tickets"}`}</div>
            <table className="staffTable">
              <thead>
                <tr className="table-head">
                  <th>Complaint</th>
                  <th>Issues</th>
                  <th>Priority </th>
                  <th>Status </th>
                </tr>
              </thead>
              <tbody>
                {tickets?.data.map((tabb, index) => (
                  <tr className="rows" key={tabb.id}>
                    <td className="staff-name" id="check">
                      <input type="checkbox" className="mr-3" id="check" />

                      <span className="tt">
                        <label htmlFor="check" className="text-black ">
                          {tabb.requester?.firstName} {tabb.requester?.lastName}
                        </label>
                        {/* <p>{tabb.lastName}</p> */}
                      </span>
                    </td>

                    <td>{tabb.issue}</td>
                    <td className="staff-status">
                      <div className="clockedStatus">
                        <span
                          className={`${tabb.priority === "high" ? "stat" : tabb.priority === "medium" ? "stat2" : "stat3"}`}
                        >
                          {/* <div
                          className={`${tabb.priority === "high" ? "circle" : tabb.priority === "medium" ? "circle-not" : "circle-leave"}`}
                        >
                          .
                        </div> */}

                          {tabb.priority}
                        </span>
                      </div>
                    </td>
                    <td>{tabb.status}</td>
                    {/* <td>{tabb.attachment}</td> */}
                    <td>
                      <Link to={`/complaint/${tabb.id} `}>
                        <button className="accept py-1.5 px-7 rounded-md">
                          Accept
                        </button>
                      </Link>
                    </td>

                    <td className="react-select">
                      <ReactSelect ticket={tabb} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {assigned.firstName && (
              <div className="assigned-handler">
                <p>
                  Assigned to: {assigned.firstName} {assigned.lastName}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Tickets;
