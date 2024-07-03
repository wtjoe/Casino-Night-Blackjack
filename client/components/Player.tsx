import React from "react";
import Hand from "./Hand";
import { PlayerState } from "./types";

interface PlayerProps {
    player: PlayerState;
  }

  type Player = {
    name: string;
    id: string;
    chips: number;
    hands?: Hand[];
  };


const Player: React.FC<PlayerProps> = ({ player }) => {
  return <>
    <h1>{player.name}</h1>
    <div>ID: {player.id}</div>
    <div>Chips:  {player.chips}</div>
    <button>Bet 10</button>
    <button>Deal</button>
    <button>Hit</button>
    <button>Stay</button>
    <button>Double Down</button>
    <button>Split</button>
    {/* <Hand hand={player.hands[0]} /> */}


  </>;
};

export default Player;