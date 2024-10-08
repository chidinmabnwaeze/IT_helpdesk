import React, {useState, useEffect} from "react";
import bell from "../../../ITadmin/src/assets/icons/notification-02.png"
import darkmode from "../../../ITadmin/src/assets/icons/material-symbols-light_dark-mode-outline.png"
import avatar from "../../../ITadmin/src/assets/icons/Ellipse 15.png"
import { Link } from "react-router-dom";


export default function Topbar({handleChange, isChecked}){
const [isDark , setIsDark] = useState(false)

// const [users, setUsers] = useState([]);
// console.log(users);
// const [isLoading, setIsLoading] = useState(false);


// const token = "0101e1ef00494b2c8603cc4e58e0c879";

// const getData = async () => {
//   try {
//     setIsLoading(true);
//     const url = "http://142.4.9.152:3000/v1/support-tickets/messages/b27c763933a8481bb196aba1b905d839";
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
//     setUsers(userData.data.user);
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
    <div className="topbar flex z-10 p-5 justify-between items-center bg-white" data-theme={isDark ? "dark" : "light"}>
      <div className="title mr-250">
        <h1 className="font-bold">SUPPORT</h1>
      </div>

      <div className="rightTopSection flex items-center">
        <div className="searchbar">
        <input type="text" placeholder="Search here..." className="rounded p-1"/>
        </div>
        <div 
        className="mode pl-5 rounded-lg cursor-pointer" 
        id="check"
        onChange={handleChange}
        checked ={isChecked}
        >
          <img className="night bg-gray-100 rounded-full p-0.5"  src={darkmode} alt="" />
        </div>
        <div className="notify pl-5 cursor-pointer">
          <img className="bell  bg-gray-100 rounded-full p-1" src={bell} alt="" />
        </div>
        <div className="flex items-center pl-5">
            {/* <p>{users.firstName} {users.lastName}</p> */}
            <img src={avatar} alt="" className="ml-3"/>
        </div>
        <Link to= "http://localhost:5178/login">
        <div className="login-box pl-5">
          <button className="log-button text-white p-2 rounded">Login as Admin</button>
        </div>
        </Link>
      </div>
    </div>
  );
}
