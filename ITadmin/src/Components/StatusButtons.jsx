import React from "react";

const StatusButtons = ({ buttonText, status, setStatus, statusText }) => {
  return (
    <button
      className={statusText === status ? "activeTab" : "tabButtons"}
      type="button"
      onClick={() => setStatus(statusText)}
    >
      {buttonText}
    </button>
  );
};

export default StatusButtons;
