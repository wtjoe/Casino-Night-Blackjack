import React, { useState } from 'react';

// interface JoinFormProps {
//   onJoin: (username: string) => void;
// }

const JoinForm: React.FC = () => {
//   const [username, setUsername] = useState('');

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     onJoin(username);
//   };

  return (
    <>
    <h1>Join the Game</h1>
    <form>
    <input type="text"/>
    <button type="submit">Join</button>
    </form>
  </>
  );
};

export default JoinForm;