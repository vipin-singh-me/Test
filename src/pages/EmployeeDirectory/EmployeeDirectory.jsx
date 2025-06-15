// 📁 EmployeeDirectory.jsx
import React, { useState } from 'react';
import './EmployeeDirectory.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link, useNavigate } from 'react-router-dom';

const EmployeeDirectory = () => {
  const employees = [];

  // Dummy data - 110 employees
  for (let i = 1; i <= 110; i++) {
    employees.push({
      name: i === 1 ? 'John Doe' : 'Maria',
      email: i === 1 ? 'john.doe@company.com' : 'maria@company.com',
      department: i === 1 ? 'Engineering' : 'Marketing',
      designation: i === 1 ? 'Software Engineer' : 'Product Manager',
      joining: i === 1 ? '2024/01/15' : '2024/02/01',
    });
  }

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [filterDept, setFilterDept] = useState('All');
  const itemsPerPage = 10;
  const navigate = useNavigate();

  // Filter before pagination
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      filterRole === 'All' || emp.designation === filterRole;

    const matchesDept =
      filterDept === 'All' || emp.department === filterDept;

    return matchesSearch && matchesRole && matchesDept;
  });

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleEmployees = filteredEmployees.slice(start, end);

  return (
    <div className="layout">
      <Sidebar />
      <div className="employee-directory">
        <div className='header'>
          <h2>Employee Directory</h2>
          <div className='topbar'>
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className='img' alt="User" />
            <Link to={'/admin'} className="logout-btn">Logout</Link>
          </div>
        </div>

        <div className="alert-box">
          Reminder: 3 employees have missing documents.
        </div>

        <div className="filter-box">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
              <option>All</option>
              <option>Software Engineer</option>
              <option>Product Manager</option>
            </select>
            <select value={filterDept} onChange={(e) => setFilterDept(e.target.value)}>
              <option>All</option>
              <option>Engineering</option>
              <option>Marketing</option>
            </select>
          </div>
        </div>

        <div className="employee-table">
          <h3>All Employees</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>E-Mail</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Joining</th>
              </tr>
            </thead>
            <tbody>
              {visibleEmployees.length > 0 ? (
                visibleEmployees.map((emp, index) => (
                  <tr key={index} onClick={() => navigate(`/employee/${start + index}`)} style={{ cursor: 'pointer' }}>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.department}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.joining}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", color: "#999" }}>
                    No matching employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="pagination">
            <span>Showing {start + 1} to {Math.min(end, filteredEmployees.length)} of {filteredEmployees.length}</span>
            <div>
              <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
              </button>
              <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
