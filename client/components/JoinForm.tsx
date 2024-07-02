import React, { useState } from 'react';
import { Socket } from "socket.io-client";

interface JoinFormProps {
  setPlayerID: (id: string) => void;
  socket: Socket | null;
}



const JoinForm: React.FC<JoinFormProps> = ({ setPlayerID, socket }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (socket) {
      socket.emit('join', username, (id: string) => {
        setPlayerID(id);
        localStorage.setItem('playerID', id)
      });
    };
  };

  return (
    <>
    <h1>Join the Game</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    <button type="submit">Join</button>
    </form>
  </>
  );
};

export default JoinForm;