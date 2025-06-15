import React from "react";
import "./Dashboard.css";
import StatCard from "../Card/Card";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard">
        <div className="dashboard-header">
          <h2>Welcome , Rahul !</h2>
          <div className="user-profile">
            <div className="user-logo">
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className="img" alt="User" />
            <h4>Rahul</h4>
            </div>
            <Link to={'/admin'} className="logout-btn">Logout</Link>
          </div>
         
        </div>

        <div className="stats">
          <StatCard
            title="Total Employees"
            value="150"
            subtitle="+5 this Month"
            icon="👥"
          />
          <StatCard
            title="Active Employees"
            value="110"
            subtitle="90% Full-Time"
            icon="✅"
          />
          <StatCard
            title="Interns in Company"
            value="10"
            subtitle="3 New this Quarter"
            icon="🧑‍💻"
          />
          <StatCard
            title="Pending Leaves"
            value="8"
            subtitle="2 Urgent"
            icon="📅"
          />
        </div>

        <div className="leave-section">
          <div className="leave-header">
            <h3>Recent Leave Requests</h3>
            <a href="#">See All</a>
          </div>
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Julia</td>
                <td>Casual</td>
                <td>25 April to 5 May</td>
                <td className="pending">Pending</td>
                <td>
                  <button className="approve">Approve</button>
                  <button className="reject">Reject</button>
                </td>
              </tr>
              <tr>
                <td>John</td>
                <td>Sick Leave</td>
                <td>15 April to 25 April</td>
                <td className="approved">Approved</td>
                <td>
                  <button className="view">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="notification-section">
          <div className="notification-header">
            <h3>Notifications</h3>
            <a href="#">See All</a>
          </div>
          <ul>
            <li>⚠️ New leave request from John Doe awaits approval.</li>
            <li>📋 Employee onboarding task for Alice Brown is pending</li>
            <li>❌ Missing PAN document for Bob Wilson.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
