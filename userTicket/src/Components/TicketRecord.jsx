import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import View from "../Pages.jsx/ViewTickets";
import TicketTab from "./TicketTab";

const TicketRecord = () => {
  // const records = [
  //   {
  //     title: "Hardware",
  //     message: "My laptop battery is bad",
  //     requestDate: "20/8/24",
  //     solvedDate: "30/8/24",
  //     status: "Solved",
  //   },
  //   {
  //     title: "Hardware",
  //     message: "My laptop battery is bad",
  //     requestDate: "20/8/24",
  //     solvedDate: "30/8/24",
  //     status: "Pending",
  //   },
  // ];

  const [ticketRecord, setTicketRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const token = "7a7bcd359fd747f6b1831c11cf476b58";
  const {auth} = useAuth();
  const token = auth?.sessionID

  const records = async () => {
    setIsLoading(true);
    try {
      const url =
        "http://142.4.9.152:3000/v1/support-tickets/own?page=1&limit=10 ";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      const recordData = await response.json();
      setTicketRecord(recordData.data);
      setIsLoading(false);
      console.log(recordData);
    } catch (error) {
      setIsLoading(false);
      console.error(error.message);
    }
  };

  useEffect(() => {
    void records();
  }, []);

  return (
    <div className="records ">
      {isLoading && (
        <h1 className="font-bold text-center m-auto">Loading...</h1>
      )}
      {!isLoading && (
        <div className="content">
          <div className="list">
            {ticketRecord?.data.map((record, index) => (
              <div
                className="ticket1 border flex justify-between items-center m-4 p-6  bg-white"
                key={index}
              >
                <div className="flex ">
                  <div className="mr-3">
                    <input type="checkbox" />
                  </div>
                  <div>
                    <h2 className="text-green-700 font-semibold">
                      {record.issue}
                    </h2>
                    <p>{record.priority}</p>
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      Date of Issue:{" "}
                      <span className="m-3">{record.createdAt}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Resolved Date:{" "}
                      <span className="m-2">{record.updatedAt}</span>
                    </p>
                  </div>
                </div>
                <p>
                  Status: <span>{record.status}</span>{" "}
                </p>
                <Link to={`/viewticket/${record.id}`}>
                  <button className="accept py-1.5 px-7 rounded-md">
                    View
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketRecord;
