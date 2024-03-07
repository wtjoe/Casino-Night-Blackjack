import React, { useState } from 'react';
import { io } from "socket.io-client";
const socket = io();

const join = (username: string) => {
    socket.emit('join', username, (error: any) => {
      if (error) {
        console.error('Error joining:', error);
      } else {
        console.log('Joined successfully');
      }
    });
  };

const JoinForm: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    join(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button type="submit">Join</button>
    </form>
  );
};

export default JoinForm;