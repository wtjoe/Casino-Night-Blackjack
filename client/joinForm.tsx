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
  const [hasJoined, setHasJoined] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    join(username);
    setHasJoined(true);
  };

  return (
    <div>
        {hasJoined ? (
        <p>You have joined the game!</p>
      ) : (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit">Join</button>
        </form>)}
    </div>

  );
};

export default JoinForm;