import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io();



const Socket: React.FC = () => {
  React.useEffect(() => {
    console.log('Connecting to WebSocket');
    socket.connect();

    return () => {
      console.log('Disconnecting from WebSocket');
      socket.disconnect();
    };
  });

  return null;
};

export default Socket;