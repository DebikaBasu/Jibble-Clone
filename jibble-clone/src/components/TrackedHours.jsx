import React from 'react';

const TrackedHours = () => {
  const trackedHoursStyle = {
    marginTop: '20px',
    backgroundColor: '#f7f8fa',
    padding: '20px',
    borderRadius: '10px',
  };

  const hoursStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const hourBlockStyle = {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    minHeight: '250px',
  };

  return (
    <div style={trackedHoursStyle}>
      <h2>Tracked Hours</h2>
      <div style={hoursStyle}>
        <div style={hourBlockStyle}>
         
        </div>
        {/* <div style={hourBlockStyle}>
          
        </div> */}
      </div>
    </div>
  );
};

export default TrackedHours;
