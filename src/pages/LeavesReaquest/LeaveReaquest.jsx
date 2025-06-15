import React, { useState } from "react";
import "./LeaveReaquest.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

const leaveData = [
  { name: "John Doe", type: "Casual", date: "12 May to 20 May", reason: "Personal Reason", status: "Pending" },
  { name: "Maria", type: "Sick Leave", date: "21 May to 30 May", reason: "Sick", status: "Approved" },
  { name: "Jamie", type: "Earned Leave", date: "12 May to 20 May", reason: "Vacation", status: "Pending" },
  { name: "Samuel", type: "Casual", date: "15 May to 22 May", reason: "Personal Reason", status: "Approved" },
  { name: "Jack", type: "Casual", date: "12 May to 20 May", reason: "Personal Reason", status: "Approved" },
  { name: "Shaina", type: "Earned Leave", date: "12 May to 20 May", reason: "Travel", status: "Pending" },
  { name: "Rohan", type: "Sick", date: "12 May to 20 May", reason: "Medical Tests", status: "Approved" },
  { name: "Jasmine", type: "Casual", date: "12 May to 20 May", reason: "Personal Reason", status: "Pending" },
  { name: "Aarti", type: "Sick", date: "12 May to 20 May", reason: "Doctor Appointment", status: "Pending" },
  { name: "Aarti", type: "Sick", date: "12 May to 20 May", reason: "Doctor Appointment", status: "Pending" },
  { name: "Aarti", type: "Sick", date: "12 May to 20 May", reason: "Doctor Appointment", status: "Pending" },
  { name: "Aarti", type: "Sick", date: "12 May to 20 May", reason: "Doctor Appointment", status: "Pending" },
];

const LeaveRequests = () => {
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    date: "",
    status: ""
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1); 
  };

  const filteredData = leaveData.filter(item =>
    item.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    item.type.toLowerCase().includes(filters.type.toLowerCase()) &&
    item.date.toLowerCase().includes(filters.date.toLowerCase()) &&
    item.status.toLowerCase().includes(filters.status.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Sidebar />
      <div className="leave-requests">
        <div className='header'>
          <h2>Employee Directory</h2>
          <div className='topbar'>
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className='img' alt="User" />
            <Link to={'/admin'} className="logout-btn">Logout</Link>
          </div>
          </div>
        <div className="alert-box">New Leave Request From John Doe Awaits Approval.</div>

        <div className="filter-box">
          <h3>Filter Leave Requests</h3>
          <input name="name" placeholder="Employee Name" onChange={handleChange} />
          <input name="type" placeholder="Type" onChange={handleChange} />
          <input name="date" placeholder="Date" onChange={handleChange} />
          <input name="status" placeholder="Status" onChange={handleChange} />
        </div>

        <div className="table-box">
          <h3>All Leave Requests</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Leave Type</th>
                <th>Date Range</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((leave, idx) => (
                <tr key={idx}>
                  <td>{leave.name}</td>
                  <td>{leave.type}</td>
                  <td>{leave.date}</td>
                  <td>{leave.reason}</td>
                  <td className={`status ${leave.status.toLowerCase()}`}>{leave.status}</td>
                </tr>
              ))}
              {paginatedData.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>No leave requests found.</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="pagination">
            <span>Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length}</span>
            <div>
              <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
              <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveRequests;
