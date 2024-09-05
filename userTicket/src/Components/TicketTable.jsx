import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
// import down from "../assets/icons/arrow-square-down.svg";
// import { useNavigate } from "react-router-dom";
// import Complaint from "../Pages/Complaint";
// import DropdownMenu from "./DropdownMenu";
// import DropdownContent from "./DropdownContent";

const Tables = () => {
  const tab = [
    {
      name: "Mary John",
      id: 23476,
      email: "example@gmail.com",
      issue: "My laptop stopped working",
      status: "Solved",
      date: "2024-06-09",
    },
    {
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      issue: "My laptop stopped working",
      status: "Pending",
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

  const items = [
    "Abubakar Sadiq",
    "Damian Abel",
    "Abubakar Sadiq",
    "Joshua Duke",
    "Abubakar Sadiq",
    "Abubakar Sadiq",
  ];

  //   const navigate = useNavigate()

  // const openAcceptButton = () =>{
  //   navigate("/complaint")
  // }
  return (
    <div>
      <Topbar/>
      <Sidebar/>
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
            <td>
              <Link to="/complaint">
                <button className="accept py-1.5 px-7  rounded-md">
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
                    {items.map((item) => (
                      <DropdownContent key={item}>
                        {`Mr ${item}`}
                      </DropdownContent>
                    ))}
                  </>
                }
              />
            </td> */}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Tables;
