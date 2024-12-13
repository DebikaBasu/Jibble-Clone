import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      // Set a default user if not logged in
      setUser({ name: 'Debika Basu' });
    }
  }, []);

  const appStyle = {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f7f8fa',
  };

  return (
    <div style={appStyle}>
      {/* Sidebar is always visible */}
      <Sidebar />
      
      {/* Dashboard is displayed first */}
      <div style={{ flex: 1 }}>
        <Dashboard user={user} />
      </div>
    </div>
  );
};

export default App;
