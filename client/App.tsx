import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import GameHeader from "./components/GameHeader";
import Dealer from "./components/Dealer";
import JoinForm from "./components/JoinForm";
import Player from "./components/Player";
import Opponents from "./components/Opponents";
import { TableState, PlayerState, Hand, Card } from './components/types';

const App: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [playerID, setPlayerID] = useState<string | null>(null);
  const [table, setTable] = useState<TableState | null>(null);

  const tableUpdate = (newTableState: string) => {
    let table = JSON.parse(newTableState);
    let dealer = table.dealer;
    let player = table.players[0];
    let opponents = table.players.slice(1);
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
      <JoinForm setPlayerID={setPlayerID} socket={socket}/>
      {table?.player && <Player player={table.player} />}
      {/* {table.opponents && table.opponents.length > 0 && <Opponents opponents={table.opponents} />} */}

    </>
)};

export default App;