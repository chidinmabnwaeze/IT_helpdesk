import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import down from "../assets/icons/arrow-square-down.svg";
// import { useNavigate } from "react-router-dom";
// import Complaint from "../Pages/Complaint";
import DropdownMenu from "./DropdownMenu";
import DropdownContent from "./DropdownContent";
import { FaLaptop, FaTruckLoading } from "react-icons/fa";

const Tables = ({users , setUsers ,isLoading}) => {
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
      status: "Medium",
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
      status: "Low",
      date: "2024-06-09",
    },
    {
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      issue: "I can't find a document",
      status: "Medium",
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
  const [priority, setPriority] = useState("high"|| "medium"||"low");
  //   const handleStatus =(text)=>{
  //  if (text === "High"){
  // setStyle =
  //  }
  //   console.log(setPriority)
  //   }

  //   const navigate = useNavigate()

  // const openAcceptButton = () =>{
  //   navigate("/complaint")
  // }

  //  fetch('http://142.4.9.152:3000/v1/support-tickets?page=1&limit=10', {
  //   method: 'GET',
  //   headers: {
  //     'Authorization': `${token}`,
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error('Error:', error));

  
  // useEffect(() => {
  //   const getData = async () => {
  //     const url = "http://142.4.9.152:3000/v1/support-tickets?page=1&limit=10";
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error(`Response status: ${response.status}`);
  //       }

  //       const json = await response.json();
  //       console.log(json);
  //       setUsers(json);
  //     } catch (error) {
  //       console.error(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   // setTimeout(() =>{
  //   //   (async()=> await getData() && <FaLaptop/>)()
  //   // },2000)
  //   getData();
  // }, []);
  return (
    <div>

      {isLoading && <h1 className="font-bold text-center m-auto">Loading...</h1>}
        {!isLoading && (
          <div className="content">
        <div className="ticket-count font-medium m-3">{`${users?.total} Tickets`}</div>
      <table className="staffTable">
        <tr className="table-head">
          <th>Complaint</th>
          <th>Issues</th>
          <th>Priority </th>
        </tr>
            {users?.data.map((tabb, index) => (
              <tr className="rows" key={index}>
                <td className="staff-name " id="check">
                  <div className="">
                    <input type="checkbox" className="mr-3" id="check" />
                  </div>
                  <span className="tt">
                    <label htmlFor="check" className="text-black "
                    >
                      {tabb.id} 
                    </label>
                    {/* <p>{tabb.lastName}</p> */}
                  </span>
                </td>

                <td>{tabb.issue}</td>
                <td className="staff-status">
                  <div className="clockedStatus">
                    <span
                    // tell usman to change the key to character insentive whether uppercaseor not
                      className={`${priority === "high" ? "stat3" : "stat3"}`.toLowerCase()}
                    >
                      <div className="circle"></div>

                      {tabb.priority}
                    </span>
                  </div>
                </td>
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
                
                <td>
                  {/* <div role="button" tabIndex={0} className="dropdown-content">
                    Assign <img className="down h-4 ml-3 " src={down} alt="" />
                  </div> */}
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
                                  {/* {user.priority} {user.issue} */}
                                  {user.id}
                                </option>
                              ))}
                          </DropdownContent>
                        ))}
                      </>
                    }
                  />
                </td>
{/* 
                <td>
                  <select
                    name="assignTo"
                    id=""
                    className="select flex rounded-lg p-2"
                  >
                    {users
                      .filter((user) => tabb.id != user.id)
                      .map((user, index) => (
                        <option value={user.id} key={index}>
                          {user.firstname} {user.lastname}
                        </option>
                      ))}
                  </select>
                </td> */}
              </tr>
            ))}
      </table>
          </div>
        )}
    </div>
  );
};

export default Tables;
