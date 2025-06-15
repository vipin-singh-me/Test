import React from 'react';
import './Sidebar.css';
import Logo from '/Logo (2).png';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
      <div className="Link">
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
          Dashboard
        </NavLink>
        <NavLink to="/employee-directory" className={({ isActive }) => isActive ? "active" : ""}>
          Employee Directory
        </NavLink>
        <NavLink to="/leave-reaquest" className={({ isActive }) => isActive ? "active" : ""}>
          Leaves Requests
        </NavLink>
        <NavLink to="/document-tracker" className={({ isActive }) => isActive ? "active" : ""}>
          Document Tracker
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => isActive ? "active" : ""}>
          Analytics
        </NavLink>
        <NavLink to="/notifications" className={({ isActive }) => isActive ? "active" : ""}>
          Notifications
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
