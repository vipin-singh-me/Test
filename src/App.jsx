import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/Login/AdminLogin';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import EmployeeDirectory from './pages/EmployeeDirectory/EmployeeDirectory';
import LeaveReaquest from './pages/LeavesReaquest/LeaveReaquest';
import DocumentTracker from './pages/DocumentTracker/DocumentTracker';
import Analytics from './pages/Analytics/Analytics';
import Notifications from './pages/Notification/Notifications';
import EmployeeDetail from './components/EmployeeDetail/EmployeeDetail';
import EmpLogin from './pages/EmpLogin/EmpLogin';
import EmployeeDashboard from './EmployeeDash/EmployeeDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/employee-directory" element={<EmployeeDirectory />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="/leave-reaquest" element={<LeaveReaquest />} />
        <Route path="/document-tracker" element={<DocumentTracker />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/" element={<EmpLogin />} />
        <Route path="/emp/dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
