import React from "react";

interface DealerProps {
  dealer: {
      dealerHand: string[];
      value: number;
      result: string;
    };
  };

const Dealer: React.FC<DealerProps> = ({ dealer }) => {
  return <>
    <h1>Dealer</h1>
    <div>
        Dealer's instructions go here
    </div>
    <div>
        Dealer's Hand: {dealer.dealerHand}
    </div>
    <div>
        Dealer Hand Value: {dealer.value}
    </div>
    <div>
        Dealer Hand Result: {dealer.result}
    </div>
  </>;
};

export default Dealer;