import React from 'react';
import './EmpLogin.css';
import Logo from '/Logo (2).png';
import illustration from '/Login-png.png';

const EmpLogin = () => {
  return (
    <div className="emp-login-container">
      <div className="login-content">
        <div className="login-card">
          <div className="emp-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="emp-form">
            <h2>Employee Login</h2>
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

export default EmpLogin;
