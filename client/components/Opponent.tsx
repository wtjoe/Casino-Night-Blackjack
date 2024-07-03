import React from "react";
import Hand from "./Hand";

interface OpponentProps {
    opponent: {
        name: string;
        id: string;
        chips: number;
        hands?: Hand[];
        };
    };

const Opponent: React.FC<OpponentProps> = ({ opponent }) => {
  return <>
    <h1>{opponent.name}</h1>
    <div>
        Chips:  {opponent.chips}
    </div>
    {/* <Hand hand={opponent.hands[0]} /> */}


  </>;
};

export default Opponent;