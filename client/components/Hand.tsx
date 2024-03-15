import React from "react";

interface HandProps {
    hand: {
      bet: number;
      cards: string[];
      value: number;
      result: string;
    };
  }
  
  const Hand: React.FC<HandProps> = ({ hand }) => {
    return (
      <>
        <p>Hand</p>
        <div>Hand bet amount: {hand.bet}</div>
        <div>Hand cards: {hand.cards}</div>
        <div>Hand value: {hand.value}</div>
        <div>Hand result: {hand.result}</div>
      </>
    );
  };

  export default Hand;