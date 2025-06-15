import React, { useState } from "react";
import "./DocumentTracker.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

const documentData = [
  { name: "John Doe", id: "EMP-01", aadhaar: "Uploaded", pan: "Missing", resume: "Uploaded" },
  { name: "Maria", id: "EMP-02", aadhaar: "Missing", pan: "Uploaded", resume: "Missing" },
  { name: "Jamie", id: "EMP-03", aadhaar: "Pending", pan: "Pending", resume: "Uploaded" },
  { name: "Samuel", id: "EMP-04", aadhaar: "Uploaded", pan: "Uploaded", resume: "Uploaded" },
  { name: "Jack", id: "EMP-05", aadhaar: "Pending", pan: "Pending", resume: "Uploaded" },
  { name: "Shaina", id: "EMP-06", aadhaar: "Uploaded", pan: "Uploaded", resume: "Pending" },
  { name: "Rohan", id: "EMP-07", aadhaar: "Uploaded", pan: "Pending", resume: "Missing" },
  { name: "Jasmine", id: "EMP-08", aadhaar: "Missing", pan: "Uploaded", resume: "Pending" },
  { name: "Aarti", id: "EMP-09", aadhaar: "Uploaded", pan: "Missing", resume: "Pending" },
  { name: "Aarti", id: "EMP-09", aadhaar: "Uploaded", pan: "Missing", resume: "Pending" },
  { name: "Aarti", id: "EMP-09", aadhaar: "Uploaded", pan: "Missing", resume: "Pending" },
  { name: "Aarti", id: "EMP-09", aadhaar: "Uploaded", pan: "Missing", resume: "Pending" },
];

const ITEMS_PER_PAGE = 9;

const DocumentTracker = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchStatus, setSearchStatus] = useState("");


  const filteredData = documentData.filter((doc) => {
    const nameMatch = doc.name.toLowerCase().includes(searchName.toLowerCase());
    let typeMatch = true;

    if (searchType) {
      const field = searchType.toLowerCase();
      if (field === "aadhaar" || field === "pan" || field === "resume") {
        typeMatch = doc[field].toLowerCase().includes(searchStatus.toLowerCase());
      } else {
        typeMatch = false;
      }
    } else {
      
      typeMatch =
        doc.aadhaar.toLowerCase().includes(searchStatus.toLowerCase()) ||
        doc.pan.toLowerCase().includes(searchStatus.toLowerCase()) ||
        doc.resume.toLowerCase().includes(searchStatus.toLowerCase());
    }

    return nameMatch && typeMatch;
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getStatusClass = (status) => {
    if (status === "Uploaded") return "uploaded";
    if (status === "Pending") return "pending";
    if (status === "Missing") return "missing";
    return "";
  };

  return (
    <>
      <Sidebar />
      <div className="document-tracker-container">
        <div className='header'>
          <h2>Document Tracker</h2>
          <div className='topbar'>
            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" className='img' alt="User" />
            <Link to={'/admin'} className="logout-btn">Logout</Link>
          </div>
          </div>

        <div className="alert-box">Action Required : 5 documents are missing .</div>

        <div className="filter-section">
          <input
            type="text"
            placeholder="Employee Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Document Type (Aadhaar / PAN / Resume)"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          />
          <input
            type="text"
            placeholder="Status (Uploaded / Pending / Missing)"
            value={searchStatus}
            onChange={(e) => setSearchStatus(e.target.value)}
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Aadhaar</th>
                <th>PAN</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((doc, index) => (
                  <tr key={index}>
                    <td>{doc.name}</td>
                    <td>{doc.id}</td>
                    <td className={getStatusClass(doc.aadhaar)}>{doc.aadhaar}</td>
                    <td className={getStatusClass(doc.pan)}>{doc.pan}</td>
                    <td className={getStatusClass(doc.resume)}>{doc.resume}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", color: "#999" }}>
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="pagination">
            <span>
              Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)} of {filteredData.length}
            </span>
            <div>
              <button onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
              </button>
              <button onClick={handleNext} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentTracker;
