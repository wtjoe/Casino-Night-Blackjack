import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import GameHeader from "./components/GameHeader";
import Dealer from "./components/Dealer";
import JoinForm from "./components/JoinForm";
import Player from "./components/Player";
import Opponents from "./components/Opponents";
import { TableState } from './components/types';
import { Card } from "cards";


const App: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [playerID, setPlayerID] = useState<string | null>(null);
  const [table, setTable] = useState<TableState | null>(null);

  const tableUpdate = (newTableState: string) => {
    let table = JSON.parse(newTableState);
    let dealer = table.dealer;
    // Retrieve player ID from local storage
    const currentPlayerID = localStorage.getItem('playerID');

    // Find the player with the matching ID, now explicitly typed
    let player = table.players.find((p: Player) => p.id === currentPlayerID);
    

    // Define opponents as any other players, with explicit typing
    let opponents = table.players.filter((p: Player) => p.id !== currentPlayerID);
    setTable({ dealer, player, opponents });
  };



  React.useEffect(() => {
    const socket = io();
    setSocket(socket);

    console.log('Connecting to WebSocket');

    socket.on('gameUpdate', (newTableState) => {
      console.log('gameUpdate received');
      console.log(newTableState);
      tableUpdate(newTableState);
    });

    return () => {
      console.log('Disconnecting from WebSocket');
      socket.disconnect();
    };
    
  }, []);



  



  

  return (
    <>
      <GameHeader/>
      {/* <Dealer dealer={table.dealer} /> */}
      {!table?.player && <JoinForm setPlayerID={setPlayerID} socket={socket}/>}
      {table?.player && <Player player={table.player} />}
      {table?.opponents && table.opponents.length > 0 && <Opponents opponents={table.opponents} />}

    </>
)};

export default App;