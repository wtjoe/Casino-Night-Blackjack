import React, { useEffect } from "react";
import Socket from "./components/Socket";
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

  return (
    <>
      <Socket />
      <GameHeader/>
      <Dealer dealer={game.dealer} />
      <JoinForm />
      <Player player={game.player} />
      <Opponents opponents={game.opponents} />
    </>
)};

export default App;