// DashboardLayout.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './dashboard.css';

const DashboardLayout = ({ children }) => {
  const { selectedUser, setSelectedUser, users } = useContext(UserContext);
  const [isUserDropdownOpen, setUserDropdownOpen] = React.useState(false);
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleUserSelect = (userName) => {
    const selected = users.find(user => user.name === userName);
    setSelectedUser(selected.name);
    setUserDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Navbar
          isUserDropdownOpen={isUserDropdownOpen}
          toggleUserDropdown={toggleUserDropdown}
          selectedUser={selectedUser}
          users={users}
          handleUserSelect={handleUserSelect}
        />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
