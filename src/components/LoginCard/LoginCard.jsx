import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../uiKit/Input';
import PasswordInput from '../../uiKit/PasswordInput';
import Checkbox from '../../uiKit/Checkbox';
import Button from '../../uiKit/Button';
import './LoginCard.scss';

const LoginCard = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    }

    if (valid) {
      navigate('/single-invite');
    }
  };

   const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.trim()) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim()) {
      setPasswordError('');
    }
  };

  return (
    <div className="card-container">
      <h2 className="poppins-font-family">Welcome,</h2>
      <span className="poppins-font-family">Login to continue to ENTRA</span>

      <div className="login-form">
        <span className="poppins-font-family font-size-md">Email Address</span>
        <Input
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p className="error-text">{emailError}</p>}

        <span className="poppins-font-family font-size-md">Password</span>
        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <p className="error-text">{passwordError}</p>}

        <div className="forgot-password">
          <span className="poppins-font-family font-size-small">Forgot Password?</span>
        </div>

        <Checkbox label="Remember me" />

        <Button
          className="primary-button"
          label="Login"
          handleClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default LoginCard;
