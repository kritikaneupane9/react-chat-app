// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ChatWindow from './ChatWindow';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (userData) => setUser(userData);

  if (!user) {
    return showLogin ? (
      <Login onLogin={handleLogin} onSwitch={() => setShowLogin(false)} />
    ) : (
      <Register onRegister={handleLogin} onSwitch={() => setShowLogin(true)} />
    );
  }

  return <ChatWindow user={user} />;
}

