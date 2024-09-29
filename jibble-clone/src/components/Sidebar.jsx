import React from 'react';

const Sidebar = () => {
  const sidebarStyle = {
    width: '250px',
    backgroundColor: '#ffffff',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    height: '200vh',
    // position: 'fixed',
    top: '0',
    left: '10px',
    backgroundImage: 'url(https://web.jibble.io/assets/logo-full.7a859448.svg)', // Set the background image
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 20px', // Adjust position if needed
    backgroundSize: '120px',
   
  };

  const linkStyle = {
    display: 'block',
    padding: '15px 20px',
    color: '#333',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
  };

  const linkHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  return (
    <div style={sidebarStyle}>
      {/* Add some space under the logo */}
      <div style={{ marginBottom: '100px' }}></div>
      <nav>
        <a href="/dashboard" style={linkStyle}>Dashboard</a>
        <a href="/timesheets" style={linkStyle}>Timesheets</a>
        <a href="/timeoff" style={linkStyle}>Time Off</a>
        <a href="/settings" style={linkStyle}>Settings</a>
      </nav>
    </div>
  );
};

export default Sidebar;
