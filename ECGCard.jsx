import React from 'react';
import './ECGCard.css';
import ecgImage from '../pages/ECGimage.jpg'; // Replace with your ECG image

const ECGCard = () => (
  <div className="ecg-card">
    <img src={ecgImage} alt="ECG" className="ecg-image" />
    <div className="ecg-summary">
      <h4>ECG Overview</h4>
      <ul>
          <li>This ECG shows a normal sinus rhythm with no evident abnormalities.</li>
          <li>The heart rate is within a normal range.</li>
          <li>The waveform morphology is consistent with a healthy cardiac function.</li>
          <li>No signs of ischemia, arrhythmia, or other cardiac irregularities are present.</li>
        </ul>
    </div>
  </div>
);

export default ECGCard;
