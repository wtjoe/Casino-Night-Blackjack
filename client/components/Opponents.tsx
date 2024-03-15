import React from 'react';
import Opponent from './Opponent';

interface OpponentsProps {
  opponents: {
    name: string;
    id: number;
    chips: number;
    hands: {
      bet: number;
      cards: string[];
      value: number;
      result: string;
    }[];
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