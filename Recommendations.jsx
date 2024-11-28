import React from 'react';
import './Recommendations.css';

const Recommendations = () => {
  return (
    <div className="recommendations1">
      <h2>Recommendations</h2>
      <div className="recommendation-card1">
        <div className="recommendation-icon1"><i className="fas fa-heartbeat"></i></div>
        <div className="recommendation-text1">
          <h3>Exercise Regularly</h3>
          <p>Engage in at least 30 minutes of moderate-intensity exercise most days of the week.</p>
        </div>
      </div>
      <div className="recommendation-card1">
        <div className="recommendation-icon1"><i className="fas fa-apple-alt"></i></div>
        <div className="recommendation-text1">
          <h3>Healthy Diet</h3>
          <p>Maintain a balanced diet rich in fruits, vegetables, and whole grains, and low in saturated fats.</p>
        </div>
      </div>
      <div className="recommendation-card1">
        <div className="recommendation-icon1"><i className="fas fa-prescription-bottle-alt"></i></div>
        <div className="recommendation-text1">
          <h3>Medications</h3>
          <p>Take prescribed medications regularly and as directed by your healthcare provider.</p>
        </div>
      </div>
      <div className="recommendation-card1">
        <div className="recommendation-icon1"><i className="fas fa-smile"></i></div>
        <div className="recommendation-text1">
          <h3>Stress Management</h3>
          <p>Practice relaxation techniques and maintain a positive outlook to reduce stress levels.</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
