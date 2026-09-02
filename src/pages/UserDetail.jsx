import React from "react";
import { useParams } from "react-router";
import USERS from "../data/users";

function UserDetail() {
  const { userId } = useParams();

  const user = USERS.find((user) => user.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  const {
    firstName,
    lastName,
    age,
    email,
    phone,
    city,
    country,
    role,
    isActive,
  } = user;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        margin: "0.75rem 0",
        maxWidth: "400px",
        fontFamily: "sans-serif",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>
        {firstName} {lastName}
        <span
          style={{
            marginLeft: "0.5rem",
            fontSize: "0.75rem",
            padding: "0.15rem 0.5rem",
            borderRadius: "999px",
            color: "#fff",
            backgroundColor: isActive ? "#22c55e" : "#9ca3af",
          }}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </h3>
      <p style={{ margin: "0.25rem 0" }}>Age: {age}</p>
      <p style={{ margin: "0.25rem 0" }}>Role: {role}</p>
      <p style={{ margin: "0.25rem 0" }}>Email: {email}</p>
      <p style={{ margin: "0.25rem 0" }}>Phone: {phone}</p>
      <p style={{ margin: "0.25rem 0" }}>
        Location: {city}, {country}
      </p>
    </div>
  );
}

export default UserDetail;
