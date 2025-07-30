import React, { useState } from 'react';
import "./App.css";


export default function Login({ onLogin, onSwitch }) {
  const [username, setUsername] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <button type="submit">Login</button>
        <p onClick={onSwitch}>Don't have an account? Register</p>
      </form>
    </div>
  );
}
