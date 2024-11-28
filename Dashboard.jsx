// Dashboard.js
import React from 'react';
import DashboardLayout from './DashboardLayout';
import HeartStatistics from '../components/HeartStatistics';
import LatestPredictions from '../components/LatestPredictions';
import Recommendations from '../components/Recommendations';
import Overview from '../components/HeartOverview';
import ECGCard from '../components/ECGCard';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-12">
              <HeartStatistics />
            </div>
            <div className="col-12">
              <LatestPredictions />
            </div>
            <div className="col-12">
              <Recommendations />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="overview-container">
            <Overview />
            <div className="ecg-card-container">
              <ECGCard />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
