import React from "react";

// const GetPriority = (priority) => {
//     if (priority === "high") {
//         return "stat1"
//     }
//     if (priority === "low") {
//         return "stat2"
//     }
//     if (priority === "medium") {
//         return "stat3"
//     }
//     return ""
// }

// export { GetPriority }

import React from "react";

const Priority = ({ tabb }) => {
  const [priority, setPriority] = useState("");
  const getPriority = () => {
    if ((tabb.priority) === "high") {
     setPriority();
    }
    if ((tabb.priority) === "low") {
      return "stat2";
    }
    if ((tabb.priority) === "medium") {
      return "stat3";
    }
    return "";
  };
  return (
    <div>
      <div className="clockedStatus">
        <span
          // tell usman to change the key to character insentive whether uppercaseor not
          className={`${priority === "high" ? "stat3" : "stat2"}`.toLowerCase()}
        >
          <div className="circle"></div>

          {tabb.priority}
        </span>
      </div>
    </div>
  );
};

export default Priority;
