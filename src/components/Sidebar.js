// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaBell, FaChartLine, FaCogs, FaSignOutAlt, FaProjectDiagram, FaUserShield, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar, isMobileView, isSidebarVisible }) => {
  return (
    <div>
      <div className='main-logo'></div>
      <button className="breadcrumb-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isSidebarVisible ? 'visible' : ''}`}>
      <hr className='br-line'/>
        <ul>
          <li>
          
            <Link to="/">
              <FaHome />
              {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/role-management">
              <FaUserShield />
              {!isCollapsed && <span>Role Management</span>}
            </Link>
          </li>
          <li>
            <Link to="/user-management">
              <FaUsers />
              {!isCollapsed && <span>User Management</span>}
            </Link>
          </li>
          <li>
            <Link to="/project-management">
              <FaProjectDiagram />
              {!isCollapsed && <span>Project Management</span>}
            </Link>
          </li>
          <li>
            <Link to="/notification">
              <FaBell />
              {!isCollapsed && <span>Notification</span>}
            </Link>
          </li>
          <li>
            <Link to="/report">
              <FaChartLine />
              {!isCollapsed && <span>Report</span>}
            </Link>
          </li>
          <li>
            <Link to="/setting">
              <FaCogs />
              {!isCollapsed && <span>Setting</span>}
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <FaSignOutAlt />
              {!isCollapsed && <span>Logout</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
