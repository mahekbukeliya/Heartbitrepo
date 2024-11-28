import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import './dataInput.css';

const DataInput = () => {
  const navigate = useNavigate();

  const handlePredictClick = () => {
    navigate('/prediction');
  };

  return (
    <DashboardLayout>
      <div className="data-input-content">
        <h1>Data Input for Prediction</h1>

        {/* Demographic Information */}
        <div className="input-box">
          <h3>Demographic Information</h3>
          <div className="row">
            <div className="col">
              <label>Age:</label>
              <input type="number" name="age" placeholder="Enter age" />
            </div>
            <div className="col">
              <label>Gender:</label>
              <select name="gender">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Occupation:</label>
              <select name="occupation">
                <option value="">Select</option>
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="retired">Retired</option>
                <option value="student">Student</option>
                <option value="student">Child</option>
              </select>
            </div>
            <div className="col">
              <label>Marital Status:</label>
              <select name="maritalStatus">
                <option value="">Select</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Medical History */}
        <div className="input-box">
          <h3>Medical History</h3>
          <div className="row">
            <div className="col">
              <label>Personal History of Heart Disease:</label>
              <select name="personalHeartDisease">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col">
              <label>Family History of Heart Disease:</label>
              <select name="familyHeartDisease">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lifestyle Factors */}
        <div className="input-box">
          <h3>Lifestyle Factors</h3>
          <div className="row">
            <div className="col">
              <label>Smoking:</label>
              <select name="smoking">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col">
              <label>Alcohol Consumption:</label>
              <select name="alcoholConsumption">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Physical Activity:</label>
              <select name="physicalActivity">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vital Signs */}
        <div className="input-box">
          <h3>Vital Signs</h3>
          <div className="row">
            <div className="col">
              <label>Blood Pressure:</label>
              <input type="text" name="bloodPressure" placeholder="Enter Blood Pressure" />
            </div>
            <div className="col">
              <label>Heart Rate (from wearable):</label>
              <input type="number" name="heartRate" placeholder="Enter Heart Rate" />
            </div>
          </div>
        </div>

         {/* Biometric Data */}
         <div className="input-box">
          <h3>Biometric Data</h3>
          <div className="row">
            <div className="col">
              <label>Weight (kg):</label>
              <input type="number" name="weight" placeholder="Enter Weight" />
            </div>
            <div className="col">
              <label>Height (cm):</label>
              <input type="number" name="height" placeholder="Enter Height" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>BMI (calculated):</label>
              <input type="text" name="bmi" placeholder="BMI will be auto-calculated" disabled />
            </div>
          </div>
        </div>

        {/* Symptoms */}
        <div className="input-box">
          <h3>Symptoms</h3>
          <div className="row">
            <div className="col">
              <label>Chest Pain:</label>
              <select name="chestPain">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col">
              <label>Shortness of Breath:</label>
              <select name="shortnessOfBreath">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Fatigue:</label>
              <select name="fatigue">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col">
              <label>Dizziness:</label>
              <select name="dizziness">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Medications */}
        <div className="input-box">
          <h3>Medications</h3>
          <div className="row">
            <div className="col">
              <label>Blood Pressure Medication:</label>
              <select name="bpMedication">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col">
              <label>Cholesterol Medication:</label>
              <select name="cholesterolMedication">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Diabetes Medication:</label>
              <select name="diabetesMedication">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="col">
              <label>Heart Disease Medication:</label>
              <select name="heartDiseaseMedication">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dietary Information */}
        <div className="input-box">
          <h3>Dietary Information</h3>
          <label>Is your diet generally:</label>
          <div>
            <input type="radio" id="healthy" name="diet" value="healthy" />
            <label htmlFor="healthy">Healthy</label>
            <input type="radio" id="unhealthy" name="diet" value="unhealthy" />
            <label htmlFor="unhealthy">Unhealthy</label>
          </div>
        </div>

        {/* Stress Level */}
        <div className="input-box">
          <h3>Stress Level</h3>
          <label>Rate your current stress level (1-5):</label>
          <input type="range" name="stressLevel" min="1" max="5" />
          <div className="stress-level-numbers">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>

        {/* Upload Reports */}
        <div className="input-box">
          <h3>Upload Reports</h3>
          <div className="row">
            <div className="col">
              <label>Cholesterol Report:</label>
              <input type="file" name="cholesterolReport" />
            </div>
            <div className="col">
              <label>Glucose Report:</label>
              <input type="file" name="glucoseReport" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Triglycerides Report:</label>
              <input type="file" name="triglyceridesReport" />
            </div>
            <div className="col">
              <label>ECG Report:</label>
              <input type="file" name="ecgReport" />
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="submit-button">Save</button>
          <button className="predict-button" onClick={handlePredictClick}>Predict</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DataInput;
