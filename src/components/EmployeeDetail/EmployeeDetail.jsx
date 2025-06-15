import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EmployeeDetail.css';
import Sidebar from '../sidebar/Sidebar';

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [employee, setEmployee] = useState({
    name: id === "0" ? 'John Doe' : 'Maria',
    email: id === "0" ? 'john.doe@company.com' : 'maria@company.com',
    phone: '+91 6207490987',
    department: id === "0" ? 'Engineering' : 'Marketing',
    designation: id === "0" ? 'Software Engineer' : 'Product Manager',
    joining: id === "0" ? '15 January 2024' : '1 February 2024',
    employeeId: id === "0" ? 'EMP-01' : 'EMP-02',
  });

  const [editData, setEditData] = useState({ ...employee });

  const handleEditChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const saveInfo = () => {
    setEmployee(editData);
    setIsEditingInfo(false);
  };

  const cancelEdit = () => {
    setEditData(employee);
    setIsEditingInfo(false);
  };

  const notify = () => {
    alert('Notification sent to employee to upload PAN card.');
  };

  const deactivateEmployee = () => {
    alert('Employee account deactivated.');
  };

  const resetPassword = () => {
    alert('Password reset link sent to employee email.');
  };

  const [notes, setNotes] = useState("John has shown strong leadership in recent marketing campaigns, achieving a 20% increase in engagement.");

  return (
    <>
      <Sidebar />
      <div className="employee-detail-layout">
        <div className="employee-detail-container">
          <div className="header">
            <h2>Employee Detail - {employee.name}</h2>
            <button onClick={() => navigate('/admin')}>Logout</button>
          </div>

          {/* --- Editable Personal Information --- */}
          <div className="section-card">
  <h3>Personal Information</h3>
  <div className="info-grid">
    {['name', 'email', 'phone', 'designation', 'joining', 'employeeId', 'department'].map((field) => (
      <div key={field} className="info-item">
        <label>{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:</label>
        {isEditingInfo ? (
          <input
            value={editData[field]}
            onChange={(e) => handleEditChange(field, e.target.value)}
          />
        ) : (
          <span className="info-value">{employee[field]}</span>
        )}
      </div>
    ))}
  </div>

  <div className="button-group">
    {isEditingInfo ? (
      <>
        <button className="btn save" onClick={saveInfo}>Save</button>
        <button className="btn cancel" onClick={cancelEdit}>Cancel</button>
      </>
    ) : (
      <button className="btn edit" onClick={() => setIsEditingInfo(true)}>Edit</button>
    )}
    <button className="btn deactivate" onClick={deactivateEmployee}>Deactivate</button>
    <button className="btn reset" onClick={resetPassword}>Reset Password</button>
  </div>
</div>


          <div className="section-card">
            <h3>Leave History</h3>
            <table>
              <thead>
                <tr>
                  <th>Leave Type</th>
                  <th>Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sick Leave</td>
                  <td>10 Feb, 2024</td>
                  <td>Medical Appointment</td>
                  <td>Approved</td>
                  <td>Approved with medical certificate</td>
                </tr>
                <tr>
                  <td>Casual Leave</td>
                  <td>5 Feb, 2024</td>
                  <td>Personal Reason</td>
                  <td>Approved</td>
                  <td>----</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-card">
            <h3>Document Status</h3>
            <ul>
              <li>Aadhar: Uploaded <button>View</button> <button>Download</button></li>
              <li>PAN Card: Missing <button onClick={notify}>Notify</button></li>
              <li>Resume: Uploaded <button>View</button> <button>Download</button></li>
            </ul>
          </div>

          <div className="section-card">
            <h3>Ongoing Tasks</h3>
            <ul>
              <li>Submitting the Document - <span style={{ color: 'orange' }}>Pending</span></li>
              <li>Meeting with new Clients - <span style={{ color: 'green' }}>Completed</span></li>
              <li>Making Presentation - <span style={{ color: 'green' }}>Completed</span></li>
            </ul>
          </div>

          <div className="section-card">
            <h3>Performance Notes</h3>
            <textarea
              rows="5"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <div style={{ marginTop: '10px' }}>
              <button onClick={() => alert("Notes Saved")}>Save</button>
              <button onClick={() => setNotes('')}>Clear</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetail;
