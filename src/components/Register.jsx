import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State for the pop-up message
  const [showMessage, setShowMessage] = useState(false);
  const [success,setSuccess]=useState(false) // State to control pop-up visibility

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post('http://localhost:8000/auth/register/', {
        username,
        email,
        password,
      });

      // Show success message
      setMessage('Verification link sent to your email!');
      setShowMessage(true);

      // Clear form fields
      setEmail('');
      setUsername('');
      setPassword('');

      // Hide the message after 3 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
      setMessage('Registration failed. Please try again.');
      setSuccess(false)
      setShowMessage(true);

      // Hide the message after 3 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-info">
          <h2>Create a resume you are proud of</h2>
          <ul>
            <li>🚀 Save time with hassle-free templates</li>
            <li>💡 Beat the competition using actionable, contextual advice</li>
            <li>🔥 Highlight key achievements with memorable visuals</li>
          </ul>
          <a href="#">Get inspired by 1800+ Free Resume Examples and Templates</a>
        </div>

        <div className="signup-form">
          <h2>Create your account</h2>
          <input
            type="text"
            placeholder="Your name"
            value={username} // Bind input to state
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email} // Bind input to state
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password} // Bind input to state
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="checkbox">
            <input type="checkbox" /> I agree to <a href="#">Terms of Service</a> and{' '}
            <a href="#">Privacy policy</a>
          </div>
          <div className="checkbox">
            <input type="checkbox" /> Email me tailored resume advice & updates
          </div>
          <button className="create-account" onClick={handleRegister}>
            CREATE AN ACCOUNT
          </button>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>

      {/* Pop-up message */}
      {showMessage && <div className={`popup-message ${success ? 'success' : 'error'}`}>{message}</div>}
    </div>
  );
};

export default SignupPage;