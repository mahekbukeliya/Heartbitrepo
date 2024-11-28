import React from 'react';
import './HeartOverview.css'; // Import the CSS for styling
import { FaHeart } from 'react-icons/fa'; // Using React Icons for heart symbol

const HeartOverview = () => {
  return (
    <div className="heart-overview">
      <h2 className="header">Heart Overview</h2>
      <div className="overview-container">
        <div className="circles">
          <div className="outer-circle">
            <div className="inner-circle">
              <FaHeart className="heart-icon" />
            </div>
          </div>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <ul>
            <li>Heart rate is currently stable and within the normal range.</li>
            <li>Cholesterol levels have been slightly elevated, requiring regular monitoring.</li>
            <li>SpO2 levels are stable and indicate good oxygen saturation.</li>
            <li>Blood pressure readings are consistent with typical values for your age group.</li>
            <li>Periodic follow-ups with your healthcare provider are advised to monitor these metrics.</li>
            <li>Consider incorporating stress management techniques to support cardiovascular health.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeartOverview;
