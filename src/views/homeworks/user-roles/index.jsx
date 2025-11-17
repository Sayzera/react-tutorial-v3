import React, { useState } from "react";
import UsersTempData from "./users-data.json";

function UserRoles() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  const handleGetTypeUser = (type) => {
    setRole(type);
  };

  return (
    <div>
      <input
        placeholder="Search User"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div>
        <br />
        <button
          onClick={() => {
            handleGetTypeUser("user");
          }}
        >
          Kullanıcıları Getir
        </button>
        <button
          onClick={() => {
            handleGetTypeUser("admin");
          }}
        >
          Adminleri Getir Getir
        </button>
        <ul>
        {UsersTempData.filter((user) => {
            const matchesSearch = !search || 
              user.name.toLowerCase().includes(search.toLowerCase());
            const matchesRole = !role || user.role === role;
            
            return matchesSearch && matchesRole;
          }).map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserRoles;
