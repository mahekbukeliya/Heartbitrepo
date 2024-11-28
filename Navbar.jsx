import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Navbar = ({
  isUserDropdownOpen,
  toggleUserDropdown,
  selectedUser,
  users,
  handleUserSelect
}) => {
  return (
    <nav className="navbar-dash">
      <div className="navbar-left">
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            aria-label="Search"
          />
          <i className="bx bx-search search-icon"></i>
        </div>
      </div>
      <div className="navbar-right">
        <div className="notification-icon">
          <i className="bx bx-bell"></i>
          <span className="notification-badge">3</span>
        </div>

        <div className="user-profile" onClick={toggleUserDropdown}>
          <img
            src={users.find(user => user.name === selectedUser)?.imageUrl}
            alt={selectedUser}
            className="user-image"
          />
          <span className="user-name">{selectedUser}</span>
          <i className={`bx ${isUserDropdownOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
        </div>

        {isUserDropdownOpen && (
          <div className="user-dropdown">
            {users.map((user, index) => (
              <div
                key={index}
                className={`dropdown-item ${selectedUser === user.name ? 'selected' : ''}`}
                onClick={() => handleUserSelect(user.name)}
              >
                <img src={user.imageUrl} alt={user.name} className="dropdown-user-image" />
                <span>{user.name}</span>
              </div>
            ))}
            <div className="dropdown-actions">
              <Link to="/manage" className="dropdown-button">Manage</Link>
              <Link to="/login" className="LinkButton">Logout</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
