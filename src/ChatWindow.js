import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to React Chat!', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: Date.now(),
      text: input,
      sender: 'me',
    };
    setMessages((msgs) => [...msgs, newMsg]);
    setInput('');
  };

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        maxWidth: '600px',
        margin: 'auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          flexGrow: 1,
          padding: '10px',
          overflowY: 'auto',
          backgroundColor: '#f7f7f7',
        }}
      >
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} isOwn={msg.sender === 'me'} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div
        style={{
          display: 'flex',
          padding: '10px',
          borderTop: '1px solid #ddd',
          backgroundColor: 'white',
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            flexGrow: 1,
            padding: '10px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            outline: 'none',
            marginRight: '10px',
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: '#4f93ff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
