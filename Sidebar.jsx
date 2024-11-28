import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './dashboard.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header">
        <div className="logo-container" onClick={toggleSidebar}>
          <img
            src="logo.png"
            alt="Logo"
            className="logo-image"
          />
          {isSidebarOpen && <span className="sidebar-title">HeartBIT</span>}
        </div>
      </div>

      <ul className="sidebar-links">
        <li className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/">
            <i className="bx bx-home"></i>
            {isSidebarOpen && <span>Home</span>}
          </Link>
        </li>
        <li className={`sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
          <Link to="/dashboard">
            <i className="bx bx-grid-alt"></i>
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li className={`sidebar-link ${location.pathname === '/datainput' ? 'active' : ''}`}>
          <Link to="/datainput">
            <i className="bx bx-data"></i>
            {isSidebarOpen && <span>Data Input</span>}
          </Link>
        </li>
        <li className={`sidebar-link ${location.pathname === '/prediction' ? 'active' : ''}`}>
          <Link to="/prediction">
            <i className="bx bx-bar-chart"></i>
            {isSidebarOpen && <span>Prediction</span>}
          </Link>
        </li>
        <li className={`sidebar-link ${location.pathname === '/reports' ? 'active' : ''}`}>
          <Link to="/reports">
            <i className="bx bx-file"></i>
            {isSidebarOpen && <span>Reports</span>}
          </Link>
        </li>
        <li className={`sidebar-link ${location.pathname === '/manage' ? 'active' : ''}`}>
          <Link to="/manage">
            <i className="bx bx-user"></i>
            {isSidebarOpen && <span>Profile</span>}
          </Link>
        </li>
        <li className={`sidebar-link logout-link ${isSidebarOpen ? '' : 'collapsed'}`}>
          <Link to="/login">
            <i className="bx bx-log-out"></i>
            {isSidebarOpen && <span>Logout</span>}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
