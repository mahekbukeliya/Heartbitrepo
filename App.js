// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './pages/UserContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import DataInput from './pages/DataInput';
import Prediction from './pages/Prediction';
import Reports from './pages/Reports';
import Manage from './pages/Manage';

import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/datainput" element={<DataInput />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
