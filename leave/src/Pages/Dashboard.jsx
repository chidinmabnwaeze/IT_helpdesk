import React from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Topbar />
      <Sidebar/>
      <section className="dash-body m-8 p-4 bg-white">
        <section className="ticket-stats">

        </section>
      </section>
    </div>
  );
}
