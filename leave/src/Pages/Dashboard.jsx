import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import thumb from "../assets/icons/thumbs.svg";

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
      message: "Thanks for coming to my aid",
    },
    {
      name: "Mary John",
      time: "9:57 am",
      message: "Thanks for coming to my aid",
    },
    {
      name: "Mary John",
      time: "9:57 am",
      message: "Thanks for coming to my aid",
    },
  ];
  const agents = [
    {
      name: "James",
      chatCount: "40 live chats",
    },
    {
      name: "Mary John",
      chatCount: "40 live chats",
    },
    {
      name: "Mary John",
      chatCount: "40 live chats",
    },
  ];
  return (
    <div className="dashboard">
      <Topbar />
      <Sidebar />
      <section className="dash-body">
        <div className="section1 flex w-full">
          <section className="ticket-stats gap-4 p-5 my-5 w-3/5 bg-white grid grid-cols-2">
            {ticketCount.map((count, index) => (
              <div className="total p-8 border" key={index}>
                <p className="font-medium text-3xl">{count.count}</p>
                <p>{count.subject}</p>
              </div>
            ))}
          </section>
          <section className="tag p-4 w-2/5 m-5 bg-white">
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
                
                <div className="greyline w-full h-1">
                  <div className="greenline w-3/6 h-1">&nbsp;</div>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="section2 grid grid-cols-3 gap-4">
          <section className="graph bg-white"></section>
          <section className="feedbacks bg-white">
            <div className="heading m-2">
              <h3>Feedback</h3>
            </div>

            {feedback.map((feed, index) => (
              <div className="div flex mx-2" key={index}>
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

          <section className="live-agents bg-white">
            <div className="heading m-2">
              <h3>Live Agents</h3>
            </div>

            {agents.map((agent, index) => (
              <div className="div" key={index}>
                <div className="client">
                  <div className="top flex justify-between p-2">
                    <span className="flex">
                      <p>{agent.name}</p>
                    </span>
                    <span>
                      <p>{agent.chatCount}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}
