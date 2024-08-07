import React from "react";

export default function Ticket() {
    
  return (
    <section className="ticket bg-white">
      <div className="top-sect">
        <div>
        <h2>My Tickets</h2>
        </div>
        <section>
        <div className="tabs">
            <ul className="tab">
                <li>All Issues</li>
                <li>New Issues</li>
                <li>Opened Issues</li>
                <li>Closed Issues</li>
            </ul>
        </div>
        <div className="date"></div>
        </section>
      </div>
    </section>
  );
}
