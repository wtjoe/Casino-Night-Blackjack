import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io();

const App: React.FC = () => {
  React.useEffect(() => {
    console.log('Connecting to WebSocket');
    socket.connect();

    return () => {
      console.log('Disconnecting from WebSocket');
      socket.disconnect();
    };
  }, []);

  return <h1>TypeScript is awesome</h1>;
};

export default App;