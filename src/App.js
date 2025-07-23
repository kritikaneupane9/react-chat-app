import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import Login from './Login';
import Register from './Register';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleRegister = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
    setShowLogin(true);
  };

  if (!user) {
    return showLogin ? (
      <Login
        onLoginClick={handleLogin}
        onSwitchToRegister={() => setShowLogin(false)}
      />
    ) : (
      <Register
        onRegisterClick={handleRegister}
        onSwitchToLogin={() => setShowLogin(true)}
      />
    );
  }

  return (
    <div>
      <header style={{ padding: '10px 20px', textAlign: 'right' }}>
        <span style={{ marginRight: 20 }}>Hi, {user}</span>
        <button
          onClick={handleLogout}
          style={{
            padding: '6px 12px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#f44336',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </header>
      <ChatWindow user={user} />
    </div>
  );
}

export default App;

