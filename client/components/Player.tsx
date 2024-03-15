import React from "react";
import Hand from "./Hand";

interface PlayerProps {
    player: {
      name: string;
      chips: number;
      hands: {
        bet: number;
        cards: string[];
        value: number;
        result: string;
      }[];
    };
  }

const Player: React.FC<PlayerProps> = ({ player }) => {
  return <>
    <h1>{player.name}</h1>
    <div>Chips:  {player.chips}</div>
    <button>Bet 10</button>
    <button>Deal</button>
    <button>Hit</button>
    <button>Stay</button>
    <button>Double Down</button>
    <button>Split</button>
    <Hand hand={player.hands[0]} />


  </>;
};

export default Player;