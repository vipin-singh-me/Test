import React, { useState } from "react";
import "./EmployeeDashboard .css";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  //  Edit Profile
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@company.com",
    phone: "+91 6574890987",
    designation: "Software Engineer",
    department: "Engineering",
    employeeId: "EMP-01",
  });

  //  Attendance
  const [todayMarked, setTodayMarked] = useState(false);
  const [attendanceList, setAttendanceList] = useState([
    { date: "24 January 2024", time: "10:00 A.M.", status: "Marked" },
    { date: "23 January 2024", time: "9:50 A.M.", status: "Marked" },
    { date: "22 January 2024", time: "10:15 A.M.", status: "Marked" },
    { date: "21 January 2024", time: "—", status: "Not Marked" },
  ]);

  const markAttendance = () => {
    const now = new Date();
    const date = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const newRecord = { date, time, status: "Marked" };

    setAttendanceList([newRecord, ...attendanceList]);
    setTodayMarked(true);
  };

  return (
    <div className="employee-dashboard">
      <div className="topbar">
        <h3>Welcome ! {profile.name}</h3>
        <div className="top-btn">
          <span>Employee ID - {profile.employeeId}</span>
          <button onClick={() => navigate("/")}>Logout</button>
        </div>
      </div>

      <div className="card attendance-card">
        <div className="attendance-info">
          <h4>Mark Attendance</h4>
          <div className="attend-mark">
            <p>
              Today's Attendance -
              <span className={todayMarked ? "marked" : "not-marked"}>
                {todayMarked ? "Marked" : "Not Marked"}
              </span>
            </p>
            <button
              className="mark-btn"
              onClick={markAttendance}
              disabled={todayMarked}
            >
              {todayMarked ? "Attendance Marked" : "Mark Today’s Attendance"}
            </button>
          </div>
        </div>
        <div className="attendance-list">
          <h5>Recent Attendance</h5>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceList.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.time}</td>
                  <td
                    className={entry.status === "Marked" ? "marked" : "missed"}
                  >
                    {entry.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="actions">
        <button>Apply for Leave</button>
        <button>Upload Documents</button>
        <button>View Profile</button>
      </div>
      <div className="card info-card">
        <h4 className="info-title">Personal Information</h4>

        <div className="info-row">
          <div className="info-item">
            <p className="label">Name</p>
            <p className="value">
              {isEditing ? (
                <input
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              ) : (
                profile.name
              )}
            </p>
          </div>
          <div className="info-item">
            <p className="label">E-Mail</p>
            <p className="value">
              {isEditing ? (
                <input
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              ) : (
                profile.email
              )}
            </p>
          </div>
          <div className="info-item">
            <p className="label">Phone No.</p>
            <p className="value">
              {isEditing ? (
                <input
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                />
              ) : (
                profile.phone
              )}
            </p>
          </div>
        </div>

        <div className="info-row">
          <div className="info-item">
            <p className="label">Designation</p>
            <p className="value">
              {isEditing ? (
                <input
                  value={profile.designation}
                  onChange={(e) =>
                    setProfile({ ...profile, designation: e.target.value })
                  }
                />
              ) : (
                profile.designation
              )}
            </p>
          </div>
          <div className="info-item">
            <p className="label">Department</p>
            <p className="value">
              {isEditing ? (
                <input
                  value={profile.department}
                  onChange={(e) =>
                    setProfile({ ...profile, department: e.target.value })
                  }
                />
              ) : (
                profile.department
              )}
            </p>
          </div>
          <div className="info-item">
            <p className="label">Employee ID</p>
            <p className="value">{profile.employeeId}</p>
          </div>
        </div>

        <div className="info-row">
          {isEditing ? (
            <>
              <button className="edit-btn" onClick={() => setIsEditing(false)}>
                Save
              </button>
              <button className="edit-btn" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="card leave-card">
        <h4>Apply for Leave</h4>
        <form>
          <div className="leave-row">
            <div className="form-group">
              <label>Leave Type</label>
              <input type="text" placeholder="e.g., Casual, Sick" />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input type="date" />
            </div>
          </div>
          <div className="form-group">
            <label>Reason</label>
            <textarea
              placeholder="Reason for the leave application…………"
              rows={4}
            ></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Send Application
            </button>
            <button type="button" className="clear-btn">
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="card document-card">
        <h4>Document Upload</h4>
        <div className="document-grid">
          <div className="document-item">
            <p>
              Aadhar Card <span className="uploaded">(Uploaded)</span>
            </p>
            <input type="file" />
          </div>
          <div className="document-item">
            <p>
              PAN Card <span className="missing">(Missing)</span>
            </p>
            <input type="file" />
          </div>
          <div className="document-item">
            <p>
              Resume <span className="uploaded">(Uploaded)</span>
            </p>
            <input type="file" />
          </div>
        </div>
      </div>

      <div className="card notification-card">
        <div className="notification-header">
          <h4>Notifications</h4>
          <a href="#" className="see-all">
            See All
          </a>
        </div>

        <div className="notification-group">
          <p className="group-title">Today</p>

          <div className="notification-item active">
            <div className="message">
              Your sick leave for <strong>2025-04-18</strong> has been{" "}
              <strong>approved</strong> for next 5 days .
            </div>
            <div className="meta">2025/04/15 · 9:30 A.M.</div>
            <div className="buttons">
              <button className="view-btn">View</button>
              <button className="dismiss-btn">Dismiss</button>
            </div>
          </div>

          <div className="notification-item">
            <div className="message">
              Please upload your <strong>PAN Card</strong> to complete your
              profile.
            </div>
            <div className="meta">2025/04/15 · 7:30 A.M.</div>
            <div className="buttons">
              <button className="view-btn">View</button>
              <button className="dismiss-btn">Dismiss</button>
            </div>
          </div>
        </div>

        <div className="notification-group">
          <p className="group-title">Yesterday</p>

          <div className="notification-item">
            <div className="message">
              Your <strong>Resume</strong> is under review wait for some time we
              will get back to you soon .
            </div>
            <div className="meta">2025/04/12 · 9:30 A.M.</div>
            <div className="buttons">
              <button className="view-btn">View</button>
              <button className="dismiss-btn">Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
