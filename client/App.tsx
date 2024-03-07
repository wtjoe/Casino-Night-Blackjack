import React, { useEffect } from "react";
import { io } from "socket.io-client";
import JoinForm from "./joinForm";
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
    <div>
      <JoinForm />
    </div>
  );
};

export default App;