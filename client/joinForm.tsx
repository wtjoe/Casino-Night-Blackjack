import React, { useState } from 'react';

interface JoinFormProps {
  onJoin: (username: string) => void;
}

const JoinForm: React.FC<JoinFormProps> = ({ onJoin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onJoin(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button type="submit">Join</button>
    </form>
  );
};

export default JoinForm;