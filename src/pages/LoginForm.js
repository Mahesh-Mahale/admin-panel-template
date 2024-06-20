import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      setError('');
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-form-container">
      <div className='main'>
        <div className='title'>Effective, Easy and Fast</div>
        <p className='sub-title'>Unleashing the Magic of Alt Text for our Dazzling Image Showcase.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className='login-logo'></div>
          <div className='form-title'>Sign in to your account</div>
          <p className='form-sub-title'>Embrace the Power of Words with our Alt Text AI</p>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <input
              placeholder="Email Address"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='forget-pass-btn'><a href='#'>Forgot password?</a></div>
          <button className="login-btn" type="submit"><span className='login-btn-text'>Sign In</span></button>
        </form>
        <div className='bottom-login-logo'></div>
        <p className='copyright-text'>copyright ©2023 hurix.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LoginForm;
