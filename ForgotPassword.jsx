import React from 'react';
import '../pages/ForgotPassword.css'; // Import the CSS file for styling

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <h1>Forgot Your Password?</h1>
      <p>Enter your email address below, and we'll send you instructions to reset your password.</p>
      
      {/* Form for entering the email address */}
      <form id="forgot-password-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <button type="submit" className="submit-button2">
          Send Reset Link
        </button>
        
        {/* Navigation link back to the login page */}
        <p className="login-link1">
          Remember your password? <a href ="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
