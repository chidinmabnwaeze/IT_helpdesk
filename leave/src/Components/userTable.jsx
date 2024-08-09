import React from "react";

const Tables = () => {
  const tab = [
    {
      name: "Mary John",
      id: 23476,
      email: "example@gmail.com",
      issue: "My laptop stopped working",
      status: "High",
      date: "2024-06-09",
    },
    {
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      issue: "My laptop stopped working",
      status: "Clocked in",
      date: "2024-06-09",
    },

    {
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      issue: "My Internet got disconnected",
      status: "Clocked in",
      date: "2024-06-09",
    },
    {
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      issue: "My laptop stopped working",
      status: "Clocked in",
      date: "2024-06-09",
    },
    {
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      issue: "I can't find a document",
      status: "Clocked in",
      date: "2024-06-09",
    },
    {
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      issue: "My laptop stopped working",
      status: "Clocked in",
      date: "2024-06-09",
    },
  ];
  return (
    <div>
      <table className="staffTable">
        <tr className="table-head">
          <th>Complaint</th>
          <th>Issues</th>
          <th>Priority </th>
        </tr>

        {tab.map((tabb, index) => (
          <tr className="rows" key={index}>
            <td className="staff-name ">
              <div className="">
                <input type="checkbox" className="mr-3" />
              </div>
              <span className="tt">
                <p className="text-black ">{tabb.name}</p>
                <p>{tabb.email}</p>
              </span>
            </td>

            <td>{tabb.issue}</td>
            <td className="staff-status">
              <div className="clockedStatus">
                <span className="stat">
                  <div className="circle"></div>

                  {tabb.status}
                </span>
              </div>
            </td>
            <td><button>Accept</button></td>
            <td><button>Assign</button></td>
          </tr>
        ))}
        <button>Accept</button>
      </table>
    </div>
  );
};

export default Tables;
