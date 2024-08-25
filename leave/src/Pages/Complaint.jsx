import React from "react";
import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";

const Complaint = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />

      <div className="comp-body flex justify-between items-center">
        <div>
          <p>Mary John</p>
          <p>maryjohn@gmail.com</p>
        </div>
        <div>
          {/* <p>{tabb.status}</p> */}
        </div>
      </div>
      {/* <hr />
      <div className="textarea">
        <div>
          <p>Complain</p>
        </div>
        <textarea name="complain" id="complain">
          {" "}
          My printer stooped working , I can’t print out documents, lorem ipsum
          dolor sit amet consectetur. Sagittis sed dui nisl viverra ultricies
          blandit magna sapien interdum. Convallis tincidunt sed integer
          sagittis faucibus. Cursus ut ut urna felis. Nam pellentesque dolor id
          massa vitae in nibh enim elementum. Amet sit mauris turpis rhoncus
          scelerisque odio risus. Lorem ipsum dolor sit amet consectetur.
          Sagittis sed dui nisl viverra ultricies blandit magna sapien interdum.
          Convallis tincidunt sed integer sagittis faucibus. Cursus ut ut urna
          felis. Nam pellentesque dolor id massa vitae in nibh enim elementum.
          Amet sit mauris turpis rhoncus scelerisque odio risus.
        </textarea>
      </div>

      <button className="accept py-1.5 px-5  rounded-md">Solved</button>
    <button className="assign py-1.5 px-5  rounded-md">Close case</button> */}
    </div>
  );
};

export default Complaint;
