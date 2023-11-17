import React from 'react';

const UserTable = ({ onUserClick }) => {
  // Placeholder user data
  const users = [
    { id: 1, username: 'user1', email: 'user1@example.com', phone: '123-456-7890', creationDate: '2023-01-01' },
    { id: 2, username: 'user2', email: 'user2@example.com', phone: '987-654-3210', creationDate: '2023-02-01' },
    { id: 3, username: 'user3', email: 'user3@example.com', phone: '555-123-4567', creationDate: '2023-03-01' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>ID</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id} onClick={() => onUserClick(user)}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.id}</td>
            <td>{user.creationDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
