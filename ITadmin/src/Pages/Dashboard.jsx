import React, { useState, useEffect } from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import thumb from "../assets/icons/thumbs.svg";
// import NextPage from "../Components/nextPage";
import LineCharts from "../Components/Linecharts";
import { useAuth } from "../auth/AuthContext";

export default function Dashboard() {
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

  const { auth } = useAuth();
  const token = auth?.sessionID;

  const [stats, setStats] = useState({});

  const getStats = async () => {
    const url = "http://142.4.9.152:3000/v1/support-tickets/stats";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      const dashStats = await response.json();
      setStats(dashStats.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className="dashboard" data-theme="dark">
      <Topbar />
      <Sidebar />
      <section className="dash-body">
        <div className="m-3 flex items-center">
          <h1 className="font-semibold text-2xl text-green-700">
            Welcome Back, Admin
          </h1>
        </div>
        <div className="section1 flex w-full">
          <section className="ticket-stats gap-4 p-5 my-5 w-3/5 bg-white grid grid-cols-2">
            <div className="total p-8 border">
              <p className="font-medium text-3xl">{stats.total}</p>
              <p>Total Tickets</p>
            </div>
            <div className="total p-8 border">
              <p className="font-medium text-3xl">{stats.statusNew}</p>
              <p>New Tickets</p>
            </div>
            <div className="total p-8 border">
              <p className="font-medium text-3xl">{stats.statusPending}</p>
              <p>Pending Tickets</p>
            </div>
            <div className="total p-8 border">
              <p className="font-medium text-3xl">{stats.statusClosed}</p>
              <p>Closed Tickets</p>
            </div>
          </section>
          <section className="tag p-4 w-2/5 m-5 bg-white">
            <div className="heading m-2">
              <h3 className="font-semibold">Tickets by priority</h3>
            </div>

            <div className="forHigh">
              <div className="top flex justify-between p-2">
                <span className="flex">
                  <p>High</p>
                </span>
                <span>
                  <p>{stats.highPriority}</p>
                </span>
              </div>

              <div className="greyline w-full h-1">
                <div
                  className="redline"
                  style={{ width: `${stats.highPriority}%` }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="forMedium">
              <div className="top flex justify-between p-2">
                <span className="flex">
                  <p>Medium</p>
                </span>
                <span>
                  <p>{stats.mediumPriority}</p>
                </span>
              </div>

              <div className="greyline w-full h-1">
                <div
                  className="yellowline"
                  style={{ width: `${stats.mediumPriority}%` }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="forLow">
              <div className="top flex justify-between p-2">
                <span className="flex">
                  <p>Low</p>
                </span>
                <span>
                  <p>{stats.lowPriority}</p>
                </span>
              </div>

              <div className="greyline w-full h-1">
                <div
                  className="greenline"
                  style={{ width: `${stats.lowPriority}%` }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="section2 flex w-full ">
          <section className="graph bg-white w-3/5 ">
            <LineCharts />
          </section>

          <section className="feedbacks bg-white w-2/5 mx-5">
            <div className="heading m-2">
              <h3 className="font-semibold">Feedback</h3>
            </div>

            {feedback.map((feed, index) => (
              <div className="div flex mx-2 border-b" key={index}>
                <div className="thumbs">
                  <img src={thumb} alt="" />
                </div>
                <div className="client w-full">
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

          {/* <section className="live-agents w-1/5 bg-white mr-5">
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
                      <p>{agent.chatcount}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section> */}
        </div>
      </section>
    </div>
  );
}
