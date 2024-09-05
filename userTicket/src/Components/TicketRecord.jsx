import React from "react";
import { Link } from "react-router-dom";
import View from "../Pages.jsx/ViewTickets";

const TicketRecord = () => {
  const records = [
    {
      title: "Hardware",
      message: "My laptop battery is bad",
      requestDate: "20/8/24",
      solvedDate: "30/8/24",
    },
    {
      title: "Hardware",
      message: "My laptop battery is bad",
      requestDate: "20/8/24",
      solvedDate: "30/8/24",
    },
  ];

  return (
    <div className="records ">
      <div className="recordTabs flex m-6 bg-white">
        <div className="m-4">
          <p>All</p>
        </div>
        <div className="m-4">
          <p>Pending</p>
        </div>
        <div className="m-4">
          <p>Closed</p>
        </div>
      </div>
      <div className="list">
        {records.map((record, index) => (
          <div
            className="ticket1 border flex justify-between items-center m-4 p-6  bg-white"
            key={index}
          >
            <div className="flex ">
              <div className="mr-3">
                <input type="checkbox" />
              </div>
              <div>
                <h2 className="text-green-700 font-semibold">{record.title}</h2>
                <p>{record.message}</p>
              </div>
            </div>

            <div>
              <div>
                <p>
                  Date of Issue:{" "}
                  <span className="m-3">{record.requestDate}</span>
                </p>
              </div>
              <div>
                <p>
                  Resolved Date:{" "}
                  <span className="m-2">{record.solvedDate}</span>
                </p>
              </div>
            </div>
            <Link to="/viewticket">
              <button className="accept py-1.5 px-7 rounded-md">View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketRecord;
