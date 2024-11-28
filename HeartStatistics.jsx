import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './HeartStatistics.css';

const HeartStatistics = () => {
  // Dummy values
  const bpm = 75;
  const spo2 = 95;
  const cholesterol = 180;

  return (
    <div className="heart-statistics">
      <h2>Heart Statistics</h2>
      <div className="stats-container">
        <div className="stat-box">
          <i className='fas fa-heartbeat'></i>
          <h3>BPM</h3>
          <CircularProgressbar 
            value={bpm} 
            maxValue={200} 
            text={`${bpm}`} 
            styles={buildStyles({
              pathColor: '#df556c',
              textColor: '#390606',
              trailColor: '#f1f3f5',
            })}
          />
        </div>
        <div className="stat-box">
          <i className='fas fa-lungs'></i>
          <h3>SpO2</h3>
          <CircularProgressbar 
            value={spo2} 
            maxValue={100} 
            text={`${spo2}%`} 
            styles={buildStyles({
              pathColor: '#9acd32',
              textColor: '#390606',
              trailColor: '#f1f3f5',
            })}
          />
        </div>
        <div className="stat-box">
          <i className='fas fa-tachometer-alt'></i>
          <h3>Cholesterol</h3>
          <CircularProgressbar 
            value={cholesterol} 
            maxValue={300} 
            text={`${cholesterol}`} 
            styles={buildStyles({
              pathColor: '#3b6af7fb',
              textColor: '#390606',
              trailColor: '#f1f3f5',
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default HeartStatistics;
