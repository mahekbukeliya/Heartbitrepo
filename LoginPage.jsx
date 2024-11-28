import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (username === 'user' && password === 'password') {
        navigate('/dashboard');
      } else {
        alert('Invalid username or password');
      }
    };
  
    return (
      <div className="background-container1">
        <div className="large-rectangle">
          <div className="login-container1">
            <h1>Login to HeartBit</h1>
            <form id="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button1">Login</button>
              <p className="forgot-password">
                <a href="/forgot-password">Forgot Password?</a>
              </p>
              <p className="signup-link">
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginPage;