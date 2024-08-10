import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import thumb from "../assets/icons/thumbs.svg"

export default function Dashboard() {
  const [ticketCount, setTicketCount] = useState([
    {
      count: "365",
      subject: "Total Tickets",
    },
    {
      count: "65",
      subject: "Open Tickets",
    },
    {
      count: "36",
      subject: "Unresolved Tickets",
    },
    {
      count: "53",
      subject: "Resolved Tickets",
    },
  ]);
  const tags = [
    {
      name: "Hardware",
      count: 40,
    },
    {
      name: "Hardware",
      count: 40,
    },
    {
      name: "Hardware",
      count: 40,
    },
  ];
  const feedback = [
    {
      name: "Mary John",
    time: "9:57 am",
      message: "Thanks for coming to my aid"
    },
    {
      name: "Mary John",
    time: "9:57 am",
      message: "Thanks for coming to my aid"
    },
    {
      name: "Mary John",
    time: "9:57 am",
      message: "Thanks for coming to my aid"
    },
  ];
  const agents = [
    {
      name: "Mary John",
    time: "9:57 am",
      message: "Thanks for coming to my aid"
    },
    {
      name: "Mary John",
    time: "9:57 am",
      message: "Thanks for coming to my aid"
    },
    {
      name: "Mary John",
    time: "9:57 am",
      message: "Thanks for coming to my aid"
    },
  ];
  return (
    <div className="dashboard">
      <Topbar />
      <Sidebar />
      <section className="dash-body flex">
        <section className="ticket-stats m-8 p-4 bg-white flex">
          {ticketCount.map((count, index) => (
            <div className="total m-5 p-8 border" key={index}>
              <p className="font-medium text-3xl">{count.count}</p>
              <p>{count.subject}</p>
            </div>
          ))}
        </section>
        <section className="tag m-8 p-4 bg-white w-80">
          <div className="heading m-2">
            <h3>Ticket by tags</h3>
          </div>

          {tags.map((tag, index) => (
            <div className="div" key={index}>
              <div className="top flex justify-between p-2">
                <span className="flex">
                  <p>{tag.name}</p>
                </span>
                <span>
                  <p>{tag.count}</p>
                </span>
              </div>
              progressbar
            </div>
          ))}
        </section>
        <section className="graph bg-white"></section>
        <section className="feedbacks bg-white">
          <div className="heading m-2">
            <h3>Client Feedback</h3>
          </div>

          {feedback.map((feed, index) => (
            <div className="div" key={index}>
                <div className="thumbs">
                    <img src={thumb} alt="" />
                </div>
                <div className="client">
                <div className="message">{feed.message}</div>
              <div className="top flex justify-between p-2">
                <span className="flex">
                  <p>{feed.name}</p>
                </span>
                <span>
                  <p>{feed.time}</p>
                </span>
              </div>
              </div>
            </div>
          ))}
        </section>
        <section className="live-agents">
        <div className="heading m-2">
            <h3>Client Feedback</h3>
          </div>

          {agents.map((agent, index) => (
            <div className="div" key={index}>
                <div className= "client">
                <div className= "message">{agent.message}</div>
              <div className ="top flex justify-between p-2">
                <span className="flex">
                  <p>{agent.name}</p>
                </span>
                <span>
                  <p>{agent.time}</p>
                </span>
              </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
