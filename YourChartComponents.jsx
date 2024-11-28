// src/components/YourChartComponents.js
import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// Example GaugeChart Component (you can customize it)
export const GaugeChart = ({ value }) => {
  // You'd need a custom implementation or a library that supports gauge charts.
  return <div>Gauge Chart Placeholder (Value: {value})</div>;
};

// Example PieChart Component
export const PieChart = ({ data }) => (
  <Pie data={data} />
);

// Example BarChart Component
export const BarChart = ({ data }) => (
  <Bar data={data} />
);

// Example TimeSeriesChart Component
export const TimeSeriesChart = ({ data }) => (
  <Line data={data} />
);

// Example Heatmap Component
export const Heatmap = () => {
  return <div>Heatmap Placeholder</div>;
};
