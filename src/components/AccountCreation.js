import React, { useState } from 'react';
import UserDetails from './UserDetails'; 

const AccountCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isAccountCreated, setAccountCreated] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, password, email, phone };
    console.log('New User:', newUser);

    
    setAccountCreated(true);

    setUserData(newUser);
  };

  const showForm = () => {
    
    setFormVisible(true);
  };

  const showUserDetails = () => {
    setFormVisible(false);
    setAccountCreated(false);
  };

  const styles = {
    container: {
      padding: '20px',
    },
    title: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    formLabel: {
      display: 'block',
      margin: '10px 0',
    },
    input: {
      width: '100%',
      padding: '8px',
      boxSizing: 'border-box',
    },
    submitButton: {
      marginTop: '10px',
      padding: '8px 12px',
      background: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
    userDetailsButton: {
      marginTop: '10px',
      background: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      <button style={{ textAlign: 'center', color: 'orangered', background: null }} onClick={showForm}>Account Creation</button>

      {isFormVisible && (
        <div style={styles.container}>
          <h2 style={styles.title}>Account Creation</h2>
          <form onSubmit={handleSubmit}>
          <fieldset>
            <label style={styles.formLabel}>
              Username:<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} />
            </label>
            <br />
            <label style={styles.formLabel}>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
            </label>
            <br />
            <label style={styles.formLabel}>
              Phone:
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={styles.input} />
            </label>
            <br />
            <label style={styles.formLabel}>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
            </label>
            <br />
            <button type="submit" style={styles.submitButton}>Create Account</button>
            
            </fieldset>
          </form>

          {isAccountCreated && (
            <div>
              <p>Account created successfully!</p>
              <button onClick={showUserDetails} style={styles.userDetailsButton}>View User Details</button>
            </div>
          )}
        </div>
      )}
















































      {userData && <UserDetails users={[userData]} />}
    </div>
  );
};

export default AccountCreation;
