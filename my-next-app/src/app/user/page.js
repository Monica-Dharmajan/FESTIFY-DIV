"use client";
import { useEffect, useState } from "react";

export default function User() {
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    async function fetchUserBasedOnId() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUserData(data);
    }
    if (userId) fetchUserBasedOnId();
  }, [userId]);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="number"
        placeholder="Enter ID to get user"
        style={{
          marginTop: "20px",
          padding: "10px",
          marginRight: "10px",
          border: "2px solid red",
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          maxWidth: "90%",
          width: "300px",
        }}
        onChange={(e) => setUserId(e.target.value)}
      />
      {userData.name && <h3 style={{ color: "red" }}>Name: {userData.name}</h3>}
    </div>
  );
}