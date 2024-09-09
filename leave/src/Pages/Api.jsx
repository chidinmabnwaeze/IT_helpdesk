import React, { useEffect, useState } from "react";

const Api = () => {
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
      {users.map((user, index) => (
        <h1 key={index}>
          {user.firstname} {user.lastname}
        </h1>
      ))}
    </div>
  );
};

export default Api;
