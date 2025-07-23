import React from 'react';

export default function Message({ message, isOwn }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isOwn ? 'flex-end' : 'flex-start',
        margin: '5px 0',
      }}
    >
      <div
        style={{
          backgroundColor: isOwn ? '#4f93ff' : '#e5e5ea',
          color: isOwn ? 'white' : 'black',
          padding: '10px 15px',
          borderRadius: '15px',
          maxWidth: '60%',
          wordBreak: 'break-word',
        }}
      >
        {message.text}
      </div>
    </div>
  );
}
