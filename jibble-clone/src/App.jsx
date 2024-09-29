import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      // Set a default user 
      setUser({ name: 'Debika Basu' });
    }
  }, []);

  const appStyle = {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f7f8fa',
  };

  return (
    <Router>
      <div style={appStyle}>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
