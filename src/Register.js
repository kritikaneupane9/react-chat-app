// src/Register.js
import React, { useState } from 'react';
import './Login.css';

export default function Register({ onRegister, onSwitch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ username });
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <button type="submit">Register</button>
        <p onClick={onSwitch}>Already have an account? Login</p>
      </form>
    </div>
  );
}
