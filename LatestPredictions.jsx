// LatestPredictions.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './LatestPredictions.css';

// Sample data
const data = [
  { name: 'Jan', Risk: 40 },
  { name: 'Feb', Risk: 30 },
  { name: 'Mar', Risk: 20 },
  { name: 'Apr', Risk: 27 },
  { name: 'May', Risk: 18 },
  { name: 'Jun', Risk: 23 },
  { name: 'Jul', Risk: 34 },
];

// Graph component
const Graph = () => (
  <LineChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Risk" stroke="#ff6f61" />
  </LineChart>
);

const LatestPredictions = () => (
  <div className="latest-predictions">
    <h3>Latest Risk Predictions</h3>
    <div className="graph-container">
      <Graph />
    </div>
  </div>
);

export default LatestPredictions;
