
import React from 'react';
import { FaCarBattery } from 'react-icons/fa';
import '../styles/DashboardHeader.css';

function DashboardHeader() {
  return (
    <header className="dashboard-header p-3 mb-4 bg-primary text-white">
      <h1><FaCarBattery /> Simple Energy Fleet Management Dashboard</h1>
    </header>
  );
}

export default DashboardHeader;
