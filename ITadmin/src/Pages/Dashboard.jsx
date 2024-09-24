import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import thumb from "../assets/icons/thumbs.svg";
// import NextPage from "../Components/nextPage";
import LineCharts from "../Components/Linecharts";

export default function Dashboard() {
  const [ticketCount, setTicketCount] = useState([
    {
      count: "365",
      subject: "Total Tickets",
    },
    {
      count: "65",
      subject: "New Tickets",
    },
    {
      count: "36",
      subject: "Pending Tickets",
    },
    {
      count: "53",
      subject: "Closed Tickets",
    },
  ]);
  const tags = [
    {
      name: "High",
      count: 40,
    },
    {
      name: "Medium",
      count: 35,
    },
    {
      name: "Low",
      count: 58,
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
      name: "James",
      chatCount: "40 live chats",
    },
    {
      name: "James",
      chatCount: "40 live chats",
    },
    {
      name: "Amina",
      chatCount: "40 live chats",
    },
    {
      name: "James",
      chatCount: "40 live chats",
    },
  ];
  return (
    <div className="dashboard" data-theme="dark">
      <Topbar />
      <Sidebar />
      <section className="dash-body">
        <div className="m-3 flex items-center">
          <h1 className="font-semibold text-2xl text-green-700">Welcome Back, Admin</h1>
        </div>
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
              <h3 className="font-semibold">Tickets by priority</h3>
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
                
                <div className= "greyline w-full h-1">
                  <div className={`${tag.name === "High" ? "redline" : tag.name === "Medium" ? "yellowline" : "greenline"}`}>&nbsp;</div>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="section2 flex w-full ">
          <section className="graph bg-white w-3/5 ">
            <LineCharts/>
          </section>

          <section className="feedbacks bg-white w-1/5 mx-5">
            <div className="heading m-2">
              <h3 className="font-semibold">Feedback</h3>
            </div>

            {feedback.map((feed, index) => (
              <div className="div flex mx-2 border-b" key={index}>
                <div className="thumbs">
                  <img src={thumb} alt="" />
                </div>
                <div className="client">
                  <div className="message">{feed.message}</div>
                  <div className="top flex justify-between p-2">
                    <span className="flex text-sm text-gray-400">
                      <p>{feed.name}</p>
                    </span>
                    <span className="text-sm text-gray-400">
                      <p>{feed.time}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="live-agents w-1/5 bg-white mr-5">
            <div className="heading m-2">
              <h3 className="font-semibold">Live Agents</h3>
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
