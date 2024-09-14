import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Tickets from "./Pages/Ticket";
import Complaint from "./Pages/Complaint";
import Feedbacks from "./Pages/Feedbacks";
import Chatbot from "./Pages/Chatbot";
import Api from "./Pages/Api";

function App() {
  // i moved the function to app to pass the functions as props down to userTable
  const [users, setUsers] = useState(null);
  console.log(users);
  const [isLoading, setIsLoading] = useState(false);

  const token = "214d11c2267943daa441175989a87ef8";

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
    void getData();
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/employee">Employee</Link></li>
              <li><Link to="/complaints">Complaints</Link></li>
            </ul>
          </nav> */}
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route
            path="/tickets"
            element={
              <Tickets
                users={users}
                setUsers={setUsers}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
