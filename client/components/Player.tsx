import React from "react";

const Player: React.FC = () => {
  return <>
    <h1>Player Name</h1>
    <div>
        Chips go here
    </div>
    <button>Bet 10</button>
    <button>Deal</button>
    <button>Hit</button>
    <button>Stay</button>
    <button>Double Down</button>
    <button>Split</button>
    <div>
        Player's hand bet goes here
    </div>
    <div>
        Player's hand cards go here
    </div>
    <div>
        Player's hand value goes here
    </div>
    <div>
        Player's hand result goes here
    </div>


  </>;
};

export default Player;