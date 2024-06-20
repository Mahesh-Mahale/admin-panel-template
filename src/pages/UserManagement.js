// src/pages/UserManagement.js
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './UserManagement.css';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  // Add more users as needed
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (event) => {
    const { checked } = event.target;
    setSelectAll(checked);
    if (checked) {
      setSelectedUsers(users.map(user => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  return (
    <div className="user-management">
      <div className="header">
        <h1>User Management</h1>
        <button className="create-user-button"> <FaPlus className="create-user-icon" />Create User</button>
      </div>
      <div className="filters">
        <input type="text" placeholder="Search by ID, Name, Email" />
        <select>
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <select>
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="actions">
        <button>Delete</button>
        <button>Export</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              UserID
            </th>
            <th>User Name</th>
            <th>Email Address</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                />
                {user.id}
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <span>Page 1 of 1</span>
        <button>Next</button>
      </div>
    </div>
  );
};

export default UserManagement;
