import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState("");

  const ADMIN_PASSWORD = "Sridhar@2004"; // change this to your own

  // Login handler
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthorized(true);
      fetchMessages();
    } else {
      alert("Wrong password!");
    }
  };

  // Fetch messages from backend
  const fetchMessages = () => {
    axios.get("http://localhost:5000/api/contact") // replace with deployed backend URL when live
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  };

  // Delete a message
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      axios.delete(`http://localhost:5000/api/contact/${id}`)
        .then(() => fetchMessages())
        .catch(err => console.error(err));
    }
  };

  if (!authorized) {
    return (
      <div className="p-8 max-w-sm mx-auto mt-20 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Login
        </button>
      </div>
    );
  }

  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(filter.toLowerCase()) ||
    msg.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Admin Panel - Contact Messages</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Message</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMessages.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">No messages found</td>
            </tr>
          ) : (
            filteredMessages.map(msg => (
              <tr key={msg.id}>
                <td className="border px-4 py-2">{msg.name}</td>
                <td className="border px-4 py-2">{msg.email}</td>
                <td className="border px-4 py-2">{msg.message}</td>
                <td className="border px-4 py-2">{new Date(msg.created_at).toLocaleString()}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
