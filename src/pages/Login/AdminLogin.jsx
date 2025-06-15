import React from 'react';
import './AdminLogin.css';
import Logo from '/Logo (2).png';
import illustration from '/Login-png.png';

const AdminLogin = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-card">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="form">
            <h2>Admin Login</h2>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
            <button>Sign In</button>
            <p className="forgot">Forgot Password ?</p>
          </div>
        </div>
        <div className="login-illustration">
          <img src={illustration} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
