import React, { useState, useEffect } from 'react';
import UserDetails from './components/UserDetails';
import AccountCreation from './components/AccountCreation';

const App = () => {
  const [users, setUsers] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/get_users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const addUser = (newUser) => {
    fetch('http://localhost:5000/api/create_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        // Show UserDetails after adding a new user
        setShowUserDetails(true);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleCloseUserDetails = () => {
    setShowUserDetails(false);
  };

  return (
    <div>
      <h1 style={{textAlign:'center',color:'red'}}>User Management Dashboard</h1>


      <AccountCreation onAddUser={addUser} />


    </div>
  );
};

export default App;
