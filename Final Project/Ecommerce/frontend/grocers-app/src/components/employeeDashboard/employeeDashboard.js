import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 
import './employeeDashboard.css'; // Import the CSS
import { useLocation } from 'react-router-dom';

function EmployeeDashboard() {
  const [selectedOption, setSelectedOption] = useState('sendRequest'); // Initial selected option
  const navigate = useNavigate();
  const renderContent = () => {
    switch (selectedOption) {
      case 'sendRequest':
        return (
          <div>
            
            {/* Send Request content */}
            <h2>Send Request</h2>
            {/* Implement the Send Request form and logic here */}
          </div>
        );
      case 'updateOrderStatus':
        return (
          <div>
            {/* Update Order Status content */}
            <h2>Update Order Status</h2>
            {/* Implement the Update Order Status functionality here */}
          </div>
        );
      case 'unlockUsers':
        return (
          <div>
            {/* Unlock Users content */}
            <h2>Unlock Users</h2>
            {/* Implement the Unlock Users functionality here */}
          </div>
        );
      case 'editProfile':
        return (
          <div>
            {/* Edit Profile content */}
            <h2>Edit Profile</h2>
            {/* Implement the Edit Profile functionality here */}
          </div>
        );
      default:
        return null;
    }
  };

  const handleLogout = () => {
    // Redirect to the /employeeLogin route
    navigate('/employeeLogin');
  };

  return (
    <div className="employee-dashboard">
      <div className="sidebar">
        <div className="profile-image">
          <img
            src="data:image/jpeg;base64,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" // Replace with the URL of your profile image
            alt="Profile"
            className="round-image"
          />
        </div>
        <ul>
        <h5>Hi, Mahendra Singh Dhoni</h5>
          <li onClick={() => setSelectedOption('sendRequest')}>Send Request</li>
          <li onClick={() => setSelectedOption('updateOrderStatus')}>Update Order Status</li>
          <li onClick={() => setSelectedOption('unlockUsers')}>Unlock Users</li>
          <li onClick={() => setSelectedOption('editProfile')}>Edit Profile</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default EmployeeDashboard;
