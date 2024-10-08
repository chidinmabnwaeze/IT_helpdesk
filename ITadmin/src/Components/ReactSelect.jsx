import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useAuth } from "../auth/AuthContext";
import { useLocation } from "react-router-dom";

const ReactSelect = ({ ticket }) => {
  const [users, setUsers] = useState([]); // Stored the users here
  const [selectedUser, setSelectedUser] = useState(null); // For the selected user
  const [assigned, setAssigned] = useState({});
  const [activeRow, setActiveRow] = useState(null);
  //   const { auth } = useAuth();
  //   const token = auth?.sessionID;

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

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  // Fetch all users when the component mounts
  useEffect(() => {
    if (token) {
      const fetchUsers = async () => {
        const url = `http://142.4.9.152:3000/search-user?u=&page=1&limit=10`;
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            console.error(
              "Error fetching users:",
              response.status,
              response.statusText
            );
            return;
          }

          const userSearch = await response.json();

          const userOptions = userSearch.data.map((user) => ({
            value: user.id,
            label: `${user.firstName} ${user.lastName}`,
          }));

          setUsers(userOptions);
        } catch (error) {
          console.error("Error fetching users:", error.message);
        }
      };

      fetchUsers();
    }
  }, [token]); // Only fetch if token exists

  // Handle when an option is selected
  const handleSelectChange = (selectedOption) => {
    setSelectedUser(selectedOption);
    console.log("Selected user:", selectedOption);
    setActiveRow(true);
  };

  // Custom styles for the select dropdown
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "130px",
      borderColor: "green",
      borderRadius: "8px",
      textAlign: "left",
    }),
  };

  const location = useLocation();
  //   const assignedTicketId = location.pathname.split("/").pop();

  const myHeaders = new Headers({
    Authorization: `${token}`,
    "Content-Type": "application/json",
  });

  const getAssigned = async (selectedUser) => {
    const url = `http://142.4.9.152:3000/v1/support-tickets/assign/${ticket.id}`;

    console.log(selectedUser);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          handlerId: selectedUser.value,
          firstName: selectedUser.label.split(" ")[0],
          lastName: selectedUser.label.split(" ")[1],
        }),
        headers: myHeaders,
        credentials: "include",
      });
      const assignedUser = await response.json();
      console.log("Sucess response:", assignedUser);

      // Check if response data and handler exist before accessing
      if (assignedUser.data && assignedUser.data.handler) {
        setAssigned({
          firstName: assignedUser.data.handler.firstName,
          lastName: assignedUser.data.handler.lastName,
        });

        alert(
          `Ticket assigned successfully to ${assignedUser.data.handler?.firstName} ${assignedUser.data.handler.lastName}`
        );
      } else {
        console.error("Error: Invalid response structure", assignedUser);
        alert("Error assigning the ticket. Please try again.");
      }
      console.log(assignedUser.data);
    } catch (error) {
      console.error("Error occurred during ticket assignment:", error.message);
      //   alert(`Ticket assignment failed: ${error.message}`);
    }
  };

  return (
    <div className="flex">
      <Select
        options={users} // Set the fetched users as options
        onChange={handleSelectChange} // Handle selection
        styles={customStyles} // Apply custom styles
        placeholder="Assign"
        isSearchable // Allow searching through the options
        value={selectedUser} // The currently selected option
      />
      {activeRow && selectedUser && (
        <button
          ref={dropdownRef}
          disabled={!selectedUser}
          className="assign py-1.5 px-7 mx-3 rounded-md"
          onClick={() => getAssigned(selectedUser)}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default ReactSelect;
