// src/Message.js
import React from 'react';
import './Message.css';

export default function Message({ text, isOwn }) {
  return <div className={`message ${isOwn ? 'own' : ''}`}>{text}</div>;
}
