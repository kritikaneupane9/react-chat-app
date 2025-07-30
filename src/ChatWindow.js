// src/ChatWindow.js
import React, { useState } from 'react';
import Message from './Message';
import './ChatWindow.css';

export default function ChatWindow({ user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { user: user.username, text: input }]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Welcome {user.username}</div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <Message key={i} text={msg.text} isOwn={msg.user === user.username} />
        ))}
      </div>
      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
