import React, { useEffect } from "react";
import { io } from "socket.io-client";
import PlayerStatus from "./playerStatus";

const socket = io();

const App: React.FC = () => {

  useEffect(() => {
    console.log('Connecting to WebSocket');
    socket.connect();

    return () => {
      console.log('Disconnecting from WebSocket');
      socket.disconnect();
    };
  }, []);


  return (
      <PlayerStatus />
  );
};

export default App;