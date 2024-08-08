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
            issue: "Mylaptop is not functioning..."
        }
    ])
  return (
    <table className="Table">
      <tr>
        <th>Complaint</th>
        <th>Issues</th>
        <th>Priority</th>
      </tr>

      {}
      <tr>
        <td>
          <div className="checkbox">
            <input type="checkbox" id="complaint" />
          </div>
          <div className="name">
            <p>Mary John</p>
            <p className="bg-grey-200">maryjohn@gmail.com</p>
          </div>
        </td>
        <td>
          <p>Mylaptop is not functioning...</p>
        </td>
        <td>
          <div className="priority">
            <div className="rounded bg-red-500"></div>
            <p className="bg-red-500">High</p>
          </div>
        </td>
        <button>Accept</button>
      </tr>
    </table>
  );
}
