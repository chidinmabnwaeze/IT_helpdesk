import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import ReactSelect from "./ReactSelect";
import DropdownMenu from "./DropdownMenu";
import DropdownContent from "./DropdownContent";
import DropdownItems from "./DropdownItems";

const Tables = ({status}) => {
  const { auth } = useAuth();
  const token = auth?.sessionID;

  // const [priority, setPriority] = useState("high");
  const [priorityCircle, setPriorityCircle] = useState("");

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // For assigned tickets
  const [assigned, setAssigned] = useState({});

  const [display, setDisplay] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeRow, setActiveRow] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveRow(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDisplay = () => {
    setDisplay(true);
  };
  const getData = async () => {
    try {
      setIsLoading(true);
      const url = "http://142.4.9.152:3000/v1/support-tickets?page=1&limit=10";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        // credentials: "include"
      });
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error('Error:', error));;

      const userData = await response.json();
      setUsers(userData.data);
      setIsLoading(false);
      console.log(userData);
    } catch (error) {
      setIsLoading(false);
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData(); //you removed void
  }, [status]);

  // const [handler, setHandler] = useState({});

  const location = useLocation();
  const assignedTicketId = location.pathname.split("/").pop();

  const myHeaders = new Headers({
    Authorization: `${token}`, // Assuming Bearer token; adjust if needed
    "Content-Type": "application/json",
  });

  const getAssigned = async (selectedUser, ticketId) => {
    if (!selectedUser.id) {
      alert("No handler selected! Please select a handler.");
      return;
    }
    console.log("selected User:", selectedUser);
    try {
      const url = `http://142.4.9.152:3000/v1/support-tickets/assign/${assignedTicketId}`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          handlerId: selectedUser.id,
          firstName: selectedUser.firstName,
          lastName: selectedUser.lastName,
        }),
        headers: myHeaders,
        credentials: "include",
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
        const errorData = await response.json(); // Parse the response body
        console.error("Server Response Error:", errorData);
        throw new Error(
          `Error ${response.status}: ${errorData.message || "Bad Request"}`
        );
      }

      const json = await response.json();
      console.log("Success Response:", json);
      // if (json && json.handler) {
      setAssigned({
        firstName: json.data.handler.firstName,
        lastName: json.data.handler.lastName,
      });
      alert(
        `Ticket assigned successfully to ${json.data.handler?.firstName} ${json.data.handler.lastName}`
      );
      // } else {
      //   alert("Ticket assigned, but no handler information returned.");
      // }
      // alert(`Ticket assigned successfully to ${json.handler.firstName}`);
    } catch (error) {
      console.error("Error occurred during ticket assignment:", error.message);
      alert(`Ticket assignment failed: ${error.message}`);
    }
  };

  // useEffect(()=>{
  //   getAssigned();
  // },[])

  return (
    <div>
      {isLoading && (
        <h1 className="font-bold text-center m-auto">Loading...</h1>
      )}
      {!isLoading && users && (
        <div className="content">
          <div className="ticket-count font-medium m-3">{`${users?.total || 0} ${users?.total === 1 ? "Ticket" : "Tickets"}`}</div>
          <table className="staffTable">
            <thead>
              <tr className="table-head">
                <th>Complaint</th>
                <th>Issues</th>
                <th>Priority </th>
                <th>Status </th>
              </tr>
            </thead>
            <tbody>
              {users?.data.map((tabb, index) => (
                <tr className="rows" key={tabb.id}>
                  <td className="staff-name" id="check">
                    {/* <div className=""> */}
                    <input type="checkbox" className="mr-3" id="check" />
                    {/* </div> */}
                    <span className="tt">
                      <label htmlFor="check" className="text-black ">
                        {tabb.requester?.firstName} {tabb.requester?.lastName}
                      </label>
                      {/* <p>{tabb.lastName}</p> */}
                    </span>
                  </td>

                  <td>{tabb.issue}</td>
                  <td className="staff-status">
                    <div className="clockedStatus">
                      <span
                        className={`${tabb.priority === "high" ? "stat" : tabb.priority === "medium" ? "stat2" : "stat3"}`}
                      >
                        {/* <div
                          className={`${tabb.priority === "high" ? "circle" : tabb.priority === "medium" ? "circle-not" : "circle-leave"}`}
                        >
                          .
                        </div> */}

                        {tabb.priority}
                      </span>
                    </div>
                  </td>
                  <td>{tabb.status}</td>
                  <td>{tabb.attachment}</td>
                  <td>
                    <Link to={`/complaint/${tabb.id} `}>
                      <button className="accept py-1.5 px-7 rounded-md">
                        Accept
                      </button>
                    </Link>
                  </td>

                  {/* <td>
                  <button className="assign flex justify-center items-center py-1.5 p-6  rounded-md">
                    Assign <img className="down h-4 ml-3 " src={down} alt="" />
                  </button>
                  <DropdownMenu
                    buttonText="Assign To"
                    content={
                      <>
                        {users?.data.map((item) => (
                          <DropdownContent key={item}>
                            {users?.data
                              .filter((user) => tabb.id != user.id)
                              .map((user, index) => (
                                <option value={user.id} key={index}>
                                  {user.priority} {user.issue}
                                </option>
                              ))}
                          </DropdownContent>
                        ))}
                      </>
                    }
                  />
                </td> */}

                  {/* <td>
                  <div role="button" tabIndex={0} className="dropdown-content">
                    Assign <img className="down h-4 ml-3 " src={down} alt="" />
                  </div> 
                  </td> */}
                  {/* <DropdownMenu
                    buttonText="Assign To"
                    content={
                      <>
                        {users?.data.map((item) => (
                          <DropdownContent key={item}>
                            {users?.data
                              .filter((user) => tabb.id != user.id)
                              .map((user, index) => (
                                <option value={user.id} key={index}>
                                  {/* {user.priority} {user.issue} 
                                  {user.id}
                                </option>
                              ))}
                          </DropdownContent>
                        ))}
                      </>
                    }
                  />
                </td> */}

                  {/* correct one */}
                  {/* <td>
                  <select
                    name="assignTo"
                    id=""
                    className="select rounded-lg p-2"
                    onChange={(e) => {
                      users?.data.find((user) => user.id === e.target.value);
                      //  console.log(u)
                    }}
                    defaultValue="default"
                    onSelect={()=>{}}
                  >
                    <option value="default">Assign To</option>
                    {users?.data
                      // .filter((user) => tabb.id != user.id)
                      .map((user, index) => (
                        <option value={user?.id} key={index}>
                          {user.requester?.firstName}
                        </option>
                      ))}
                  </select>
                </td> */}
                  <td className="flex ">
                    <select
                      name="assignTo"
                      id=""
                      className="select rounded-lg p-2"
                      onChange={(e) => {
                        const selected = users?.data.find(
                          (user) => user.id === e.target.value
                        );
                        setSelectedUser(selected);
                        setActiveRow(index);
                       
                      }}
                      defaultValue="default"
                    >
                      <option value="default">Assign To</option>
                      {users?.data.map((user, index) => (
                        <option value={user.id} key={index}>
                          {user?.firstName} {user?.lastName}
                        </option>
                      ))}
                    </select>
                    {/* button to display options for selected users */}
                    {activeRow === index && selectedUser && (
                      <button
                        ref={dropdownRef}
                        disabled={!selectedUser}
                        className="assign py-1.5 px-7 mx-3 rounded-md"
                        onClick={() => getAssigned(selectedUser, tabb.id)}
                      >
                        Save
                      </button>
                    )}
                  </td>
                  <td className="react-select">
<ReactSelect/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {assigned.firstName && (
            <div className="assigned-handler">
              <p>
                Assigned to: {assigned.firstName} {assigned.lastName}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tables;
