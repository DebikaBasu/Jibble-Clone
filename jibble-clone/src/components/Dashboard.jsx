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
    flex: 1,
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    height: '200vh',
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    color: 'rgb(171 162 162)',
    padding: '10px 20px',
    borderRadius: '10px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'inherit',
  };

  // Blinking animation using keyframes
  const buttonStyle = {
    padding: '7px 16px',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    color: '#ffffff',
    backgroundColor: isRunning ? '#00cc00' : '#ff0000', // Green when running, red when paused
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    animation: isRunning ? 'blink 1s infinite alternate' : 'none',
  };

  // CSS keyframes for blinking
  const blinkAnimation = `
    @keyframes blink {
      0% { background-color: #ff0000; }
      100% { background-color: #00cc00; }
    }
  `;

  const upcomingHolidaysContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    backgroundColor: '#f7f8fa',
    padding: '20px',
    borderRadius: '10px',
  };

  const holidayBlockStyle = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    width: '48%',
    minHeight: '238px',
    backgroundImage: 'url(https://web.jibble.io/assets/greeting-personal.0f13861a.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right-bottom',
    backgroundSize: 'cover',
  };

  const secDiv = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    width: '48%',
    minHeight: '238px',
  };

  const additionalInfoStyle = {
    marginTop: '20px',
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={dashboardStyle}>
      <style>{blinkAnimation}</style> {/* Embed the blink animation */}

      {/* Navbar */}
      <nav style={navbarStyle}>
        <h2>Dashboard</h2>
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
          <h2>Upcoming Holidays</h2>
          <p>No upcoming holidays</p>
        </div>
      </div>

      <TrackedHours />

      <div style={additionalInfoStyle}>
        <h2>Additional Information</h2>
        <p>This section can display other relevant details.</p>
      </div>
    </div>
  );
};

export default Dashboard;
