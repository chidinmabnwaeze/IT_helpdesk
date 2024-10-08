import React from "react";
import StatusButtons from "./StatusButtons";

const StatusForm = ({ status, setStatus }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <StatusButtons
        buttonText="All Issues"
        status={status}
        setStatus={setStatus}
        statusText=""
        classname="statusButtons"
      />
      <StatusButtons
        buttonText="New Issues"
        status={status}
        setStatus={setStatus}
        statusText="new"
        classname="statusButtons"
      />
      <StatusButtons
        buttonText="Pending Issues"
        status={status}
        setStatus={setStatus}
        statusText="pending"
        classname="statusButtons"
      />
      <StatusButtons
        buttonText="Closed Issues"
        status={status}
        setStatus={setStatus}
        statusText="closed"
        classname="statusButtons"
      />
    </form>
  );
};

export default StatusForm;
