import React, { useState } from 'react';
import JoinForm from "./joinForm";

import { io } from "socket.io-client";
const socket = io();

const PlayerStatus: React.FC = () => {
  const [hasJoined, setHasJoined] = useState(false);
  const [player, setPlayer] = useState(null);


  const join = (username: string) => {
    socket.emit('join', username, (error: any) => {
      if (error) {
        console.error('Error joining:', error);
      } else {
        console.log('Joined successfully');
        setHasJoined(true);
        setPlayer(player); // Update state with player data
      }
    });
  };

  return (
    hasJoined ? <p>welcome player!</p> : <JoinForm onJoin={join} />
  );

};
 

export default PlayerStatus;