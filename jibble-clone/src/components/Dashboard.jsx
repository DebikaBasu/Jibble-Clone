import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import TrackedHours from './TrackedHours';

const Dashboard = ({ user }) => {
  const [isRunning, setIsRunning] = useState(false); // For button state
  const [time, setTime] = useState(0); // For tracking time

  // Timer effect that runs when `isRunning` is true
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const toggleTimer = () => {
    setIsRunning(!isRunning); // Toggle the timer on button click
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const dashboardStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    backgroundColor: '#f4f6f9',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    minHeight: '100vh',
  };

  const headerStyle = {
    marginBottom: '15px',
    fontWeight: '600',
    fontSize: '14px',
    color: '#333',
  };

  const navbarStyle = {
    display: 'flex', // Layout: Flexbox for alignment
    justifyContent: 'space-between', // Space between items
    // alignItems: 'center', // Uncomment if vertical centering is needed
    // backgroundColor: 'rgb(255, 255, 255)', // Uncomment for white background
    // color: 'rgb(85, 85, 85)', // Uncomment for custom font color
    padding: '10px 25px', // Padding for spacing inside the navbar
    borderRadius: '12px', // Rounded corners
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)', // Uncomment for subtle shadow
     marginBottom: '-17px', // Uncomment for spacing below the navbar
  };
  

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  };

  const buttonStyle = {
    padding: '8px 18px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: isRunning ? '#28a745' : '#dc3545', // Green when running, red when paused
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    fontWeight: '500',
  };

  const blinkAnimation = `
    @keyframes blink {
      0% { background-color: #dc3545; }
      100% { background-color: #28a745; }
    }
  `;

  const upcomingHolidaysContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    gap: '20px',
  };

  const holidayBlockStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    width: '48%',
    minHeight: '250px',
    backgroundImage: 'url(https://web.jibble.io/assets/greeting-personal.0f13861a.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right-bottom',
    backgroundSize: 'contain',  
    color: '#333',
  };
  

  const secDiv = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    width: '48%',
    minHeight: '250px',
  };

  const additionalInfoStyle = {
    marginTop: '30px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={dashboardStyle}>
      <style>{blinkAnimation}</style> {/* Embed the blink animation */}

      {/* Navbar */}
      <nav style={navbarStyle}>
        <h2 style={headerStyle}>Dashboard</h2>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={toggleTimer}>
            {isRunning ? <FaPause /> : <FaPlay />} {isRunning ? 'Pause' : 'Start'}
          </button>
          {/* Display formatted time */}
          <span>{formatTime(time)}</span>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div style={upcomingHolidaysContainerStyle}>
        <div style={holidayBlockStyle}>
          <div style={headerStyle}>
            {user ? <h1>Hello {user.name}</h1> : <h1>Hello Guest</h1>}
            <p>Here's your dashboard for today.</p>
          </div>
        </div>
        <div style={secDiv}>
          <h2 style={headerStyle}>Upcoming Holidays</h2>
          <p>No upcoming holidays</p>
        </div>
      </div>

      <TrackedHours />

      <div style={additionalInfoStyle}>
        <h2 style={headerStyle}>Additional Information</h2>
        <p>This section can display other relevant details.</p>
      </div>
    </div>
  );
};

export default Dashboard;
