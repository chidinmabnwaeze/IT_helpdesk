import React from "react";
import TicketRecord from "./TicketRecord";

const TicketTab = () => {
    const [activeTab, setActiveTab] = useState("all")
const changeTab = (tab)=>{
    setActiveTab("all")
}
  return (
   <div>
    <div className="recordTabs flex m-6 bg-white">
      <span
        className={`${activeTab === "all" ? "activeTab" : "m-4"}`}
        onClick={() => changeTab("all")}
      >
        All
      </span>
      <span
        className={`${activeTab === "pending" ? "activeTab" : "m-4"}`}
        onClick={() => changeTab("pending")}
      >
        Pend
      </span>
      <div className="m-4">
        <p>Pending</p>
      </div>
      <div className="m-4">
        <p>Closed</p>
      </div>
    </div>

    <div className= "content">
    {`${activeTab === "all" && (
        <div>
        <TicketRecord/>
        </div>
    )}`}

    </div>
    </div>
  );
};

export default TicketTab;
