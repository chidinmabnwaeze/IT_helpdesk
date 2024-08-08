import React from "react";

export default function Table(){
    return(
        <table className="Table">
<tr>
    <th>Complaint</th>
    <th>Issues</th>
    <th>Priority</th>
</tr>
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
</tr>
        </table>
    )
}