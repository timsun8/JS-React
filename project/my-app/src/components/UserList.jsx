import React, { useState } from "react";
import "../styles/UserList.css";
import UserCard from "./UserCard";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

async function loadUsers() {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      setError(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
}

return (
    <section className="userlist">
      <h1 className="ul-title">Users</h1>

      <button className="ul-btn" onClick={loadUsers} disabled={loading}>
        {loading ? "Loading..." : users.length ? "Reload" : "Load"}
      </button>

      {error && <p className="ul-error">⚠ {error}</p>}

      <ul className="ul-grid">
        {users.map((u) => (
          <li key={u.id}>
            <UserCard user={u} />
          </li>
        ))}
      </ul>
    </section>
);
}
