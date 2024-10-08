import React, { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import ReactSelect from "../Components/ReactSelect";
import StatusForm from "../Components/StatusForm";
import NextPage from "../Components/nextPage";

const Tickets = ({ search ,tabb}) => {
  const [tickets, setTickets] = useState(null);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalpages] = useState(1);
  const [priorityCircle, setPriorityCircle] = useState("");
  const date = new Date();

  const { auth } = useAuth();
  const token = auth?.sessionID;
  const url = `http://142.4.9.152:3000/v1/support-tickets?page=${currentPage}&limit=10&status=${status}`;

  useEffect(() => {
    const getTickets = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        });

        const ticketData = await response.json();
        setTickets(ticketData.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error.message);
      }
    };
    getTickets();
  }, [status]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className="ticket">
      <Topbar 
      search={search}
      avatar ={tabb} />
      <Sidebar />
      <section className="ticket-body m-8 p-4 bg-white">
        <div className="top-sect">
          <div>
            <h2 className="font-semibold">My Tickets</h2>
          </div>
          <section className="flex justify-between items-center">
            <div className="tabs flex mt-3 ">
              <StatusForm status={status} setStatus={setStatus} />
            </div>
            <div className="date">{date.getFullYear()}</div>
          </section>
          <hr />
        </div>

        {/* the ticket table section */}
        <div className="">
          {isLoading && <div className="loader m-auto"></div>}
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
                  {tickets?.data.map((tabb) => (
                    <tr className="rows" key={tabb.id}>
                      <td className="staff-name" id="check">
                        <input type="checkbox" className="mr-3" id="check" />

                        <span className="tt">
                          <label htmlFor="check" className="text-black ">
                            {tabb.requester?.firstName}{" "}
                            {tabb.requester?.lastName}
                          </label>
                          {/* <p>{tabb.lastName}</p> */}
                        </span>
                      </td>

                      <td className="text-ellipsis overflow-hidden">
                        {tabb.issue}
                      </td>
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
            </div>
          )}
        </div>
      </section>
      <NextPage
        currentPage={currentPage}
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </main>
  );
};

export default Tickets;
