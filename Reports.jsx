import React from 'react';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import DashboardLayout from './DashboardLayout';
import './reports.css';

const Reports = () => {
  const location = useLocation();
  const { patientData, predictedDiseases } = location.state || {};

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Heart Health Report', 20, 20);

    // Patient Details
    doc.setFontSize(14);
    doc.text('Patient Information', 20, 30);
    doc.text(`Name: ${patientData?.name || 'N/A'}`, 20, 40);
    doc.text(`Age: ${patientData?.age || 'N/A'}`, 20, 50);
    doc.text(`Gender: ${patientData?.gender || 'N/A'}`, 20, 60);
    doc.text(`Uploaded Reports: ${patientData?.uploadedReports.join(', ') || 'N/A'}`, 20, 70);
    doc.text(' ', 20, 80); // Adding space

    // Predictions Section
    doc.text('Predicted Diseases:', 20, 90);

    // Set up table data
    const tableData = predictedDiseases && predictedDiseases.length > 0
      ? predictedDiseases.map(disease => [disease.name, disease.cause, disease.recommendation])
      : [['No predictions available.', '', '']];

    // Use autotable for better formatting
    doc.autoTable({
      head: [['Disease', 'Cause', 'Recommendation']],
      body: tableData,
      startY: 95,
      styles: { fontSize: 12 },
      headStyles: { fillColor: [192, 57, 43], textColor: [255, 255, 255] }, // Change the header color to #c0392b
      margin: { top: 10 },
    });

    // Save the PDF
    doc.save('heart_health_report.pdf');
  };

  return (
    <DashboardLayout>
      <h1 className="title">Heart Health Report</h1>
      <section className="report-details">
        <h2 className="section-title">Patient Information</h2>
        <p>Name: {patientData?.name || 'N/A'}</p>
        <p>Age: {patientData?.age || 'N/A'}</p>
        <p>Gender: {patientData?.gender || 'N/A'}</p>
        <p>Uploaded Reports: {patientData?.uploadedReports.join(', ') || 'N/A'}</p>

        <h2 className="section-title">Predicted Diseases</h2>
        <ul>
          {predictedDiseases && predictedDiseases.length > 0 ? (
            predictedDiseases.map((disease, index) => (
              <li key={index}>
                <strong>{disease.name}</strong> - Cause: {disease.cause} <br /> 
                Recommendation: {disease.recommendation}
              </li>
            ))
          ) : (
            <li>No predictions available.</li>
          )}
        </ul>
      </section>

      <div className="download-report">
        <button className="download-btn" onClick={downloadPDF}>
          Download PDF Report
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
