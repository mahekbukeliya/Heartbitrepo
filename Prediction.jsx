import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import DashboardLayout from './DashboardLayout';
import './prediction.css';

const Prediction = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Sample data for demonstration
  const patientData = {
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    uploadedReports: ['Report1.pdf', 'Report2.pdf']
  };

  const predictedDiseases = [
    {
      name: 'Coronary Artery Disease',
      cause: 'High cholesterol, smoking, high blood pressure.',
      recommendation: 'Maintain a healthy diet, exercise regularly, and consult your doctor.'
    },
    {
      name: 'Hypertension',
      cause: 'Obesity, stress, high salt intake.',
      recommendation: 'Reduce salt intake, manage stress through yoga and meditation.'
    },
    {
      name: 'Heart Failure',
      cause: 'Coronary artery disease, high blood pressure.',
      recommendation: 'Monitor weight, follow a heart-healthy diet.'
    }
  ];

  // Navigate to Reports page with patientData and predictedDiseases
  const handleDownloadReport = () => {
    navigate('/reports', {
      state: { patientData, predictedDiseases } // Pass the data here
    });
  };

  return (
    <DashboardLayout>
      <h1 className="title">Heart Health Prediction</h1>
      <p className="description">
        Based on your input data, the following predictions about your heart health have been made.
      </p>

      <section className="prediction-details">
        <h2 className="section-title">Prediction Results</h2>
        <div className="disease-info">
          {predictedDiseases.map((disease, index) => (
            <div key={index}>
              <p>{`${index + 1}. ${disease.name}`}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ai-analysis">
        <h2 className="section-title">AI-Based Analysis</h2>
        <div className="analysis-container">
          <div className="causes">
            <h3>Causes of Predicted Diseases</h3>
            <ul>
              {predictedDiseases.map((disease, index) => (
                <li key={index}>{`${disease.name}: ${disease.cause}`}</li>
              ))}
            </ul>
          </div>
          <div className="recommendations">
            <h3>Recommendations</h3>
            <ul>
              {predictedDiseases.map((disease, index) => (
                <li key={index}>{`${disease.name}: ${disease.recommendation}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="download-report">
        <button className="download-btn" onClick={handleDownloadReport}>
          View Report
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Prediction;
