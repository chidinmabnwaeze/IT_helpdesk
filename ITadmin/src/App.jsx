import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Tickets from "./Pages/Ticket";
import Complaint from "./Pages/Complaint";
import MyTickets from "./Components/Tickets"
import Feedbacks from "./Pages/Feedbacks";
import Chatbot from "./Pages/Chatbot";
import Api from "./Pages/Api";
import Login from "./Components/Login";


function App({ search }) {
  // i moved the function to app to pass the functions as props down to userTable
  const [users, setUsers] = useState(null);
  // console.log(users);
  // const [isLoading, setIsLoading] = useState(false);

  // const token = "a1e67f25c65f4e5193bdbbba0e0cf479";

  // const getData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const url = "http://142.4.9.152:3000/v1/support-tickets?page=1&limit=10";
  //     const response = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     // .then(response => response.json())
  //     // .then(data => console.log(data))
  //     // .catch(error => console.error('Error:', error));;

  //     const userData = await response.json();
  //     setUsers(userData.data);
  //     setIsLoading(false);
  //     console.log(userData);
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.error(error.message);
  //   }
  // };
  // useEffect(() => {
  //   void getData();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/tickets"
            element={
              <Tickets
                // users={users.filter(user =>((user.user).toLowerCase()).includes(search.toLowerCase()))}
                // //  users = {users}
                // setUsers={setUsers}
                // isLoading={isLoading}
                search={search}
              />
            }
          />
          <Route path="/complaint/:id" element={<Complaint />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mytickets" element={<MyTickets />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
