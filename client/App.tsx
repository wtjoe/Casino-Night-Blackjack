import React, { useEffect } from "react";
import { io } from "socket.io-client";
import GameHeader from "./components/GameHeader";
import Dealer from "./components/Dealer";
import JoinForm from "./components/JoinForm";
import Player from "./components/Player";
import Opponents from "./components/Opponents";




const App: React.FC = () => {
  const [game, setGame] = React.useState({
    dealer: {
      dealerHand: ["A", "K"], value: 21, result: "BlackJack!",
    },
    player:
      {
        name: "Joe", chips: 100,
        hands: [
          {
            bet: 10, cards: ["10", "6"], value: 16, result: "LOSE"
          }
        ]
      },
    opponents: [      
      {
        name: "Opponent", id: 1, chips: 100,
        hands: [
          {
            bet: 10, cards: ["A", "K"], value: 21, result: "Push",
          },
          {
            bet: 10, cards: ["2", "2"], value: 4, result: "LOSE",
          }
        ]
      },
    ]
  });

  const gameUpdate = (newGameState: any) => {
    let game = JSON.parse(newGameState);
    let dealer = game.dealer;
    let player = game.players[0];
    let opponents = game.players.slice(1);
    setGame({ dealer, player, opponents });
  };



  React.useEffect(() => {

    const socket = io();
    console.log('Connecting to WebSocket');
    socket.connect();

    socket.on('gameUpdate', (newGameState) => {
      console.log('gameUpdate received');
      gameUpdate(newGameState);
    });

    return () => {
      console.log('Disconnecting from WebSocket');
      socket.disconnect();
    };
  }, []);


  



  

  return (
    <>
      <GameHeader/>
      <Dealer dealer={game.dealer} />
      <JoinForm />
      <Player player={game.player} />
      <Opponents opponents={game.opponents} />
    </>
)};

export default App;