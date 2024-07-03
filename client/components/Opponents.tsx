import React from 'react';
import Opponent from './Opponent';
import Hand from "./Hand";

interface OpponentsProps {
  opponents: {
    name: string;
    id: string;
    chips: number;
    hands?: Hand[];
  }[];
}

const Opponents: React.FC<OpponentsProps> = ({ opponents }) => {
  return (
    <>
      {opponents.map((opponent, index) => (
        <Opponent key={index} opponent={opponent} />
      ))}
    </>
  );
};

export default Opponents;