import React, { useState } from "react";
import "./Notifications.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

const initialNotifications = [
  {
    id: 1,
    type: "Leave Request",
    message: "New leave request from John Doe awaits approval.",
    date: "2025/04/15 9:30 A.M.",
    status: "Unread",
  },
  {
    id: 2,
    type: "Document",
    message: "Missing PAN document for Jane Smith",
    date: "2025/04/15 10:30 A.M.",
    status: "Unread",
  },
  {
    id: 3,
    type: "Leave Request",
    message: "Leave request from Maria approved.",
    date: "2025/04/14 9:30 A.M.",
    status: "Read",
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, status: "Read" } : notif
      )
    );
  };

  const handleDismiss = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => n.status === "Unread").length;

  
  const filteredNotifications = notifications.filter((notif) =>
    notif.message.toLowerCase().includes(searchName.toLowerCase()) &&
    notif.type.toLowerCase().includes(searchType.toLowerCase()) &&
    notif.status.toLowerCase().includes(searchStatus.toLowerCase())
  );

  return (
    <>
    <Sidebar />
    <div className="notifications-container">
      <div className='header'>
          <h2>Notifications <span className="unread-count">({unreadCount} Unread)</span></h2>
          <div className='topbar'>
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className='img' alt="User" />
            <Link to={'/admin'} className="logout-btn">Logout</Link>
          </div>
        </div>
      

      <div className="filter-bar">
        <input
          placeholder="Employee Name /Keyword"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          placeholder="Type"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        />
        <input
          placeholder="Status"
          value={searchStatus}
          onChange={(e) => setSearchStatus(e.target.value)}
        />
      </div>

      <div className="notification-list">
        <h4>Today</h4>
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notif) => (
            <div key={notif.id} className="notification-item">
              <div className={`label ${notif.type === "Leave Request" ? "blue" : "red"}`}>
                {notif.type}
              </div>
              <div className="message-section">
                <p>{notif.message}</p>
                <span className="timestamp">{notif.date}</span>
              </div>
              <div className="action-buttons">
                <button className="view-btn">View</button>
                {notif.status === "Unread" && (
                  <button className="mark-btn" onClick={() => handleMarkAsRead(notif.id)}>
                    Mark as Read
                  </button>
                )}
                <button className="dismiss-btn" onClick={() => handleDismiss(notif.id)}>
                  Dismiss
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-result">No notifications match your filters.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Notifications;
