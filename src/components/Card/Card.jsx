import React from 'react';
import './Card.css';

const StatCard = ({ title, value, subtitle, icon }) => {
  return (
    <div className="stat-card">
      <div className="icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p className="value">{value}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatCard;
