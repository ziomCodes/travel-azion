// SignupLogin.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/SignupLogin.css';

function SignupLogin() {
  const location = useLocation();
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '', phone: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Check URL parameter to toggle between signup and login mode
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('mode') === 'login') {
      setIsSignup(false); // Open login form directly
    }
  }, [location]);

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setMessage('');
    setError('');
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // Handle signup form validation and saving data in localStorage
      if (!formData.phone || !formData.username || !formData.password) {
        setError('All fields are required.');
        return;
      }
      localStorage.setItem('user', JSON.stringify(formData));
      setMessage('Signed up successfully! Please log in.');
      setTimeout(() => {
        setIsSignup(false); // Automatically switch to login form after signup
      }, 2000);
    } else {
      // Handle login form validation
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === formData.username && user.password === formData.password) {
        setMessage('Logged in successfully!');
        setTimeout(() => {
          window.location.href = '/booking'; // Redirect to booking page
        }, 2000);
      } else {
        setError('Invalid credentials.');
      }
    }
  };

  return (
    <div className="signup-login">
      <button onClick={handleToggle}>
        {isSignup ? 'Already have an account? Login' : 'New user? Sign up'}
      </button>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            onChange={handleChange}
          />
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
      </form>
    </div>
  );
}

export default SignupLogin;
