import React from "react";

const TicketRecord = () => {
  const records = [
    {
      title: "Hardware",
      message: "My laptop battery is bad",
      requestDate: "20/8/24",
      solvedDate: "30/8/24",
    },
    {
        title: "Hardware",
        message: "My laptop battery is bad",
        requestDate: "20/8/24",
        solvedDate: "30/8/24",
      },
  ];
  return (
    <div className="Records">
      <div className="recordTabs flex m-6">
        <div>
          <p>Pending</p>
        </div>
        <div>
          <p>Solved</p>
        </div>
        <div>
          <p>Closed</p>
        </div>
      </div>
      <div className="list">
          {records.map((record, index) => (
        <div className="ticket1" key={index}>
          <div>
            <input type="checkbox" />
          </div>
              <div>
                <p>{record.title}</p>
                <p>{record.message}</p>
              </div>
              <div>
                <p>
                  Date of Request: <span>{record.requestDate}</span>
                </p>
              </div>
              <div>
                <p>
                  Date of approval: <span>{record.solvedDate}</span>
                </p>
              </div>
        
        </div>
          ))}
      </div>
    </div>
  );
};

export default TicketRecord;
