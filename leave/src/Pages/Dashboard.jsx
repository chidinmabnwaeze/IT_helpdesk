import React from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Topbar />
      <Sidebar/>
    </div>
  );
}
