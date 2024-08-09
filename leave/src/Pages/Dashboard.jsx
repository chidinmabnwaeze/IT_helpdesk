import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";

export default function Dashboard(){
    const [ticketCount, setTicketCount] = useState([
        {
            count: "365",
            subject: "Total Tickets"
        },
        {
            count: "65",
            subject: "Open Tickets"
        },
        {
            count: "36",
            subject: "Unresolved Tickets"
        },
        {
            count: "53",
            subject: "Resolved Tickets"
        },
    ])
  return (
    <div className="dashboard">
      <Topbar />
      <Sidebar/>
      <section className="dash-body ">
        <section className="ticket-stats m-8 p-4 bg-white flex">
            {ticketCount.map((count, index)=>(
        <div className="total m-5 p-8 border" key={index}>
           <p className="font-medium text-3xl">{count.count}</p> 
           <p>{count.subject}</p>
        </div>

            ))}
        </section>
      </section>
    </div>
  );
}

