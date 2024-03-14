import React, { useEffect } from "react";
import Socket from "./Socket";
import GameHeader from "./GameHeader";
import Dealer from "./Dealer";




const App: React.FC = () => {
  return <>
    <Socket />
    <GameHeader />
    <Dealer />

  </>
};

export default App;