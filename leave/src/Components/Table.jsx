import React, { useState } from "react";

export default function Table() {
    const [button, setButton] = useState([
    {
        button: "Accept"
    }
    ])
    const [table ,setTable] = useState([
        {
            name: "Mary John" ,
            email: "maryjohn@gmail.com",
            issue: "My laptop is not functioning...",
            status : "High"
        },
        {
            name: "Mary John" ,
            email: "maryjohn@gmail.com",
            issue: "My laptop is not functioning...",
            status : "High"
        },
        {
            name: "Mary John" ,
            email: "maryjohn@gmail.com",
            issue: "My laptop is not functioning...",
            status : "High"
        },
    ])
  return (
    <table className="Table">
      <tr>
        <th>Complaint</th>
        <th>Issues</th>
        <th>Priority</th>
      </tr>

      {table.map((issues, index)=>(
      <tr className="flex justify-between p-5 items-center">

        <td className="flex -5">
          <div className="checkbox">
            <input type="checkbox" id="complaint" />
          </div>
          <div className="name" id="complaint">
            <p id="complaint">{issues.name}</p>
            <p className="bg-grey-200 font-10">{issues.email}</p>
          </div>
        </td>

        <td>
          <p>{issues.issue}</p>
        </td>

        <td>
          <div className="priority">
            <div className="rounded bg-red-500"></div>
            <p className="bg-red-500">{issues.status}</p>
          </div>
        </td>
        <button>Accept</button>
      </tr>
        
      ))}
    </table>
  );
}
