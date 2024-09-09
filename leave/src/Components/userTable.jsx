import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import down from "../assets/icons/arrow-square-down.svg";
// import { useNavigate } from "react-router-dom";
// import Complaint from "../Pages/Complaint";
import DropdownMenu from "./DropdownMenu";
import DropdownContent from "./DropdownContent";

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
      status: "High",
      date: "2024-06-09",
    },

    {
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      issue: "My Internet got disconnected",
      status: "High",
      date: "2024-06-09",
    },
    {
      name: "Julius Gabriel",
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
      issue: "I can't find a document",
      status: "High",
      date: "2024-06-09",
    },
    {
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      issue: "My laptop stopped working",
      status: "High",
      date: "2024-06-09",
    },
  ];

  const names = [
    {
      user1: "Abubakar Sadiq",
      user2: "Damian Abel",
      user3: "Abubakar Sadiq",
      user4: "Joshua Duke",
      user5: "Abubakar Sadiq",
      user6: "Sadiq Yusuf",
    },
  ];

  //   const navigate = useNavigate()

  // const openAcceptButton = () =>{
  //   navigate("/complaint")
  // }
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "https://jsonplaceholder.org/users";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        setUsers(json);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, []);
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
            <td className="staff-name " id="check">
              <div className="">
                <input type="checkbox" className="mr-3" id="check" />
              </div>
              <span className="tt">
                <p className="text-black ">
                  {tabb.name} {/*{tabb.lastname}*/}
                </p>
                <p>{tabb.email}</p>
              </span>
            </td>

            <td>{tabb.phone}</td>
            <td className="staff-status">
              <div className="clockedStatus">
                <span className="stat">
                  <div className="circle"></div>

                  {tabb.status}
                </span>
              </div>
            </td>
            <td>
              <Link to="/complaint">
                <button className="accept py-1.5 px-7  rounded-md">
                  Accept
                </button>
              </Link>
            </td>
             {/*
            <td>
              <button className="assign flex justify-center items-center py-1.5 p-6  rounded-md">
                Assign <img className="down h-4 ml-3 " src={down} alt="" />
              </button> 
              <DropdownMenu
                buttonText="Assign To"
                content={
                  <>
                    {items.map((item) => (
                      <DropdownContent key={item}>
                        {`Mr ${item}`}
                      </DropdownContent>
                    ))}
                  </>
                }
              />
            </td>
            */}
            <td>
              {/* <button
                name="assign"
                type="text"
                className="assign flex justify-center items-center py-1.5 p-6  rounded-md"
              >
                Assign
              </button> */}
              {names.map((name, index) => (
                <div className="dropdowns   p-2 w-40 " key={index}>
                  {/* <label htmlFor="assign">Assign</label> */}
                  <select name="assignTo" id="" className="select flex rounded-lg p-2" >
                    <option value=" ">Assign To </option>
                    <option value=" "> </option>
                    <option value="user1">{name.user1}</option>
                    <option value="user1">{name.user2}</option>
                    <option value="user1">{name.user3}</option>
                    <option value="user1">{name.user4}</option>
                    <option value="user1">{name.user5}</option>
                    <option value="user1">{name.user1}</option>
                    <option value="user1">{name.user2}</option>
                   
                  </select>
                </div>
              ))}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Tables;
