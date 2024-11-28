import React, { useState } from 'react';
import './SignupPage.css'; // Link the CSS file

function SignupPage() {
    // State for form inputs
    const [newUsername, setNewUsername] = useState('');
    const [email, setEmail] = useState('');   
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {                       
        event.preventDefault();

        // Validate passwords match
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Validate all fields are filled
        if (newUsername && newPassword && email) {
            try {
                const response = await fetch('http://127.0.0.1:5000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        newUsername,
                        email,
                        newPassword,
                    }),
                });

                const data = await response.json();
                if (response.ok) {
                    alert(data.message);
                    window.location.href = '/login'; // Redirect to login
                } else {
                    alert(data.error || 'An error occurred');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to connect to server.');
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="background-container">
            <div className="large-rectangle">
                <div className="signup-container">
                    <h1>Sign Up for HeartBit</h1>
                    <form id="signup-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="new-username">Username</label>
                            <input
                                type="text"
                                id="new-username"
                                name="new-username"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-password">Password</label>
                            <input
                                type="password"
                                id="new-password"
                                name="new-password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button1">Sign Up</button>
                        <p className="login-link">
                            Already have an account? <a href="/login">Log In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default SignupPage;
