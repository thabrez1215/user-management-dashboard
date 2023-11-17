import React, { useState } from 'react';

const UserDetails = ({ users }) => {
  const [isDetailsVisible, setDetailsVisible] = useState(false);

  const showDetails = () => {
    setDetailsVisible(true);
  };

  const hideDetails = () => {
    setDetailsVisible(false);
  };

  const styles = {
    container: {
      padding: '20px',
    },
    title: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    table: {
      borderCollapse: 'collapse',
      width: '100%',
      marginTop: '10px',
    },
    th: {
      border: '1px solid #ddd',
      textAlign: 'left',
      backgroundColor: '#f2f2f2',
    },
    td: {
      border: '1px solid #ddd',
    },
    closeButton: {
      marginTop: '10px',
      padding: '8px 12px',
      background: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Details</h2>
      
      {!isDetailsVisible ? (
        <button onClick={showDetails}>Show Details</button>
      ) : (
        <div>
            
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
               
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={hideDetails} style={styles.closeButton}>Close Details</button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
